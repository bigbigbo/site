const model = require('think-model');
const mongo = require('think-mongo');
const cache = require('think-cache');
const session = require('think-session');
import { think } from 'thinkjs';

module.exports = [mongo(think.app), cache, session];
