const express = require('express');
const logger = require('./logger');
const { increasecounter, getcounter, resetcounter } = require('./counter');

const router = express.Router();

// incrementoi counter arvoa ja logaa tekemisen
router.get('/counter-increase', (req, res) => {
  logger.info('[ENDPOINT] GET /counter-increase');
  const newCount = increasecounter();
  logger.info(`[COUNTER] increase ${newCount}`);
  res.json({ count: newCount });
});
// lue counter arvo ja logaa tekemiset
router.get('/counter-read', (req, res) => {
  logger.info('[ENDPOINT] GET /counter-read');
  const currentCount = getcounter();
  logger.info(`[COUNTER] read ${currentCount}`);
  res.json({ count: currentCount });
});
// resetoi counter ja lukee tekemisen
router.get('/counter-reset', (req, res) => {
  logger.info('[ENDPOINT] GET /counter-reset');
  const resetcount = resetcounter();
  logger.info(`[COUNTER] zeroed ${resetcount}`);
  res.json({ count: resetcount });
});

module.exports = router;