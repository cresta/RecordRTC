var consoleLogFns = {
  log: console.log,
  info: console.info,
  warn: console.warn,
  error: console.error,
  debug: console.debug,
};

var log = function () {
  if (window.cresta && window.cresta.logger) {
    window.cresta.logger.info.apply(window.cresta.logger, arguments);
  } else {
    consoleLogFns.log.apply(console, arguments);
  }
};

var info = function () {
  if (window.cresta && window.cresta.logger) {
    window.cresta.logger.info.apply(window.cresta.logger, arguments);
  } else {
    consoleLogFns.info.apply(console, arguments);
  }
};

var warn = function () {
  if (window.cresta && window.cresta.logger) {
    window.cresta.logger.warn.apply(window.cresta.logger, arguments);
  } else {
    consoleLogFns.warn.apply(console, arguments);
  }
};

var error = function () {
  if (window.cresta && window.cresta.logger) {
    window.cresta.logger.error.apply(window.cresta.logger, arguments);
    consoleLogFns.error.apply(console, arguments);
  }
};

var debug = function () {
  if (window.cresta && window.cresta.logger) {
    window.cresta.logger.verbose.apply(window.cresta.logger, arguments);
  } else {
    consoleLogFns.debug.apply(console, arguments);
  }
};

window.recordRtc = {
  logger: {
    log: log,
    info: info,
    warn: warn,
    error: error,
    debug: debug,
  },
};
