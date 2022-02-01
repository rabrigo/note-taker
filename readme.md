### About Note Taker

Click the GIF to watch a video demo of Note Taker:

[![Watch the video](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/a4c3dae5-874f-4806-8d3c-5436b75e2680.gif?ClientID=vimeo-core-prod&Date=1643678177&Signature=4d8d58e4f2d3f7a8937d71c0199c72d4f170f84a)](https://vimeo.com/672174003/99b35394b3)

<details>
<summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#future-updates">Future Updates</a></li>
  </ol>
</details>

## Description

Note Taker allows you to input a note title and text and save it to your local server.

## Built With

This application was built with Express, Bootstrap, JavaScript, CSS, and HTML. 

## Installation

Node.js installation is required. After cloning this repository, open server.js in your integrated terminal and run 'npm i'. 

## Usage

Open the folder containing server.js in your command line interface. From there, run the command 'node server.js'. Your command line console will display the port your local server is on.

![screenshot](./images/screen1.png)

Visit that port on your browser. I did that by putting 'localhost:3001' in my browser. Doing so brings you to the first page. Click get started to continue.

![screenshot](./images/screen2.png)

Any notes that are currently stored in db.json will be read and their note titles will show on the left size column. 

![screenshot](./images/screen3.png)

Typing in the 'Note Title' and 'Note Field' areas will toggle the save button in the top right. Once your note is ready to be posted, press the save icon and it will be stored in the db.json file. 

![screenshot](./images/screen4.png)

You will see its note title display on the left column. The 'Note Title' and 'Note Field' fields will clear and the save button will toggle off.

![screenshot](./images/screen5.png)

## Future Updates

<ul>
  <li>Working delete button</li>
  <li>Function that overwrites db.json with blank array if the file causes errors</li>
</ul>

