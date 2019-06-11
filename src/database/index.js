const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./src/database/files/db.json')
const db = low(adapter)

// Set some defaults
db.defaults({ user: [], comodos: [] })
    .write();

const tratativaBoolean = (obj) => {
    for (const key in obj) {
        var item = obj[key];
        if (typeof item === "object") tratativaBoolean(item);
        else if (typeof item === "string") {
            if (item === "true") obj[key] = true;
            else if (item === "false") obj[key] = false;
        }
    }
}

const findOne = (attr, jsonMacth) => {
    if (db.has(attr).value()) {
        let find = db.get(attr)
            .filter(jsonMacth)
            .take(1)
            .value();

        if (find.length > 0) {
            return find[0];
        }
    }

    return undefined;
}

const find = (attr, jsonMacth) => {
    if (db.has(attr).value()) {
        let find = db.get(attr)
            .filter(jsonMacth)
            .value();

        tratativaBoolean(find)
        return find;
    }

    return undefined;
}

const saveOne = (attr, jsonMacth, content) => {

    if (db.has(attr).value()) {
        let indexFind = db.get(attr)
            .findIndex(jsonMacth).value();

        if (indexFind != -1) {
            db.set(`${attr}[${indexFind}]`, content).write();
            return true;
        }
    }

    return false;
}

module.exports = {
    saveOne,
    findOne,
    find
}