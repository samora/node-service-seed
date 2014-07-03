/*
  Settings setup
  ==============
 */

var _ = require('lodash')
  , envs = require('./envs')

module.exports =
  _.extend(envs.all, envs[process.env.NODE_ENV || 'development'])