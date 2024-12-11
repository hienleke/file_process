# File Process API

This is a simple Node.js API that processes PPTX files by converting the text to lowercase and saves the modified file in the `public` folder. The API can be accessed via a GET request.

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/hienleke/file_process.git
cd file_process
2. Install Dependencies
bash
Sao chép mã
npm install
3. Start the Server
To start the server, use the following command:

bash
Sao chép mã
npm start
The server will be running at http://localhost:3000.

API Usage
Process File
Endpoint: GET /process

Description: This endpoint will process the PPTX file (ThinkPrompt_BE_testing.pptx) located in the testFile folder, convert all text to lowercase, and save the modified file into the public folder.

How to Call: Open your browser or use a tool like curl or Postman to send a GET request to the following URL:

bash
Sao chép mã
http://localhost:3000/process
Example using curl:

bash
Sao chép mã
curl http://localhost:3000/process
Output
The processed file will be saved in the public folder as Modified_ThinkPrompt_BE_testing.pptx.
You can download the modified file from the following link:
bash
Sao chép mã
http://localhost:3000/Modified_ThinkPrompt_BE_testing.pptx
File Processing Details
The following steps are performed when processing the file:

The PPTX file is loaded from the testFile folder.
The text within the slides is converted to lowercase.
The modified file is saved into the public folder.
Folder Structure
bash
Sao chép mã
/file_process
  ├── /node_modules        # Node.js modules
  ├── /public              # Processed files saved here         
  ├── server.js            # Server setup
  └── package.json         # Project dependencies and scripts
License
This project is licensed under the MIT License - see the LICENSE file for details.

markdown
Sao chép mã

### How to Use:
1. After cloning and setting up the project, make sure you have the file `ThinkPrompt_BE_testing.pptx` in the `public` folder.
2. Start the server by running `npm start`.
3. Visit `http://localhost:3000/process` in your browser or use `curl` to send a `GET` request.
4. The processed PPTX file will be available in the `public` folder and can be downloaded directly.

Let me know if you need any adjustments!