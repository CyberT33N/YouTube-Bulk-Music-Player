'use strict'
console.log( 'controller.js - Current working directory: ' + __dirname );

const bot = require('../services/bot');

      const controller = {

         startBROWSER: async function() { return await bot.startBROWSER(); },
         openLink: async function(ytLinks_AR, page) { return await bot.openLink(ytLinks_AR, page); },
         youTubeError: async function(ytLinks_AR, page) { return await bot.youTubeError(ytLinks_AR, page); },
         checkSignBox: async function(page) { return await bot.checkSignBox(page); },
         scrapVideoInfo: async function(page) { return await bot.scrapVideoInfo(page); },
         checkVideoDuration: async function(page, logs, ytLinks_AR) { return await bot.checkVideoDuration(page, logs, ytLinks_AR); },
         checkADS: async function(page) { return await bot.checkADS(page); },
         checkGoogleCaptcha: async function(page, ytLinks_AR) { return await bot.checkGoogleCaptcha(page, ytLinks_AR); },
         startVideo: async function(page, ytLinks_AR) { return await bot.startVideo(page, ytLinks_AR); },
         countdown: function(countdownValue, page, ytLinks_AR) { bot.countdown(countdownValue, page, ytLinks_AR); }




      }; // let controllers = {


module.exports = controller;
