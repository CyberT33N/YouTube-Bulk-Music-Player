'use strict'

              const fs = require('fs').promises,
                   log = require('fancy-log'),
                   unq = require('unq'),
                 chalk = require('chalk'),
        chalkAnimation = require('chalk-animation'),
              gradient = require('gradient-string');















        log( 'lib.js - Current working directory: ' + __dirname );
        const lib = {

          parseYoutTubeLinks: async function() { return await parseYoutTubeLinks(); },
          convert_time: async function(videoDuration) { return await convert_time(videoDuration); },
          deleteOfflineVideos: async function(ytLinks_AR) { return await deleteOfflineVideos(ytLinks_AR); }

        };

        module.exports = lib;





























async function parseYoutTubeLinks(){
log( 'parseYoutTubeLinks()' );


let ytLinks_AR = [];
let data = await fs.readFile("./bookmarks.txt", "utf-8");
log( 'Successfully read bookmarks.txt' );

// https://www.youtube.com/watch?v=
let tmpAR = data.match(/youtube[.]com[/]watch[?]v[=](.*?)["]|youtube[.]com[/]watch[?]v[=](.*?)[']|youtube[.]com[/]watch[?]v[=](.*?)(\r\n|\r|\n)/gmi);


   if( tmpAR[0] ){

     for( const d of tmpAR ){
          ytLinks_AR.push( 'https://' + d.replace(/["]$/gmi,'').replace(/[']$/gmi,'').replace(/(\r\n|\r|\n)/gmi,'') );
     }

          // randomise array..
          await shuffle(ytLinks_AR);

          // unique array
          return unq(ytLinks_AR);

      } //   if( tmpAR ){
      else return false;


} //   async function parseYoutTubeLinks(){
















    async function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    } // async function shuffle(array) {

























async function deleteOfflineVideos(ytLinks_AR){
log( 'deleteOfflineVideos() - Current video: ' + ytLinks_AR[0] + '\n\n' );


      let data = await fs.readFile("./bookmarks.txt", "utf-8");
      log( '#2 - Successfully read bookmarks.txt' + '\n\n'  );

      // replace offline video..
      data = data.split(   ytLinks_AR[0].replace('https://', '').replace('http://', '').replace('https://www.', '').replace('http://www.', '')   ).join('\n');


      await fs.writeFile('./bookmarks.txt', data);
      log( 'Successfully deleted offline video.. We go now back to the script..' + '\n\n' );

      ytLinks_AR.shift();
      return ytLinks_AR;


} // async function deleteOfflineVideos(){



















async function convert_time(duration) {
log( 'We convert now the youtube video duration to ms.. before: '  + duration);

        var a = duration.match(/\d+/g);

        if (duration.indexOf('M') >= 0 && duration.indexOf('H') == -1 && duration.indexOf('S') == -1) {
            a = [0, a[0], 0];
        }

        if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1) {
            a = [a[0], 0, a[1]];
        }
        if (duration.indexOf('H') >= 0 && duration.indexOf('M') == -1 && duration.indexOf('S') == -1) {
            a = [a[0], 0, 0];
        }

        duration = 0;

        if (a.length == 3) {
            duration = duration + parseInt(a[0]) * 3600;
            duration = duration + parseInt(a[1]) * 60;
            duration = duration + parseInt(a[2]);
        }

        if (a.length == 2) {
            duration = duration + parseInt(a[0]) * 60;
            duration = duration + parseInt(a[1]);
        }

        if (a.length == 1) {
            duration = duration + parseInt(a[0]);
        }

        duration = Number( duration.toString() + '000' );
        log( 'After convert into ms: ' + duration );
        return duration;


} //     async function convert_time(duration) {
