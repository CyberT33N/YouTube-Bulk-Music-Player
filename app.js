

/*
███████████████████████████████████████████████████████████████████████████████
██******************** PRESENTED BY t33n Software ***************************██
██                                                                           ██
██                  ████████╗██████╗ ██████╗ ███╗   ██╗                      ██
██                  ╚══██╔══╝╚════██╗╚════██╗████╗  ██║                      ██
██                     ██║    █████╔╝ █████╔╝██╔██╗ ██║                      ██
██                     ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║                      ██
██                     ██║   ██████╔╝██████╔╝██║ ╚████║                      ██
██                     ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝                      ██
██                                                                           ██
███████████████████████████████████████████████████████████████████████████████
*/






/*

Currently only works in headful mode

YouTube Ads block extension like scriptsafe or adblock plus must be used




*/
















     /*
    ▄██████▄  ▀█████████▄       ▄█    ▄████████  ▄████████     ███        ▄████████
   ███    ███   ███    ███     ███   ███    ███ ███    ███ ▀█████████▄   ███    ███
   ███    ███   ███    ███     ███   ███    █▀  ███    █▀     ▀███▀▀██   ███    █▀
   ███    ███  ▄███▄▄▄██▀      ███  ▄███▄▄▄     ███            ███   ▀   ███
   ███    ███ ▀▀███▀▀▀██▄      ███ ▀▀███▀▀▀     ███            ███     ▀███████████
   ███    ███   ███    ██▄     ███   ███    █▄  ███    █▄      ███              ███
   ███    ███   ███    ███     ███   ███    ███ ███    ███     ███        ▄█    ███
    ▀██████▀  ▄█████████▀  █▄ ▄███   ██████████ ████████▀     ▄████▀    ▄████████▀
                           ▀▀▀▀▀▀
   Here you can add all Objects/Arrays
   */

//puppeter
var client;
var page;
var ytLinks_AR = [];
var t33n = {};


/*
████████████████████████████████████████████████████████████████████████████████
.__                              __           .__               .__
|__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
|  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
|  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
|__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
         \/|__|                        |__|             /_____/         \/     \/
Here you can add all your plugins. *Note* The enabled plugins are necessary.
*/
                     // npm i fancy-log chalk puppeteer chalk-animation gradient-string cheerio
                     const fs = require('fs'),
                              log = require('fancy-log'),
                             unq = require('unq'),
                          chalk = require('chalk'),
                          cheerio = require('cheerio'),
                  puppeteer = require('puppeteer'),
        chalkAnimation = require('chalk-animation'),
                     gradient = require('gradient-string'),

          // import config file
         json_configFile = fs.readFileSync('./admin/config.json', 'utf8'),
                json_config = JSON.parse(json_configFile),
config_browser_profile = json_config.browser_profile,



               windowWidth = json_config.windowWidth,
               windowHeight = json_config.windowHeight,
               windowSizeComplete = '--window-size=' + windowWidth + ',' + windowHeight;




























                                                 /*
                                                 ████████████████████████████████████████████████████████████████████████████████
                                                */

                                                 //############## GET HEADLESS VALUE ##################################

                                                 const headlessVALUE = json_config.headless;


                                                 var disableGPU;


                                                 log( '\n\nWe will check now your headless value..headlessVALUE: ' + headlessVALUE );
                                                 if(headlessVALUE == true) {
                                                 log('\n\nYou enabled headless..\n\n');

                                                      disableGPU = '--disable-gpu';

                                                 } //  if(headlessVALUE == 'yes') {
                                                 else {
                                                 log('\n\nYou disabled headless..\n\n');

                                                      disableGPU = '--disable-popup-blocking';

                                                } // else from if(headless == true) {

                                                  /*
                                                  ████████████████████████████████████████████████████████████████████████████████
                                                  */









































                                                                        /*
                                                                         ████████████████████████████████████████████████████████████████████████████████
                                                                         */


                                                                         // ADVERTISE
                                                                         var ads = gradient('red', 'white').multiline([
                                                                                '',
                                                                                'Presented by',
                                                                                '████████╗██████╗ ██████╗ ███╗   ██╗',
                                                                                '╚══██╔══╝╚════██╗╚════██╗████╗  ██║',
                                                                                '   ██║    █████╔╝ █████╔╝██╔██╗ ██║',
                                                                                '   ██║    ╚═══██╗ ╚═══██╗██║╚██╗██║',
                                                                                '   ██║   ██████╔╝██████╔╝██║ ╚████║',
                                                                                '   ╚═╝   ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝ Software'
                                                                         ].join('\n'));
                                                                         console.log(ads);
                                                                         console.log( '\nCheck my Github Profile: ' + chalk.white.bgGreen.bold(' github.com/CyberT33N ')  + '\n\n');
                                                                         console.log( gradient('white', 'black')('\n\n=======================================\n\n') );










                startBROWSER();
