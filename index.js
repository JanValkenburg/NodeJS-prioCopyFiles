'use strict';

const fs = require('fs');
const settingsFile = 'priocopyfiles.json';
function priocopyfiles() {

    if (fs.existsSync(settingsFile) === false) {
        console.log(settingsFile + ' NOT FOUND!')
        return false;
    }
    const settings = JSON.parse(fs.readFileSync(settingsFile));
    var sourceFolders = settings.folders.reverse();
    for (let file of settings.files) {
        for (let sourceFolder of sourceFolders) {
            if (fs.existsSync(sourceFolder + file)) {
                fs.copyFileSync(sourceFolder + file, settings.destinationPath + file);
                break;
            }
        }
    }
}

priocopyfiles();