require('dotenv').config();

export const db: string = `${process.env.dbURL}`;

export const homePage: string = `<!DOCTYPE html>
<html>
<title>TODO Checklist</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<style>
body,h1 {font-family: "Raleway", sans-serif}
body, html {height: 100%}
.bgimg {
  background-image: url('https://singularityhub.com/wp-content/uploads/2020/03/apple-mac-laptop-computer-keyboard-colors-black-background.jpg');
  min-height: 100%;
  background-position: center;
  background-size: cover;
}
</style>
<body>
<div class="bgimg w3-display-container w3-animate-opacity w3-text-white">
  <div class="w3-display-middle">
    <h1 class="w3-jumbo w3-animate-top">TODO Checkpoint</h1>
    <hr class="w3-border-grey" style="margin:auto;width:40%">
    <p class="w3-large w3-center">To view tasks use: /list</p>
    <p class="w3-large w3-center">to add task go to postman and use: /add</p>
  </div>
</div>
</body>
</html>`;

let tableCreate = function tableCreate(todos: any): string {
    let htmlTableRows = ``;
      let data = {rows: todos};
      data.rows.forEach((row: { taskName: any; taskDescription: any; creator: any; duration: any; createdAt: any; expireAt: any }) => {
      htmlTableRows += `<tr>
        <td>${row.taskName}</td>
        <td>${row.taskDescription}</td>
        <td>${row.creator}</td>
        <td>${row.duration}</td>
        <td>${row.createdAt}</td>
        <td>${row.expireAt}</td>
      </tr>`;
    });

      let htmlTable = `<!DOCTYPE html>
      <html>
      <title>TODO Show</title>
        <head>
            <style>
                table {
                    border-collapse: collapse;
                    border: 2px solid black;
                    width: 100%; }
                th {
                    background-color: #56CCF2;
                    color: black;
                }
                th, td {
                    text-align: left;
                    border: 2px solid black;
                    padding: 8px; }
            </style>
        </head>
      <body>
        <h2>TODO List</h2>
        <div style="overflow-x:auto;">
            <table>
                <tr>
                    <th>Task Name</th>
                    <th>Task Description
                    </th><th>Creator</th>
                    <th>Duration(in mins)</th>
                    <th>Created At</th>
                    <th>Expire At</th>
                </tr>
            ${htmlTableRows}
            </table>
        </div>
      </body>
      </html>`;
    
      return htmlTable;
};

export default tableCreate;