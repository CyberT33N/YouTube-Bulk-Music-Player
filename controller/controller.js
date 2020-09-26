'use strict'
console.log( 'controller.js - Current working directory: ' + __dirname );

const bot = require('../services/bot');

      const controller = {

         startBROWSER: async function() { return await bot.startBROWSER(); },
         startYoutTube: async function(ytLinks_AR, client, page) { return await bot.startYoutTube(ytLinks_AR, client, page); }

      }; // let controllers = {


module.exports = controller;
