import winston from 'winston';

const logConfiguration = {
  transports: [
    new winston.transports.Console(),
  ],
};

export default logConfiguration;
/* import winston, { LoggerOptions } from 'winston';

const Logger = (message: string, messageType: string) => {
  const logger: LoggerOptions = winston.createLogger({
    transports: [
      new winston.transports.Console(),
    ],
  });

  return logger;
};

export default Logger; */

/* const winstonn = require('winston');

const logger = winstonn.createLogger({
  transports: [
    new winston.transports.Console(),
  ],
}); */

// logger.info('What rolls down stairs');
