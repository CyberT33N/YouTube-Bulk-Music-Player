

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


                                                      '--disable-extensions-except=../../../../../lib/chromeextension/adblock_plus/cfhdojbkjhnklbpkdaibdccddilifddb/1.13.4_0,../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0,../../../../../lib/chromeextension/ipfuck/bjgmbpodpcgmnpfjmigcckcjfldcicnd/1.3_0,../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0,../../../../../lib/chromeextension/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0,../../../../../lib/chromeextension/policycontrol/eekommagmgepaafaaegimeldlnnnolgn/0.3.5_0,../../../../../lib/chromeextension/alertblocker/ofjjanaennfbgpccfpbghnmblpdblbef/1.3_0,../../../../../lib/chromeextension/letmeout/hnfdibcbmlppjlkefinedeffoiomlecc/1.3_0,../../../../../lib/chromeextension/showmyip/pdnildedfbigagjbaigbalnfdfpijhaf/1.2.1_0,../../../../../lib/chromeextension/violentmonkey/jinjaccalgkegednnccohejagnlnfdag/2.12.7_0,../../../../../lib/chromeextension/touchvpn/bihmplhobchoageeokmgbdihknkjbknd/3.1.5_0,',
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
                                                       '--load-extension=../../../../../lib/chromeextension/adblock_plus/cfhdojbkjhnklbpkdaibdccddilifddb/1.13.4_0',











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






})().catch((e) => {(async () => {

                                        if(typeof e == 'string'){

                                                                  if( e == 'Error: connect ECONNREFUSED 0.0.0.0:4444' ) log( '#1 ECONNREFUSED error found.. error: ' + e );
                                                                  else log( '#2 error: ' + e );

                                        }//   if(typeof e == 'string'){
                                        else{
                                        log('Error while try to start browser - error :' + JSON.stringify( e, null, 4) )



                                                        if ( e.length == undefined ) {
                                                          log( '#browser start - error is undefinied.. we restart now the browser..' );

                                                                     await client.close();
                                                                     process.nextTick( startBROWSER );

                                                        } //     if ( e.length == undefined ) {



                                                        if ( e.name == 'TimeoutError' ) {
                                                          log( '#browser start - TimeoutError was found.. we restart now the browser..' );

                                                                        await client.close();
                                                                        process.nextTick( startBROWSER );

                                                        } //     if ( e.length == undefined ) {


                                        } // else from if(typeof e == 'string'){

  }); // (async () => {
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
log( 'deleteOfflineVideos() - Current video: ' + ytLinks_AR[0] + '\n\n' );


  fs.readFile('./bookmarks.txt', 'utf-8', function read(e, data) {
    if (e) {
       log('#2 - Error while reading bookmarks file: ' + e + '\n\n');
       return;
    }

     // replace offline video..
    data = data.split(   ytLinks_AR[0].replace('https://', '').replace('http://', '').replace('https://www.', '').replace('http://www.', '')   ).join('\n');


                                                     fs.writeFile("./bookmarks.txt", data, function(e) {
                                                         if(e) {
                                                           log( 'Error while saving bookmarks file: ' + e + '\n\n' );
                                                           return;
                                                         }

                                                                            log( 'Successfully deleted offline video.. We go now back to the script..' + '\n\n' );
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



























































  var str = '';
  const rainbow = chalkAnimation.rainbow( str );


function countdown(count){


rainbow.replace( str = '' );
rainbow.start();

             count = count - 1000;

              let countdownInterval = setInterval(async () => {

                                count = count - 1000;

                                if( count <= 0 ) {
                                  rainbow.stop();
                                  log( 'countdown done!\n\n' );
                                  clearInterval( countdownInterval );
                                  return;
                                } //   if( count <= 0 ) {

                                if( count > 1000 ) var countS = count / 1000;
                                if( countS ) rainbow.replace( str = countS.toString() );


                                   if ( await page.$('#confirm-button') ) {
                                     log( '#confirm-button was found and this means video was paused by youtube.. we click it now to replay the video!\n\n' );
                                     await page.click('#confirm-button');
                                   } //  if ( await page.$('#confirm-button') ) {


              }, 1000); //   let countdownInterval = setInterval(() => {




} //   function countdown(count){




























  function convert_time(duration) {
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
  }



























  function startYoutTube(){
   (async () => {
   if( ytLinks_AR[0] ){
   log( 'startYoutTube() -  Current URL: '  + ytLinks_AR[0] );






          try {
              await page.goto(ytLinks_AR[0], {waitUntil: 'networkidle0', timeout: 35000});
          } catch(e) {
              log( '#3 error: ' + e.message );


              if( e.message.match('Navigation timeout of') ){
                    log( '#2 - Navigation timeout was found we reload page in 30 seconds..' );
                    setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                } // else from  if( e.match('Navigation timeout of') ){



                      if ( e.message.match( 'net::ERR_EMPTY_RESPONSE' ) ){
                          log( '#2 - net::ERR_EMPTY_RESPONSE was found we reload page in 30 seconds..' );
                          setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                      } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


                        if ( e.message.match( 'net::ERR_NETWORK_CHANGED' ) ){
                            log( '#2 - net::ERR_NETWORK_CHANGED was found we reload page in 30 seconds..' );
                            setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                        } //    if ( e.message.match( 'net::ERR_NETWORK_CHANGED' ) ){



                        if ( e.message.match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
                            log( '#2 - net::ERR_NAME_NOT_RESOLVED was found we reload page in 30 seconds..' );
                            setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){





                          if ( e.message.match( 'net::ERR_CONNECTION_CLOSED' ) ){
                              log( '#2 - net::ERR_CONNECTION_CLOSED was found we reload page in 30 seconds..' );
                                setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                          } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


                                                                                  if ( e.message.match( 'net::ERR_PROXY_CONNECTION_FAILED' ) ){
                                                                                      log( '#2 - net::ERR_PROXY_CONNECTION_FAILED was found.. Maybe your proxy is offline? Maybe change your proxy.. However we reload page in 30 seconds..' );
                                                                                        setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                                                                                  } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){





                                                      if ( e.message.match( 'net::ERR_CONNECTION_REFUSED' ) ){
                                                          log( '#2 - net::ERR_CONNECTION_REFUSED was found we reload page in 30 seconds..' );
                                                            setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                                                      } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){

                                                        if ( e.message.match( 'net::ERR_CONNECTION_TIMED_OUT' ) ){
                                                            log( '#2 - net::ERR_CONNECTION_TIMED_OUT was found we reload page in 30 seconds..' );
                                                              setTimeout(() => { process.nextTick(startYoutTube) }, 30000);
                                                        } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){



              return;

          } // catch(e) {



































            try {

                  // dont remove, youtube is loading sometimes even when document is ready..
                  await page.waitForSelector('.title.style-scope.ytd-video-primary-info-renderer', {visible: true, timeout: 10000});

               } catch(e) {
                   log( '#3a error: ' + e.message );


                   if( e.message.match('TimeoutError: waiting for selector') ) log( 'As it seems the video title cant be found.. We will check now in more detail whats the problem.. \n\n' );



              } // catch(e) {
             log( 'Successfully loaded: ' + ytLinks_AR[0] + '\n\n' );


















































                    let css = await page.evaluate(() => document.querySelector('body').outerHTML);
                    //log( 'body css: ' + css );
                    let $ = cheerio.load(css);



                              let errorMessage = $(css).find('.ytp-error-content-wrap-reason > span').text();
                              log( 'errorMessage:' + errorMessage + '\n\n' );

                              let errorMessagetwo = $(css).find('.reason.style-scope.yt-player-error-message-renderer').text();
                              log( 'errorMessagetwo: ' + errorMessagetwo + '\n\n' );







                                                              if( errorMessage == 'Sign in to confirm your age' || errorMessagetwo == 'Sign in to confirm your age' ){
                                                                  log( 'This video is only for users over 18.. You may sign-in to not get this message in future for other videos.. We go to next video now..' );
                                                                  ytLinks_AR.shift();
                                                                  process.nextTick(startYoutTube);
                                                                  return;
                                                              } // if( !videoDuration ){



                                                              if( errorMessage == 'Video unavailable' || errorMessagetwo == 'Video unavailable' ){
                                                                  log( 'This video is unavailable.. We delete this video now from bookmarks file..\n\n' );
                                                                  process.nextTick(deleteOfflineVideos);
                                                                  return;
                                                              } // if( !videoDuration ){


                                                                if( errorMessage == 'Private video' || errorMessagetwo == 'Private video' ){
                                                                    log( 'This video is private.. We delete this video now from bookmarks file..\n\n' );
                                                                    process.nextTick(deleteOfflineVideos);
                                                                    return;
                                                                } // if( !videoDuration ){





















































                              await page.hover('.ytp-progress-bar-container');

                              let videoDuration = await page.evaluate(element => element.textContent, await page.$(".ytp-time-duration") );
                              log( 'videoDuration: ' + chalk.white.bgGreen.bold( videoDuration ) + '\n\n' );

                               let currentVideoDuration = await page.evaluate(element => element.textContent, await page.$(".ytp-time-current") );
                               log( 'currentVideoDuration: ' + chalk.white.bgGreen.bold( currentVideoDuration ) + '\n\n'  );

                              await page.hover('video');




                              let videoTitle = $(css).find('.title.style-scope.ytd-video-primary-info-renderer').text();
                              log( 'videoTitle: ' + chalk.white.bgGreen.bold( videoTitle )  );

                              let videoViews = $(css).find('.view-count.style-scope.yt-view-count-renderer').text();
                              log( 'videoViews: ' + chalk.white.bgGreen.bold( videoViews ) );

                              let videoDate = $(css).find('#date > yt-formatted-string').text();
                              log( 'videoDate: ' + chalk.white.bgGreen.bold( videoDate ) );

                              let channelName = $(css).find('#upload-info > #channel-name').find('.yt-simple-endpoint.style-scope.yt-formatted-string').text();
                              log( 'channelName: ' + chalk.white.bgGreen.bold( channelName ) );

                              let videoLikes = $(css).find('#menu-container').find('#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)').find('#text').text();
                              log( 'videoLikes: ' + chalk.white.bgGreen.bold( videoLikes ) );

                              let videoDisslikes = $(css).find('#menu-container').find('#top-level-buttons > ytd-toggle-button-renderer:nth-child(2)').find('#text').text();
                              log( 'videoDisslikes: ' + chalk.white.bgGreen.bold( videoDisslikes )  + '\n\n' );






                              if( !videoDuration ){
                                  log( 'Cant find video duration.. Maybe video not found? We go to next video..' );

                                                            if( await page.$('#captcha-form') ) {
                                                              log( 'Google Captcha was found.. solve it or change ip.. We wait now 60 second and after this we restart bot..\n\n' );
                                                              setTimeout(() => { process.nextTick(startYoutTube); }, 60000);
                                                            } //   if( googleCaptcha ) {
                                                            else{
                                                                        ytLinks_AR.shift();
                                                                        process.nextTick(startYoutTube);
                                                            } // else from   if( googleCaptcha ) {

                                  return;
                              } // if( !videoDuration ){




















































                                let playButton = await page.$('.ytp-large-play-button.ytp-button');
                                if (await playButton.isIntersectingViewport()) {
                                log( 'Large play button was found.. Video did not started itself\n\n' );




                                                                      var vidDuration_ms = convert_time(videoDuration);
                                                                      log( 'Current video duration in ms: ' + vidDuration_ms );



                                                                      await page.click('.ytp-large-play-button.ytp-button');
                                                                      log( 'We wait now until the video was finished..\n\nTime left:\n\n' );


                                                                      countdown(vidDuration_ms);
                                                                      setTimeout(() => {
                                                                      log( 'It seems that the video was finished.. We go to next one now\n\n' );


                                                                             ytLinks_AR.shift();
                                                                            process.nextTick(startYoutTube);

                                                                       }, vidDuration_ms);


                                         } //   if (await playButton.isIntersectingViewport()) {
                                         else {




                                           // wait now 5 seconds in case that the video gets stopped again.. this happens when you delete css via adblock and ignore the I accept your cookies shit fields

                                           log( 'We wait now 5 seconds and then check again if the video is playing or not..\n\n' );
                                           await page.waitFor(5000);


                                                                         await page.hover('.ytp-progress-bar-container');


                                                                         let videoDuration = await page.evaluate(element => element.textContent, await page.$(".ytp-time-duration") );
                                                                         log( '#2 videoDuration: ' + chalk.white.bgGreen.bold( videoDuration ) + '\n\n' );

                                                                          let currentVideoDuration = await page.evaluate(element => element.textContent, await page.$(".ytp-time-current") );
                                                                          log( '#2 - currentVideoDuration: ' + chalk.white.bgGreen.bold( currentVideoDuration ) + '\n\n'  );


                                                                          await page.hover('video');


                                                                           var vidDuration_ms = convert_time(videoDuration);
                                                                           log( 'Current video duration in ms: ' + vidDuration_ms );

                                                                           if( currentVideoDuration ){
                                                                                    var currentVidDuration_ms = convert_time(currentVideoDuration);
                                                                                    log( '#2 Current video duration in ms: ' + currentVidDuration_ms );
                                                                            } // if( currentVideoDuration ){





                                                                      if( currentVidDuration_ms ) {
                                                                           var countdownValue = vidDuration_ms - currentVidDuration_ms;
                                                                           log( 'countdownValue after substract played time: ' + countdownValue + '\n\n' );
                                                                     }  //   if( currentVidDuration_ms ) {
                                                                     else {
                                                                          var countdownValue = vidDuration_ms;
                                                                          log( 'countdownValue without substract played time: ' + countdownValue + '\n\n' );
                                                                     } // else from   if( currentVidDuration_ms ) {









                                                                       if ( await page.$('.ytp-play-button.ytp-button[aria-label="Play (k)" ]') ){
                                                                      log( 'Small Play button was found.. video did not started itself.. \n\nWe click now play..\n\nTime left:\n\n' );

                                                                                            await page.click('.ytp-play-button.ytp-button');

                                                                       } //  if ( currentVidDuration_ms == 0 && playButtonCheck ){
                                                                      else log( 'Play button not visible.. video started itself.. \n\nWe wait now until the video was finished..\n\nTime left:\n\n' );

















                                                                      countdown( countdownValue );

                                                                       setTimeout(() => {
                                                                       log( '#2 - It seems that the video was finished.. We go to next one now' );


                                                                              ytLinks_AR.shift();
                                                                             process.nextTick(startYoutTube);

                                                                        }, countdownValue);





                                         } // else from   if (await example.isIntersectingViewport()) {




} // if( ytLinks_AR[0] ){
else {
  log( `############ FINISH ##############
  No more youtube video was found.. we will end the script now..`);


               await client.close();
               setTimeout(() => { process.exit() }, 10000);

} // else from if( ytLinks_AR[0] ){


})().catch((e) => {



          if ( e.toString().match( "TypeError: Cannot read property 'outerHTML' of null" ) ){
              log( '#2 - TypeError: Cannot read property outerHTML of null was found we reload page now..' );
              process.nextTick( startYoutTube );

          } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){


            if ( e.toString().match( "Execution context was destroyed" ) ){
                log( '#2 - Execution context was destroyed was found we reload page now..' );
                process.nextTick( startYoutTube );

            } //   if ( e.match( 'net::ERR_EMPTY_RESPONSE' ) ){



}); // })().catch((e) => {




} //  async function startBROWSER(){
