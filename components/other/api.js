import fetch from 'isomorphic-unfetch';

let baseURL = process ? process.env.HOST || '' : '';
baseURL += '/api/v1/';
const _adapterFetch = async (path, dataType = 'json') => {
  try {
    const res = await fetch(baseURL + path);
    if (dataType === 'json') return await res.json();
    if (dataType === 'text') return await res.text();
  } catch (err) {
    return { err };
  }
};
const getOffers = async () => {
  const { offers, types: typeOffers } = await _adapterFetch('offers');
  return { offers, typeOffers };
};
const getPortfolio = async () => await _adapterFetch('portfolio');

const getSystemsList = async () => await _adapterFetch('systemsList');

const getArticle = async name => await _adapterFetch(`systemArticle/${name}`, 'text');

const sendForm = async (data, type) => {
  try {
    const res = await fetch(baseURL + 'sendForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, type }),
    });
    if (res.status >= 400) throw new Error('Smth wrong');
    const result = await res.json();
    return result;
  } catch (err) {
    return { err };
  }
};
const validForm = (data, dataScheme) => {
  let isError = false;
  const mailRegexp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // eslint-disable-next-line
  const phoneRegexp = /^[0-9+()\ ]+$/;

  for (let name in data) {
    switch (dataScheme[name]) {
      case 'string':
        if (!data[name]) isError = true;
        break;
      case 'phone':
        if (!phoneRegexp.test(data[name])) isError = true;
        break;
      case 'email':
        if (!mailRegexp.test(data[name])) isError = true;
        break;
      case 'boolean':
        if (!data[name]) isError = true;
        break;
      default:
        break;
    }
    console.log(isError);
  }
  return isError;
};
export default { getOffers, getPortfolio, getSystemsList, getArticle, sendForm, validForm };
