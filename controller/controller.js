'use strict'
console.log( 'controller.js - Current working directory: ' + __dirname );

const bot = require('../services/bot');

      const controller = {

         startBROWSER: async function() { return await bot.startBROWSER(); },
         openLink: async function(ytLinks_AR, page) { return await bot.openLink(ytLinks_AR, page); },
         youTubeError: async function(ytLinks_AR, page) { return await bot.youTubeError(ytLinks_AR, page); },
         checkSignBox: async function(page) { return await bot.checkSignBox(page); },
         scrapVideoInfo: async function(page) { return await bot.scrapVideoInfo(page); },
         checkVideoDuration: async function(page, logs) { return await bot.checkVideoDuration(page, logs); },
         checkADS: async function(page) { return await bot.checkADS(page); },
         countdown: function(countdownValue, page) { bot.countdown(countdownValue, page); }




      }; // let controllers = {


module.exports = controller;
