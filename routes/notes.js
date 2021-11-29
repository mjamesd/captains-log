// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Author: Mark Drummond
// Date: 02-Dec-2021
// Project Title: Captain's Log
// Assignment: Node.js Note Taker
// See README.md for more information
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// REQUIRES
const notes = require('express').Router();
const e = require('express');
const fs = require('fs');

// CONSTANTS AND HELPER FUNCTIONS
const dbFile = `./db/db.json`;

// Helper function that generates a string of random numbers and letters
const uuid = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);


// ROUTES
notes.get('/', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get notes`);

    fs.readFile(dbFile, `utf8`, (err, filedata) => {
        if (err) {
            console.error(err);
        } else {
            if (filedata.length == 0) {
                res.json(``);
            } else {
                res.json(JSON.parse(filedata));
            }
        }
    });
});

notes.post('/', (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to save new note`);
    console.info(req.body);

    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            id: uuid(),
            title,
            text
        };

        fs.readFile(dbFile, `utf8`, (err, filedata) => {
            if (err) {
                console.error(err);
            } else {
                let notesDb;
                if (filedata.length == 0) {
                    notesDb = [];
                } else {
                    notesDb = JSON.parse(filedata);
                }
                notesDb.push(newNote);
                fs.writeFile(dbFile, JSON.stringify(notesDb, null, 4), (err) => {
                    if (err) {
                        console.error(err);
                    } else {
                        res.json(`\n=======\nCaptain's log updated 🖖\nAdded new log entry with ID=${newNote.id}\n=======\n`)
                    }
                    // err ? console.error(err) : console.info(`\n=======\nDatabase updated\n=======\n`)
                });
            }
        });
        // appendToDb(newNote);
        // res.json(`\n=======\nCaptain's log updated 🖖\nAdded new log entry with ID=${newNote.id}\n=======\n`);
    } else {
        res.sendStatus(404).json(`no req.body found`);
    }
});

notes.delete('/:id', (req, res) => {
    // Send a message to the client
    // res.status(200).json(`${req.method} request received to delete note`);

    // Log our request to the terminal
    console.info(`${req.method} request received to delete note`);

    fs.readFile(dbFile, `utf8`, (err, filedata) => {
        if (err) {
            console.error(err);
        } else {
            let notesDb;
            if (filedata.length == 0) {
                notesDb = [];
            } else {
                notesDb = JSON.parse(filedata);
            }
            newNotesDb = notesDb.filter((note) => {
                return note.id !== req.params.id;
            });
            fs.writeFile(dbFile, JSON.stringify(newNotesDb, null, 4), (err) => {
                if (err) {
                    console.error(err);
                } else {
                    res.json(`\n=======\nDatabase updated:\nDeleted Note with ID=${req.params.id}\n=======\n`);
                }
            });
        }
    });

});

module.exports = notes;