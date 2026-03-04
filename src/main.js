// src/main.js
const express = require('express');
const logger = require('./logger');
const routes = require('./routes');

const app = express();
const port = 3000;

// serverin käynnistys log
logger.info('[MAIN] Starting server...');

// käytä routes mitkä ovat routes.js tiedostossa
app.use('/', routes);

// aloita kuuntelu mutta ei testien aikana
if (require.main === module) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  process.on('SIGINT', () => {
    logger.info('[MAIN] Stopping server...');
    server.close(() => {
      process.exit(0);
    });
  });
}

module.exports = app;
