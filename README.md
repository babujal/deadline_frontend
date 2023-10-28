## Dead Line express-react app

### Overview

The Dead Line web application is designed to streamline vehicles on who needs repairs on a workshop, every mecanic with this app will be able to see all vehicle that has been inspected, this aproach solve the duplication on workorder. This README file provides an overview of the project, including the technologies used, the approach taken, unsolved problems, user stories, and notes for future reference.


### Technologies Used

-   **Node.js**: The backend server is built using Node.js, which allows me to run JavaScript on the server-side.
-   **Express.js**: I use the Express.js framework for building the web application and handling routes.
-   **MongoDB**: MongoDB was my choice of database for storing seafood product information.
-   **Mongoose**: I used Mongoose to interact with the MongoDB database.
-   **React**: React is used for the frontend side.
-   **dotenv**: dotenv is used for managing environment variables.
-   **HTML/CSS/Bootstrap**: I use HTML, CSS, & bootstrap for creating the front-end of the application.
-   **Heroku **: Heroku was used to deploy the application.**

### Approach

We started by creating the backend, once the basics route were workinng we move on to the creation of the frontend.
After that was done and working started workinng on my Index, show and other routes route and step by step builded a full restfull web app.

### User Stories
- As a user I want to be able to see all vehicles entries on my workshop.
- As a user I want to be able to create new entries.
- As a user I want to be able to edit any entrie.
- As a user I want to be able to create an account.
- As a user I want to be able to Login to my account.

### Unsolved Problems

-   We would like to place a kind of track for work orders.


### Notes to Self

-   Refurnish the frontend structure.
-   Improve auth.

### Link to Hosted App
The backend application is hosted on Heroku at: 
-Backend side: https://node-api-deadline-1dce381c838c.herokuapp.com/vehicle

Frontend side: https://floating-chamber-37367-77b015f14394.herokuapp.com/seafoodstore/stock

## Getting Started

To run the application locally, follow these steps:

1.  Clone the repository to your local machine.
2.  Install dependencies using `npm install`.
3.  Set up a MongoDB database and update the connection string in your `.env` file.
4.  Start the server using `npm start`.

## Author
Alex Rodriguez
William Fitzwater
Chris Flores