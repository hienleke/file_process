const JSZip  = require('jszip');
const { DOMParser } = require('xmldom');
const fs = require('fs');

function getTextFromNodes(node, tagName, namespaceURI) {
  let text = '';
  const textNodes = node.getElementsByTagNameNS(namespaceURI, tagName);
  for (let i = 0; i < textNodes.length; i++) {
    text += textNodes[i].textContent + ' ';
  }
  return text.trim();
}

async function processFile(inputFilePath, outputFilePath) {
  try {
    // Step 1: Read the PPTX file into an array buffer
    const arrayBuffer = fs.readFileSync(inputFilePath);
    
    // Step 2: Initialize JSZip and load the PPTX file from arrayBuffer
    const zip = new JSZip();
    await zip.loadAsync(arrayBuffer);

    // Define the namespace URI for drawingml
    const aNamespace = "http://schemas.openxmlformats.org/drawingml/2006/main";
    
    // Step 3: Loop through slides and modify text content
    let slideIndex = 1;
    while (true) {
      const slideFile = zip.file(`ppt/slides/slide${slideIndex}.xml`);
      
      if (!slideFile) break; // Break if no more slides

      // Read the slide XML file as text
      const slideXmlStr = await slideFile.async('text');
      
      // Parse the XML content of the slide
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(slideXmlStr, 'application/xml');
      
      // Modify the text of all text-containing shapes in this slide
      const shapes = xmlDoc.getElementsByTagNameNS(aNamespace, "t");
      for (let i = 0; i < shapes.length; i++) {
        const shape = shapes[i];
        shape.textContent = shape.textContent.toLowerCase(); // Convert text to lowercase
      }

      // Replace the slide XML in the zip archive with the modified content
      zip.file(`ppt/slides/slide${slideIndex}.xml`, xmlDoc.toString());

      slideIndex++;
    }

    // Step 4: Generate a new PPTX file with the modified content
    const newPPTX = await zip.generateAsync({ type: 'nodebuffer' });
    
    // Step 5: Save the new PPTX file to disk
    fs.writeFileSync(outputFilePath, newPPTX);

    console.log(`Modified PPTX saved to: ${outputFilePath}`);
  } catch (err) {
    console.error('Error modifying PPTX file:', err);
  }
}

module.exports = {processFile}
