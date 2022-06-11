const TYPES = {
  DEBUG: 'debug',
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
};

const log = (type: string, ...args: Array<any>) => {
  // Log only in dev mode
  if (!__DEV__) {
    return;
  }
  switch (type) {
    case TYPES.DEBUG: {
      console.debug(...args);
      break;
    }
    case TYPES.INFO: {
      const [title, ...rest] = args;
      console.info(`${title}`, ...rest);
      break;
    }
    case TYPES.SUCCESS: {
      const [title, ...rest] = args;
      console.log(`${title}`, ...rest);
      break;
    }
    case TYPES.ERROR: {
      const [title, ...rest] = args;
      console.error(`%c${title}`, 'color: #c73724; font-weight: 600', ...rest);
      break;
    }
    default:
      break;
  }
};

const LoggerService = {
  debug: (...args: Array<any>) => log(TYPES.DEBUG, ...args),
  info: (...args: Array<any>) => log(TYPES.INFO, ...args),
  success: (...args: Array<any>) => log(TYPES.SUCCESS, ...args),
  error: (...args: Array<any>) => log(TYPES.ERROR, ...args),
};

export default LoggerService;
