const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

function getUID() {
  return crypto.randomBytes(16).toString('hex');
}

const getPortfolio = async () => {
  const portfolio = [];
  const files = await readdir(__dirname);
  for (const file of files) {
    if (/^.+\.json/.test(file)) {
      const data = await readFile(path.join(__dirname, `/${file}`), 'utf8');
      const object = JSON.parse(data);
      object.uid = getUID();
      portfolio.push(object);
    }
  }

  return portfolio;
};

module.exports = getPortfolio;
