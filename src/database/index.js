const fs = require('fs');
const pathFile = './src/database/files/';

module.exports = {
    save: (content, filename) => new Promise((resolve) => {

        if (!filename) filename = 'temp';

        fs.writeFile(`${pathFile + filename}.json`, JSON.stringify(content), () => {

            resolve('opa')

        })
    }),

    read: () => new Promise((resolve) => {
        resolve('opa 2')
    }),
}