function startBROWSER(){
(async () => {
log( 'We will start now your Browser please wait..' );




                                                          client = await puppeteer.launch({
                                                           //executablePath: '/snap/bin/chromium',
                                                           //executablePath: '/usr/bin/google-chrome',
                                                           //executablePath: '/home/user/Downloads/Linux_x64_749751_chrome-linux/chrome-linux/chrome',
                                                          // executablePath: '/home/user/Downloads/firefox-78.0a1.en-US.linux-x86_64/firefox/firefox',
                                                           headless: headlessVALUE, // true or false
                                                           userDataDir: '../../../../../lib/browserProfiles/' + config_browser_profile,
                                                           args: [
                                                           windowSizeComplete,


                                                      '--disable-extensions-except=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0,../../../../../lib/chromeextension/ipfuck/bjgmbpodpcgmnpfjmigcckcjfldcicnd/1.3_0,../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0,../../../../../lib/chromeextension/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0,../../../../../lib/chromeextension/policycontrol/eekommagmgepaafaaegimeldlnnnolgn/0.3.5_0,../../../../../lib/chromeextension/alertblocker/ofjjanaennfbgpccfpbghnmblpdblbef/1.3_0,../../../../../lib/chromeextension/letmeout/hnfdibcbmlppjlkefinedeffoiomlecc/1.3_0,../../../../../lib/chromeextension/showmyip/pdnildedfbigagjbaigbalnfdfpijhaf/1.2.1_0,../../../../../lib/chromeextension/violentmonkey/jinjaccalgkegednnccohejagnlnfdag/2.12.7_0,../../../../../lib/chromeextension/touchvpn/bihmplhobchoageeokmgbdihknkjbknd/3.1.5_0',
                                                      '--load-extension=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0',
                                                      '--load-extension=../../../../../lib/chromeextension/ipfuck/bjgmbpodpcgmnpfjmigcckcjfldcicnd/1.3_0',
                                                      '--load-extension=../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0',
                                                      '--load-extension=../../../../../lib/chromeextension/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0',
                                                      '--load-extension=../../../../../lib/chromeextension/policycontrol/eekommagmgepaafaaegimeldlnnnolgn/0.3.5_0',
                                                      '--load-extension=../../../../../lib/chromeextension/alertblocker/ofjjanaennfbgpccfpbghnmblpdblbef/1.3_0',
                                                      '--load-extension=../../../../../lib/chromeextension/letmeout/hnfdibcbmlppjlkefinedeffoiomlecc/1.3_0',
                                                      '--load-extension=../../../../../lib/chromeextension/showmyip/pdnildedfbigagjbaigbalnfdfpijhaf/1.2.1_0',
                                                      '--load-extension=../../../../../lib/chromeextension/violentmonkey/jinjaccalgkegednnccohejagnlnfdag/2.12.7_0',
                                                       '--load-extension=../../../../../lib/chromeextension/touchvpn/bihmplhobchoageeokmgbdihknkjbknd/3.1.5_0',










                                                           disableGPU,
                                                          '--disable-flash-3d',
                                                           '--no-sandbox',
                                                          // '--disable-setuid-sandbox',

                                                           '--disable-popup-blocking',
                                                           '--disable-notifications',
                                                           '--disable-dev-shm-usage',
                                                           '--force-webrtc-ip-handling-policy=disable-non-proxied-udp',
                                                           '--disable-flash-stage3d',
                                                           '--disable-java',
                                                           '--disable-internal-flash',
                                                           '--disable-cache',
                                                           '--disable-webgl', // webgl
                                                           '--disable-3d-apis', // webgl
                                                           //'--disable-extensions',
                                                           '--disable-webgl-image-chromium',
                                                          //'--disable-reading-from-canvas', // <-- youtube videos not playing with this enabled

                                                           '--lang=en'

                                                         ]


                                                         });







                                                         page = await client.newPage();
                                                         await page.waitFor(5000);
                                                         await page.bringToFront();
                                                         log( 'Browser should be started now..' );





                                                         process.nextTick(parseYoutTubeLinks);






})().catch((e) => {


                                                    if(typeof e == 'string'){
                                                        if( e == 'Error: connect ECONNREFUSED 0.0.0.0:4444' ) log( '#1 error: ' + e );
                                                        else log( '#2 error: ' + e );
                                                    }//   if(typeof e == 'string'){

                                                    else{

                                                        log('Error while try to start browser - error :' + JSON.stringify( e, null, 4) )
                                                        if ( e.length == undefined ) {
                                                          log( 'e.length == 0' );
                                                        }

                                                    } // else from if(typeof e == 'string'){


 }); //   })().catch((e) => {
} //        async function startBROWSER(){






































































