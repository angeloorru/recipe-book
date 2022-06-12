import winston from 'winston';

const logConfiguration = {
  transports: [
    new winston.transports.Console(),
  ],
};

export default logConfiguration;
