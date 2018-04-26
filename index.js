const log = require('./logger');

module.exports = (req, res, next) => {
  if (req.body) {
    log.info({ reqBodyContent: req.body });
  }
  if (req.query) {
    log.info({ reqQueryContent: req.query });
  }
  log.info(`Received a ${req.method} request from ${req.ip} for ${req.url}`);
  next();
};
