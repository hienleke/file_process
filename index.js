const express = require('express');
const app = express();
const PORT = 3000;
const documentService = require('./service/documentService')

// Middleware to parse JSON requests
app.use(express.json());

// Define a basic route
app.get('/process',async  (req, res) => {
    let inputFile = './/public//ThinkPrompt_BE_testing.pptx';
    let outputFile  = './/public//ThinkPrompt_BE_testingOUTPUT.pptx'
   let result  = await documentService.processFile(inputFile,outputFile)
    res.send("pls check this path to know the result in your source code folder :" +  outputFile);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
