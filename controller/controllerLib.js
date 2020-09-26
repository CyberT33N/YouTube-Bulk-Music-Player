'use strict'
console.log( 'lib.js - Current working directory: ' + __dirname );

const lib = require('../services/lib');

      const controller = {

         parseYoutTubeLinks: async function() { return await lib.parseYoutTubeLinks(); },
         convert_time: async function(videoDuration) { return await lib.convert_time(videoDuration); },
         deleteOfflineVideos: async function(ytLinks_AR) { return await lib.deleteOfflineVideos(ytLinks_AR); }

      }; // let controllers = {


module.exports = controller;
