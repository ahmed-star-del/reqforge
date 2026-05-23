/**
 * ReqForge - Lightweight HTTP Request Forging Library
 * @module reqforge
 */

const config = require('./config');
const utils = require('./utils');
const request = require('./request');
const Logger = require('./logger');

module.exports = {
  config,
  utils,
  request,
  Logger
};
