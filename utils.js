const fs = require('fs');

const { resolve } = require('path');
const { readdir } = require('fs').promises;

function* getFiles(dir) {
  const dirents =  fs.readdirSync(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}

module.exports = { getFiles }
