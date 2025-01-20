Introduction
This project provides a backend server for managing user authentication and donation records using Node.js, Express, MongoDB, and JWT (JSON Web Tokens). The server supports user registration, login, donation recording, and fetching donor data.

Prerequisites
Before running the application, ensure you have the following:

Node.js installed on your machine.

MongoDB database set up (local or cloud).

npm for package management.

.env file with the following keys:
   1. PORT: Port number for the server.
   2. MONGO_URI: MongoDB connection URI.
   3. JWT_SECRET: Secret key for generating JSON Web Tokens.
      
Installation

Clone the repository:
git clone <repository-url>

Navigate to the project directory:
cd <project-directory>

Install dependencies:
npm install

Usage
Create a .env file in the root directory and populate it as follows:
   1. env
   2. PORT=3000
   3. MONGO_URI=mongodb://<username>:<password>@<host>/<database>
   4. JWT_SECRET=your-secret-key
      
Start the server:
node <file-name>.js

The server will run on the specified PORT in the .env 
