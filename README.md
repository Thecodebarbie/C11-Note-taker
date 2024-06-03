# Note Taker

![theCODEbarbie Badge](https://img.shields.io/badge/theCODEbarbie-%23FBF6E9?style=for-the-badge&logo=Spotlight&labelColor=%23F79AD3)
## Description

Note Taker is an application that allows users to write and save notes. It uses an Express.js back end to store and retrieve note data from a JSON file. The front end is already created, and it's the user's job to build the back end, connect the two, and deploy the entire application to Heroku.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)
- [Mock-Up](#mock-up)
- [Getting Started](#getting-started)
- [Deployed Application](#deployed-application)
- [Repository](#repository)
- [Credits](#credits)
- [License](#license)

## Features

- Presents a landing page with a link to a notes page.
- Displays existing notes on the left-hand column and provides empty fields to enter a new note title and text on the right-hand side.
- Saves a new note when the user clicks the "Save Note" button.
- Allows users to click on an existing note to view it or click the "New Note" button to enter a new note.
- Offers a "Clear Form" button to clear the note entry fields.
- Supports deletion of notes as a bonus feature.

## Technologies Used

- Express.js
- Node.js
- HTML
- CSS
- JavaScript

## Usage

To use the Note Taker application:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `node server.js` to start the application.
5. Open your web browser and go to `http://localhost:3001` to view the application.
6. Click on the link to the notes page to start writing and saving notes.

## Mock-Up

![Note Taker Demo](./Assets/Images/11-express-homework-demo.gif)

## Getting Started

The application uses a `db.json` file to store and retrieve notes. 

### HTML Routes

- `GET /notes` returns the `notes.html` file.
- `GET *` returns the `index.html` file.

### API Routes

- `GET /api/notes` reads the `db.json` file and returns all saved notes as JSON.
- `POST /api/notes` receives a new note to save on the request body, adds it to the `db.json` file, and returns the new note to the client.

## Deployed Application

[Live Demo](#) - Deployed application URL

## Repository

GitHub Repository: [Note Taker](https://github.com/Thecodebarbie/C11-Express-Note-Taker)

## Credits

This project is part of a coding challenge. Credits to [Thecodebarbie](https://github.com/Thecodebarbie) for providing the inspiration.

## License

This project is licensed under the [MIT License](LICENSE).
