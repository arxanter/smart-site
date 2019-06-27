const express = require('express');
const next = require('next');
const fs = require('fs');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    /**
     * Custom routers
     */
    server.get('/api/v1/systemsList', async (req, res) => {
      const data = await readFile('./data/systems/index.json', 'utf8');
      res.send(data);
    });
    server.get('/api/v1/systemArticle/:fileName', async (req, res) => {
      try {
        const data = await readFile(`./data/systems/articles/${req.params.fileName}`, 'utf8');
        res.send(data);
      } catch (err) {
        res.status(404).end();
      }
    });
    /**
     * Base route
     */
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
