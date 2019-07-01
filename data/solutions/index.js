const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);

function getUID() {
  return crypto.randomBytes(16).toString('hex');
}

const getOffers = async () => {
  const offers = [];
  const types = [
    {
      type: 'house',
      name: 'Частный дом',
    },
    {
      type: 'apartaments',
      name: 'Квартира',
    },
    {
      type: 'buildings',
      name: 'Гостиница',
    },
  ];
  for (let item of types) {
    const files = await readdir(path.join(__dirname, item.type));
    files.forEach(file => {
      const offer = require(path.join(__dirname, `/${item.type}/${file}`));
      offer.type = item.type;
      offer.uid = getUID();
      offers.push(offer);
    });
  }
  return { offers, types };
};

module.exports = getOffers;
