const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const minify = require('express-minify');
const nodemailer = require('nodemailer');
const next = require('next');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const getOffers = require('./data/solutions/index');
const getPortfolio = require('./data/portfolio/index');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'info@pantem.ru', // generated ethereal user
    pass: 12345679, // generated ethereal password
  },
});

/** Functions */
const sendMail = async data => {
  try {
    let text = '<div>';
    text += '<h3 style="display: block">Новая заявка с сайта smart-site</h3><br>';
    text += `<span style="display: block">Имя:   ${data.name}</span><br>`;
    text += `<span style="display: block">Телефон:   ${data.phone}</span><br>`;
    text += `<span style="display: block">Почта:   ${data.email}</span><br>`;
    text += `<span style="display: block">Текст:   ${data.message}</span><br>`;
    text += '</div>';
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"Сайт Smart-site 👻" <info@pantem.ru>', // sender address
      to: 'info@pantem.ru', // list of receivers
      subject: 'Новая заявка с сайта smart-site.ru', // Subject line
      html: text, // html body
    });
  } catch (err) {
    console.log(err);
    console.log('Не удалось отправить почту');
  }
};

/**
 * Middleware
 */

app
  .prepare()
  .then(() => {
    const server = express();
    if (!dev) {
      server.use(compression());
      server.use(minify());
    }
    server.use(bodyParser.json());
    const baseUrl = '/api/v1';
    /**
     * Custom routers
     */
    server.get(`${baseUrl}/systemsList`, async (req, res) => {
      const data = await readFile('./data/systems/index.json', 'utf8');
      res.send(data);
    });
    server.get(`${baseUrl}/systemArticle/:fileName`, async (req, res) => {
      try {
        const data = await readFile(`./data/systems/articles/${req.params.fileName}`, 'utf8');
        res.send(data);
      } catch (err) {
        res.status(404).end('Smth wrong');
      }
    });
    server.get(`${baseUrl}/offers`, async (req, res) => {
      const data = await getOffers();
      res.send(data);
    });
    server.get(`${baseUrl}/portfolio`, async (req, res) => {
      const data = await getPortfolio();
      res.send(data);
    });
    server.post(`${baseUrl}/sendForm`, async (req, res) => {
      const data = req.body;
      sendMail(data);
      res.status(200).send({ status: 'OK' });
    });
    /**
     * Base route
     */
    server.get('/robots.txt', async (req, res) => {
      const data = await readFile('./static/robots.txt', 'utf8');
      res.send(data);
    });
    server.get('/privacy_policy.pdf', async (req, res) => {
      res.sendFile(__dirname + '/static/privacy_policy.pdf');
    });
    server.get('/sitemap.xml', async (req, res) => {
      res.status(404).send({ status: 200 });
    });

    /**Root */
    server.get('*', (req, res) => {
      return handle(req, res);
    });
    /**Root END */

    server.listen(5000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:5000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
