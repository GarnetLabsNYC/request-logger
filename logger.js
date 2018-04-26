const bunyan = require('bunyan');
const bFormat = require('bunyan-format');

var formatOut = bFormat({ outputMode: 'long' });

const log = bunyan.createLogger({
  name: 'request-logger',
  streams: [
    {
      stream: formatOut
    }
  ],
  serializers: bunyan.stdSerializers,
  level: 'debug'
});

module.exports = log;