function parseYoutTubeLinks(){
log( 'parseYoutTubeLinks ()' );


fs.readFile('./bookmarks.txt', 'utf-8', function read(e, data) {
  if (e) {
     log('Error while reading bookmarks file: ' + e);
     return;
  }
  //log('Successfully open boomarks file (raw): ' +  data);



  // https://www.youtube.com/watch?v=
  let tmpAR = data.match(/youtube[.]com[/]watch[?]v[=](.*?)["]|youtube[.]com[/]watch[?]v[=](.*?)[']|youtube[.]com[/]watch[?]v[=](.*?)(\r\n|\r|\n)/gmi);



                               if( tmpAR[0] ){


                                       tmpAR.forEach(data => {
                                         data = data.replace(/["]$/gmi,'')
                                                             .replace(/[']$/gmi,'')
                                                             .replace(/(\r\n|\r|\n)/gmi,'');
                                          ytLinks_AR.push( 'https://' + data);
                                       }) // ytLinks_AR.forEach(data => {

                                       // randomise array..
                                      shuffle(ytLinks_AR);

                                      // unique array
                                      ytLinks_AR = unq(ytLinks_AR);

                                       //log('Parsed Youtube URLS: ' + ytLinks_AR);
                                       process.nextTick(startYoutTube);

                                  } //   if( tmpAR ){
                                  else log( 'No video was able to get parsed..' );

  }); // fs.readFile('././' + logilog, 'utf-8', function read(err, data) {
} //   function parseYoutTubeLinks(){












































function deleteOfflineVideos(){
log( 'deleteOfflineVideos() - Current video: ' + ytLinks_AR[0] );


  fs.readFile('./bookmarks.txt', 'utf-8', function read(e, data) {
    if (e) {
       log('#2 - Error while reading bookmarks file: ' + e);
       return;
    }

     // replace offline video..
     data.split(   ytLinks_AR[0].replace('https://', '').replace('http://', '')   ).join('');


                                                     fs.writeFile("./bookmarks.txt", data, function(e) {
                                                         if(e) {
                                                           log('Error while saving bookmarks file: ' + e);
                                                           return;
                                                         }

                                                                            log('Successfully deleted offline video.. We go now back to the script..');
                                                                            ytLinks_AR.shift();
                                                                            process.nextTick(startYoutTube);

                                                      }); // fs.writeFile("/tmp/test", "Hey there!", function(e) {







  }); // fs.readFile('./bookmarks.txt', 'utf-8', function read(e, data) {

} // function deleteOfflineVideos(){
















  function shuffle(array) {
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
  }



































































function countdown(count){
log( 'Time left:' );

            let str = ''
            let rainbow = chalkAnimation.rainbow( str );

             count = count - 1000;

              setInterval(() => {

                                count = count - 1000;

                                if( count <= 0 ) {
                                  log( 'countdown done!' );
                                  rainbow.stop();
                                  return;
                                }

                                if( count > 1000 ) var countS = count / 1000;
                                if( countS ) rainbow.replace( str = countS.toString() );


              }, 1000);




} //   function countdown(count){






  function convert_time(duration) {
  log( 'We convert now the youtube video duration to ms.. duration: '  + duration);

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
      return duration;
  }






  function startYoutTube(){
   (async () => {
   if( ytLinks_AR[0] ){
   log( 'startYoutTube() -  Current URL: '  + ytLinks_AR[0] );






          try {
              await page.goto(ytLinks_AR[0], {waitUntil: 'load', timeout: 35000});
          } catch(e) {
              log( '#3 error: ' + e.message );


              if( e.toString().match('Navigation timeout of') ){
                    log( '#2 - timeout was found we reload page in 30 seconds..' );
                    setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                } // else from  if( e.match('Navigation timeout of') ){



                      if ( e.toString().match( 'net::ERR_EMPTY_RESPONSE' ) ){
                          log( '#2 - net::ERR_EMPTY_RESPONSE was found we reload page in 30 seconds..' );
                          setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                      } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){



                        if ( e.toString().match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
                            log( '#2 - net::ERR_NAME_NOT_RESOLVED was found we reload page in 30 seconds..' );
                            setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){





                          if ( e.toString().match( 'net::ERR_CONNECTION_CLOSED' ) ){
                              log( '#2 - net::ERR_CONNECTION_CLOSED was found we reload page in 30 seconds..' );
                                setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                          } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){



                                                      if ( e.toString().match( 'net::ERR_CONNECTION_REFUSED' ) ){
                                                          log( '#2 - net::ERR_CONNECTION_REFUSED was found we reload page in 30 seconds..' );
                                                            setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                                                      } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


              return;

          } // catch(e) {
          log( 'Successfully loaded: ' + ytLinks_AR[0] );




                    let css = await page.evaluate(() => document.querySelector('body').outerHTML);
                    //log( 'body css: ' + css );
                    let $ = cheerio.load(css);


                              let videoDuration = $(css).find('.ytp-time-duration').text();
                              log( 'videoDuration:' + videoDuration + '\n\n' );

                              let errorMessage = $(css).find('.ytp-error-content-wrap-reason > span').text();
                              log( 'errorMessage:' + errorMessage + '\n\n' );

                              let errorMessagetwo = $(css).find('.reason.style-scope.yt-player-error-message-renderer').text();
                              log( 'errorMessagetwo:' + errorMessagetwo + '\n\n' );





                              if( !videoDuration ){
                                  log( 'Cant find video duration.. Maybe video not found? We go to next video..' );

                                  css = await page.evaluate(() => document.querySelector('body').outerHTML);
                                  //log( 'body css: ' + css );
                                  $ = cheerio.load(css);

                                  let googleCaptcha = $(css).find('#captcha-form').html();
                                  log( 'googleCaptcha:' + googleCaptcha + '\n\n' );

                                  if( googleCaptcha ) {
                                    log( 'Google Captcha was found.. solve it or change ip.. We wait now 60 second and after this we restart bot..' );
                                    setTimeout(() => { process.nextTick(startYoutTube); }, 60000);
                                  } //   if( googleCaptcha ) {
                                  else{
                                              ytLinks_AR.shift();
                                              process.nextTick(startYoutTube);
                                  } // else from   if( googleCaptcha ) {
                                  return;
                              } // if( !videoDuration ){












                                if( errorMessage == 'Sign in to confirm your age' || errorMessagetwo == 'Sign in to confirm your age' ){
                                    log( 'This video is only for users over 18.. You may sign-in to not get this message in future for other videos.. We go to next video now..' );
                                    ytLinks_AR.shift();
                                    process.nextTick(startYoutTube);
                                    return;
                                } // if( !videoDuration ){











                                if( errorMessage == 'Video unavailable' || errorMessagetwo == 'Video unavailable' ){
                                    log( 'This video is unavailable.. We go to next video now..' );
                                    process.nextTick(deleteOfflineVideos);
                                    return;
                                } // if( !videoDuration ){


                                  if( errorMessage == 'Private Video' || errorMessagetwo == 'Private Video' ){
                                      log( 'This video is private.. We go to next video now..' );
                                      process.nextTick(deleteOfflineVideos);
                                      return;
                                  } // if( !videoDuration ){



















                                var vidDuration_ms = convert_time(videoDuration);
                                log( 'Current video duration in ms: ' + vidDuration_ms );



                                let playButton = await page.$('.ytp-large-play-button.ytp-button');
                                if (await playButton.isIntersectingViewport()) {
                                log( 'click on the play button .ytp-large-play-button.ytp-button' );

                                          let item = '.ytp-large-play-button.ytp-button';
                                          await page.waitFor(5000);
                                          await page.evaluate((item) => {
                                            document.querySelector(item).click();
                                          }, item);
                                          await page.waitFor(5000); // if the video is not directly starting or loading (slow network and stuff)

                                          log( 'We wait now until the video was finished..\n\n' );

                                          countdown(vidDuration_ms);
                                          setTimeout(() => {
                                          log( 'It seems that the video was finished.. We go to next one now' );


                                                 ytLinks_AR.shift();
                                                process.nextTick(startYoutTube);

                                           }, vidDuration_ms);


                                         } //   if (await playButton.isIntersectingViewport()) {
                                         else {
                                         log( 'Play button not visible.. video started itself? \nWe wait now until the video was finished..' );

                                          countdown(vidDuration_ms);
                                           setTimeout(() => {
                                           log( '#2 - It seems that the video was finished.. We go to next one now' );


                                                  ytLinks_AR.shift();
                                                 process.nextTick(startYoutTube);

                                            }, vidDuration_ms);


                                         } // else from   if (await example.isIntersectingViewport()) {




} // if( ytLinks_AR[0] ){
else {
  log( `############ FINISH ##############
  No more youtube video was found.. we will end the script now..`);


               await client.close();
               setTimeout(() => { process.exit() }, 10000);

} // else from if( ytLinks_AR[0] ){


})().catch((e) => error2(e));
} //  async function startBROWSER(){









function error2(e){
log('#2 - Error:' + e);


        if ( e.toString().match( "TypeError: Cannot read property 'outerHTML' of null" ) ){
            log( '#2 - TypeError: Cannot read property outerHTML of null was found we reload page in 30 seconds..' );
            process.nextTick( startYoutTube );

        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){



  } // function error2(){
