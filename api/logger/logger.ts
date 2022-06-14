// eslint-disable-next-line import/no-unresolved
import winston from 'winston';

const logConfiguration = {
  transports: [
    new winston.transports.Console(),
  ],
};

export default logConfiguration;
