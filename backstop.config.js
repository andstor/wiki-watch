const utils = require('./utils');
const path = require('path');
let config = require('./backstop.json');

let dataPath = './wiki';

function load() {
    let scenarios = [];
    for (const f of utils.getFiles(dataPath)) {
        scenarios.push(...require(f).scenarios)
    }
    config.scenarios = scenarios;
    return config
}

module.exports = load()