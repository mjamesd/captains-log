# Captain's Log
![status: in development](https://img.shields.io/badge/status-in%20development-orange)

![License: GNU General Publice License v3.0](https://img.shields.io/badge/license-GNU%20General%20Publice%20License%20v3.0-yellowgreen)

## Description
When you're flying through space at faster-than-light speeds, you need a quick app to jot down your thoughts and what happened on your recent mission. Star Command wants to know what you've been up to. Captains need to be able to edit and delete their logs, too, so that functionality is available.

This application uses an Express.js backend to save and retrieve the captain's log entries from a JSON file.

## User Story

```
AS A Star Command captain
I WANT to be able to write, save, edit, and delete log entries
SO THAT I can organize my thoughts and keep track of missions I need to complete

GIVEN a note-taking application
WHEN I open the Captain's Log
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the log page
THEN I am presented with a page with existing log entries listed in the left-hand column, plus empty fields to enter a new log entry title and the text in the right-hand column
WHEN I enter a new entry title and text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new log entry I have entered is saved and appears in the left-hand column with the other existing entries
WHEN I click on an existing log entry in the list in the left-hand column
THEN that log entry appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new captain's log title and text in the right-hand column
```

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Questions](#questions)

## Installation

To start using your captain's log, first clone the repo to your server. Then run `npm i` to install all the dependent packages.

## Usage

Open a terminal, navigate to the `server.js` file, then run `node server` to start the web app. Then open your web browser and go to http://localhost:3001.

The following images show the web app's appearance and functionality:

![Existing captain's log entries are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./public/assets/img/demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other captain's log entries listed on the left.](./public/assets/img/demo-02.png)

## License

This work is licensed under GNU General Publice License v3.0.

## Questions

Visit [my GitHub profile](https://github.com/mjamesd)

To reach me with additional questions, send me an [email](mailto:mjamesd@gmail.com).