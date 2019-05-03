const fs = require('fs');
const pathFile = './src/database/files/';

const nullFilename = 'temp';

const save = (content, filename) => new Promise((resolve) => {
    if (!filename) filename = nullFilename;
    fs.writeFile(`${pathFile + filename}.json`, JSON.stringify(content), () => {
        resolve(content)
    })
})

const readSync = (filename) => {
    if (!filename) filename = nullFilename;
    let content;
    try {
        content = fs.readFileSync(`${pathFile + filename}.json`, 'utf8');
    } catch (err) {
        content = undefined
    }
    return JSON.parse(content);
}

const read = (filename) => new Promise((resolve) => {
    if (!filename) filename = nullFilename;
    fs.readFile(`${pathFile + filename}.json`, 'utf8', (content) => {
        resolve(JSON.parse(content))
    })
})

const findOne = (filename, jsonMacth) => {
    if (!filename) filename = nullFilename;
    let content = readSync(filename);

    for (const k in content) {
        const el = content[k]
        let match = true;
        for (const key in jsonMacth) {
            if (el[key] != jsonMacth[key]) {
                match = false;
                break;
            }
        }
        if (match) return el;
    }

    return undefined;
}

module.exports = {
    save,
    read,
    readSync,
    findOne
}