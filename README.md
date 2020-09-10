# TODO APP

[![TODO_APP](https://img.shields.io/badge/TODO__APP-Board%20Infinity%20Task-red)](https://todo-app-board-infinity.herokuapp.com/)

TODO App is a node.js based web application to save daily tasks.

## Day-wise Description

* Day 1: Initializing the Node.js APP and installing required Libraries. Creating the database and API endpoints
* Day 2: To set the duration time for each todo task. Here I used mongoDB's TTL(Time to live) feature. It contains a expire keyword that will do the part as TTL does. So for every task I was fetching the duration and passing it into the expire keyword used. And Deploying the APP into Heroku Cloud.

## Features

* Add new task with duration based auto delete feature.
* Check all tasks.

## Technologies used

* Node.js
* Express.js
* TypeScript
* MongoDB
* HTML

## Requirements:
* Node.js
* Git
* Heroku CLI(only for deploying to another Heroku cloud)
* Postman (only to send POST requests)

## Installation

Clone the repository.
Go inside the library and use the package manager [npm](https://www.npmjs.com/package/npm) to install this package.

```bash
git clone https://github.com/vjvedh/Board-Infinity-TODO-App.git
cd Board-Infinity-TODO-App/
npm install
```

## File Structure

All the typescript files are in the src folder. src folder has one sub folder: api and two files app.ts and connect.ts.
Further api folder has three sub folders: config, controllers and models.

![File System](demoFiles/FileStructure.png?raw=true "File System")

* src/app.ts : This is the main typescript file and is used to launch server.
* src/connect.ts : This typescript file is used to connect to the mongoDB database.
* src/config/config.ts : This file is used to store the configuration variables.
* src/controllers/todoController.ts : This file is used to create the API endpoints for add a task and show all tasks respectively.
* src/models/todo.ts : This file is used to create the model for database schema. Schema has all these key field: taskName, taskDescription, creator, duration, and createdAt.

## Usage

Create a `.env` file in the main folder and inject your credentials so it looks like this:

```bash
dbURL=<YOUR_MONGODB_URL>
port=<YOUR_LOCAL_PORT_NUMBER>
```

To run the project execute:

```bash
npm run start
```

Link to Home Page: /

![HOME_H](demoFiles/HOME_LOCALHOST.png?raw=true "HOME_H")

Link to see all TODO's: /list

![SHOW_H](demoFiles/GET_LOCALHOST.png?raw=true "SHOW_H")

Link to add TODO(use [POSTMAN](https://www.postman.com/) for POST request): /add

![ADD_H](demoFiles/HOME_LOCALHOST.png?raw=true "ADD_H")

## App demo

<https://todo-app-board-infinity.herokuapp.com/>

## Deploy to Heroku

You can also deploy this app to Heroku:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Create a Heroku App and execute these: 

```bash
heroku login
cd Board-Infinity-TODO-App/
heroku git:remote -a <YOUR_HEROKU_APP_NAME>
git add .
git commit -am "make it better"
git push heroku master

```

Link to Home Page: /

![HOME_Heroku](demoFiles/HOME_HEROKU.png?raw=true "HOME_Heroku")

Link to see all TODO's: /list

![SHOW_Heroku](demoFiles/GET_HEROKU.png?raw=true "SHOW_Heroku")

Link to add TODO(use [POSTMAN](https://www.postman.com/) for POST request): /add

![ADD_Heroku](demoFiles/HOME_HEROKU.png?raw=true "ADD_Heroku")

## License

[MIT](https://choosealicense.com/licenses/mit/)