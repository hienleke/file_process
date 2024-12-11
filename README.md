# File Process API

This is a simple Node.js API that processes PPTX files by converting the text to lowercase and saves the modified file in the `public` folder. The API can be accessed via a GET request.

## Setup and Installation


1. Clone the Repository


git clone https://github.com/hienleke/file_process.git
cd file_process

2. Install Dependencies

npm install

3. Start the Server
To start the server, use the following command:

npm start
The server will be running at http://localhost:3000.

## Folder Structure

file_process/
├── node_modules/    # Node.js modules
├── public/          # Processed files saved here
├── server.js        # Server setup
└── package.json     # Project dependencies and scripts

## Call API to get result inside public folder
To check result pls call this  api 
GET  http://localhost:3000/process
 
and then check in folder public in your source code Folder will have result 
file  .//public//ThinkPrompt_BE_testingOUTPUT.pptx


