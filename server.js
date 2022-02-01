const e = require('express');
const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const app = express();
const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
app.get('/api/notes', (req, res) => {
    // console.log("getNotes() function works");
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
    }
);
app.post('/api/notes', (req, res) => {
    const { title, text } = req.body;
    const content = { title, text};
    console.log("saveNotes() function works");
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile('./db/db.json', parsedData);
        // res.sendFile(path.join(__dirname, '/db/db.json'))
        console.log(parsedData);
        res.send(parsedData);
      }
    })
});
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
