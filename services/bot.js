'use strict'
console.log( 'bot.js - Current working directory: ' + __dirname );


var confirmButton = false;
var firstRUN = true;


              const fs = require('fs'),
                   log = require('fancy-log'),
                 chalk = require('chalk'),
             puppeteer = require('puppeteer'),
        chalkAnimation = require('chalk-animation'),
              gradient = require('gradient-string'),

            controller = require('../controller/controllerLib'),

                    os = require('os'),
                osHOME = os.homedir(),
            osPLATFORM = os.platform(),

       json_configFile = fs.readFileSync('./admin/config.json', 'utf8'),
           json_config = JSON.parse(json_configFile),
config_browser_profile = json_config.browser_profile,

           windowWidth = json_config.windowWidth,
          windowHeight = json_config.windowHeight,
    windowSizeComplete = '--window-size=' + windowWidth + ',' + windowHeight;
    log( 'windowSizeComplete: ' + windowSizeComplete );












        const BOT = {

          startBROWSER: async function() { return await startBROWSER(); },
          startYoutTube: async function(ytLinks_AR, client, page) { return await startYoutTube(ytLinks_AR, client, page); }

        };

        module.exports = BOT;

























      var args = [

            windowSizeComplete,

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

    ];






        var browserProfilePath;
        log( 'osPLATFORM: ' + osPLATFORM );
        if( osPLATFORM == 'darwin' ) browserProfilePath = './lib/browserProfiles/';
        if( osPLATFORM == 'linux' ) browserProfilePath = './lib/browserProfiles/';
        if( osPLATFORM == 'win32' ) browserProfilePath = '../../../../../lib/browserProfiles/';
        log( 'browserProfilePath: ' + browserProfilePath + '\nconfig_browser_profile: ' + config_browser_profile );


        var chromeExtensionPath;
        if( osPLATFORM == 'darwin' ) chromeExtensionPath = './lib/chromeextension/';
        if( osPLATFORM == 'linux' ) chromeExtensionPath = './lib/chromeextension/';
        if( osPLATFORM == 'win32' ) chromeExtensionPath = '../../../../../lib/chromeextension/';
        log( 'chromeExtension Path: ' + chromeExtensionPath );








         var extensionlist = json_config.extensionlist;

         if( extensionlist.length !== 0 ){

             let extensionlistAR = [];
             for( let d in extensionlist ){
                    extensionlistAR.push( chromeExtensionPath + extensionlist[d] );
                    args.push( '--load-extension=' + chromeExtensionPath + extensionlist[d] );
             } // for( let d of extensionlist ){

          extensionlist = '--disable-extensions-except=' + extensionlistAR.join( ',' );
          args.push(extensionlist);

         } //  if( extensionlist.length !== 0 ){
         log( 'extensionlist: ' + extensionlist + '\n\nArgs: ' + args);










              const headlessVALUE = json_config.headless;

              log( '\n\nWe will check now your headless value..headlessVALUE: ' + headlessVALUE );
              if(headlessVALUE) {

                     log('\n\nYou enabled headless..\n\n');
                     args.push('--disable-gpu');

              }
              else log('\n\nYou disabled headless..\n\n');












































async function startBROWSER(){
log( 'We will start now your Browser please wait..' );




        try {


                const client = await puppeteer.launch({
                 //executablePath: '/snap/bin/chromium',
                 //executablePath: '/usr/bin/google-chrome',
                 //executablePath: '/home/user/Downloads/Linux_x64_749751_chrome-linux/chrome-linux/chrome',
                // executablePath: '/home/user/Downloads/firefox-78.0a1.en-US.linux-x86_64/firefox/firefox',
                 headless: headlessVALUE, // true or false
                 userDataDir: browserProfilePath + config_browser_profile,
                 args: args
               });






               log( 'Create new page..' );
               const page = await client.newPage();
               await page.waitFor(5000);
               await page.bringToFront();
               log( 'Browser should be started now..' );

               const session = await page.target().createCDPSession();
               await session.send('Page.enable');
               await session.send('Page.setWebLifecycleState', {state: 'active'});

               log( 'Return page and client..' );
               return {"client":client,"page":page};


        } catch(e) {


                    if(typeof e == 'string'){

                                              if( e == 'Error: connect ECONNREFUSED 0.0.0.0:4444' ) log( '#1 ECONNREFUSED error found.. error: ' + e );
                                              else log( '#2 error: ' + e );

                    }//   if(typeof e == 'string'){
                    else{
                    log('Error while try to start browser - error :' + e )



                                    if ( e.length == undefined ) {
                                      log( '#browser start - error is undefinied.. we restart now the browser..' );

                                                 await client.close();
                                                 await startBROWSER();

                                    } //     if ( e.length == undefined ) {



                                    if ( e.name == 'TimeoutError' ) {
                                      log( '#browser start - TimeoutError was found.. we restart now the browser..' );

                                                    await client.close();
                                                    await startBROWSER();

                                    } //     if ( e.length == undefined ) {


                    } // else from if(typeof e == 'string'){



   } // catch(e) {





} //        async function startBROWSER(){
















































async function checkSignBox(client, page){
log( 'checkSignBox()' );


   if ( await page.$('paper-button.style-scope.yt-button-renderer.style-text.size-small') ){
   log( 'Sign-in box found' );

        await page.click('paper-button.style-scope.yt-button-renderer.style-text.size-small');

   }

   log( 'We wait now 5 seconds to check if the terms box will come after this..' );
   await new Promise(resolve => setTimeout(resolve, 5000));

   if ( !await page.$('#dialog[aria-hidden="true"]') && await page.$('#dialog') ){
   log( 'Agree terms box found..' );

        const elementHandle = await page.$('#iframe');
        const frame = await elementHandle.contentFrame();
        log( 'frame: ' + frame );
        await frame.click('#introAgreeButton');

    }

    await new Promise(resolve => setTimeout(resolve, 1000));


} // async function checkSignBox(client, page){


























async function youTubeError(ytLinks_AR, client, page){
log( 'youTubeError()' );



           var errorMessageMAIN = await page.evaluate(() => document.querySelector('#reason')?.textContent);
           log( 'errorMessageMAIN: ' + errorMessageMAIN + '\n\n' );




           if( !errorMessageMAIN )  {

                    var errorMessage = await page.evaluate(() => document.querySelector('.ytp-error-content-wrap-reason > span')?.textContent);
                    log( 'errorMessage:' + errorMessage + '\n\n' );

                    var errorMessagetwo = await page.evaluate(() => document.querySelector('.style-scope.yt-player-error-message-renderer')?.textContent);
                    log( 'errorMessagetwo: ' + errorMessagetwo + '\n\n' );


            } //   if( !errorMessageMAIN )  {





            if(
                 errorMessage == 'Sign in to confirm your age' ||
                 errorMessagetwo == 'Sign in to confirm your age' ||
                 errorMessageMAIN == 'Sign in to confirm your age'
               ){

                 log( 'This video is only for users over 18.. You may sign-in to not get this message in future for other videos.. We go to next video now..' );
                 ytLinks_AR.shift();
                 await startYoutTube(ytLinks_AR, client, page);
                 return false;

            } // if( !videoDuration ){




            if(
                  errorMessage == 'Video unavailable' ||
                  errorMessagetwo == 'Video unavailable' ||
                  errorMessageMAIN == 'Video unavailable'
                ){

                  log( 'This video is unavailable.. We delete this video now from bookmarks file..\n\n' );
                  ytLinks_AR = await controller.deleteOfflineVideos(ytLinks_AR);
                  await startYoutTube(ytLinks_AR, client, page);
                  return false;

            } // if( !videoDuration ){







              if(
                   errorMessage == 'Private video' ||
                   errorMessagetwo == 'Private video' ||
                   errorMessageMAIN == 'Private video'
                 ){
                   log( 'This video is private.. We delete this video now from bookmarks file..\n\n' );
                   ytLinks_AR = await controller.deleteOfflineVideos(ytLinks_AR);
                   await startYoutTube(ytLinks_AR, client, page);
                   return false;
              } // if( !videoDuration ){






              if(
                  errorMessage == "This video has been removed for violating YouTube's Community Guidelines." ||
                  errorMessagetwo == "This video has been removed for violating YouTube's Community Guidelines." ||
                  errorMessageMAIN == "This video has been removed for violating YouTube's Community Guidelines."
               ){

                  log( 'This video has been removed for violating YouTubes Community Guidelines.. We delete this video now from bookmarks file..\n\n' );
                  ytLinks_AR = await controller.deleteOfflineVideos(ytLinks_AR);
                  await startYoutTube(ytLinks_AR, client, page);
                  return false;

              } // if( !videoDuration ){






                if(
                  errorMessage == "Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video." ||
                  errorMessagetwo == "Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video." ||
                  errorMessageMAIN == "Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video."
                 ){
                    log( 'Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video... We skip this video now..\n\n' );
                    ytLinks_AR.shift();
                    await startYoutTube(ytLinks_AR, client, page);
                    return false;
                } // if( !videoDuration ){




return true;

} // async function youTubeError(page){




























async function scrapVideoInfo(page){
log( 'scrapVideoInfo()' );


        const videoTitle = await page.evaluate(() => document.querySelector('.title.style-scope.ytd-video-primary-info-renderer')?.textContent);
        log( 'videoTitle: ' + chalk.white.bgGreen.bold( videoTitle )  );

        const videoViews = await page.evaluate(() => document.querySelector('.view-count.style-scope.yt-view-count-renderer')?.textContent);
        log( 'videoViews: ' + chalk.white.bgGreen.bold( videoViews ) );

        const videoDate = await page.evaluate(() => document.querySelector('#date > yt-formatted-string')?.textContent);
        log( 'videoDate: ' + chalk.white.bgGreen.bold( videoDate ) );

        const channelName = await page.evaluate(() => document.querySelector('#upload-info > #channel-name')?.querySelector('.yt-simple-endpoint.style-scope.yt-formatted-string')?.textContent);
        log( 'channelName: ' + chalk.white.bgGreen.bold( channelName ) );

        const videoLikes = await page.evaluate(() => document.querySelector('#menu-container')?.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(1)')?.querySelector('#text')?.textContent);
        log( 'videoLikes: ' + chalk.white.bgGreen.bold( videoLikes ) );

        const videoDisslikes = await page.evaluate(() => document.querySelector('#menu-container')?.querySelector('#top-level-buttons > ytd-toggle-button-renderer:nth-child(2)')?.querySelector('#text')?.textContent);
        log( 'videoDisslikes: ' + chalk.white.bgGreen.bold( videoDisslikes )  + '\n\n' );



} // async function scrapVideoInfo(client, page){




































async function openLink(ytLinks_AR, client, page){
log( 'openLink()' );



          try {
              await page.goto(ytLinks_AR[0], {waitUntil: 'networkidle0', timeout: 35000});
          } catch(e) {
          log( 'Error while open youtube video.. Error: ' + e.message );


                    if( e.message.match('Navigation timeout of') ){
                        log( '#2 - Navigation timeout was found we reload page in 30 seconds..\n\n' );
                        await new Promise(resolve => setTimeout(resolve, 30000));
                        await startYoutTube(ytLinks_AR, client, page);
                    }

                    if ( e.message.match( 'net::ERR_EMPTY_RESPONSE' ) ){
                         log( '#2 - net::ERR_EMPTY_RESPONSE was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                         await startYoutTube(ytLinks_AR, client, page);
                    }

                    if ( e.message.match( 'net::ERR_NETWORK_CHANGED' ) ){
                         log( '#2 - net::ERR_NETWORK_CHANGED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                         await startYoutTube(ytLinks_AR, client, page);
                    }

                    if ( e.message.match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
                         log( '#2 - net::ERR_NAME_NOT_RESOLVED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                         await startYoutTube(ytLinks_AR, client, page);
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_CLOSED' ) ){
                         log( '#2 - net::ERR_CONNECTION_CLOSED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                         await startYoutTube(ytLinks_AR, client, page);
                    }


                    if ( e.message.match( 'net::ERR_PROXY_CONNECTION_FAILED' ) ){
                         log( '#2 - net::ERR_PROXY_CONNECTION_FAILED was found.. Maybe your proxy is offline? Maybe change your proxy.. However we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                         await startYoutTube(ytLinks_AR, client, page);
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_REFUSED' ) ){
                         log( '#2 - net::ERR_CONNECTION_REFUSED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                         await startYoutTube(ytLinks_AR, client, page);
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_TIMED_OUT' ) ){
                         log( '#2 - net::ERR_CONNECTION_TIMED_OUT was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                         await startYoutTube(ytLinks_AR, client, page);
                    }


          }; //   } catch(e) {


          return true;


} // async function openLink(ytLinks_AR, client, page){







































  var str = '';
  const rainbow = chalkAnimation.rainbow( str );


  function countdown(count, page){


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


                                         if ( await page.$('#confirm-button') && !confirmButton ) {
                                         log( '#confirm-button was found and this means video was paused by youtube.. we click it now to replay the video!\n\n' );

                                         await page.bringToFront();

                                                       try{
                                                         await page.click('#confirm-button');
                                                       } catch(e) {  log( '#confirm-button error: ' + e.message );   }
                                                       confirmButton = true;

                                         } //  if ( await page.$('#confirm-button') ) {


                    }, 1000); //   let countdownInterval = setInterval(() => {




  } //function countdown(count){






























     // check for video ads..
    async function checkADS(countdownValue, page){
    log( 'ENTER checkADS() - countdownValue: ' + countdownValue );

         if ( await page.$('.ad-showing') ){
         log( 'Video ADS was found.. We wait now until the AD is finished..\n\n' );


                 try {

                      await page.waitForSelector('.ytp-ad-skip-button-text', {visible: true, timeout:countdownValue});
                      await new Promise(resolve => setTimeout(resolve, 1000));
                      log( 'Skip Button is clickable.. We click it now..\n\n' );
                      await page.click('.ytp-ad-skip-button-text');
                      log( 'Video AD is finished.. We wait not 5 seconds and then start again..\n\n' );
                      await new Promise(resolve => setTimeout(resolve, 5000));

                 } catch(e) {
                 log( 'wait for visible (.ytp-ad-skip-button-text) error: ' + e.message );

                 }


          } // if ( await page.$('.ad-showing') ){
          else log( 'No video ADS was found.. we continue the script now..\n\n' );

    } // async function checkADS(){












































































async function startYoutTube(ytLinks_AR, client, page){
confirmButton = false;



try{


  if( !ytLinks_AR[0] ){
  log( `############ FINISH ##############
  No more youtube video was found.. we will end the script now..\n\n`);

      await client.close();
      setTimeout(() => { process.exit() }, 10000);

      return;

  }
  log( 'startYoutTube() -  Current URL: '  + ytLinks_AR[0] + '\n\n' );





// open youtube link..
if( !await await openLink(ytLinks_AR, client, page) ){ return; }
log( 'openLink() done..' );






            try {

                  // dont remove, youtube is loading sometimes even when document is ready..
                  await page.waitForSelector('.title.style-scope.ytd-video-primary-info-renderer', {visible: true, timeout: 10000});

               } catch(e) {

                   log( '#3a error: ' + e.message );
                   if( e.message.match('TimeoutError: waiting for selector') ) log( 'As it seems the video title cant be found.. We will check now in more detail whats the problem.. \n\n' );

              } // catch(e) {
             log( 'Successfully loaded: ' + ytLinks_AR[0] + '\n\n' );







              // check if signin box is avaible..
               if( firstRUN ){
               log( 'We wait now 10 seconds if the sign-in box will come..' );
               firstRUN = false;

                 try {

                     let visible = await page.waitForSelector('paper-button.style-scope.yt-button-renderer.style-text.size-small', {visible: true, timeout:10000});
                     log( 'Sign-in Box visible: ' + visible );
                     if ( !await page.$('#dialog[aria-hidden="true"]') && await page.$('#dialog') || visible ) await checkSignBox(client, page);


                 } catch(e) {
                 log( 'wait for visible (paper-button.style-scope.yt-button-renderer.style-text.size-small) error: ' + e.message );

                 }

               }
               log( 'checkSignBox done..' );



              // check if any youtube error like private video and so on is visible..
              if(!await youTubeError(ytLinks_AR, client, page)){ return; }
              log( 'No YouTube Warning was found..' );








              // check for video ads.. do it 2 times because sometimes 2 ads..
              await checkADS(countdownValue, page)
              await checkADS(countdownValue, page)
              log( 'checkADS() done..' );







              // scrap video details like likes, views, ..
              await scrapVideoInfo(page);
              log( 'scrapVideoInfo() done..' + '\n\n' );



























                  let videoDuration = await page.evaluate(() => document.querySelector('.ytp-time-duration')?.textContent);
                  log( 'videoDuration: ' + chalk.white.bgGreen.bold( videoDuration ) );


                  await page.hover('.ytp-progress-bar-container');
                  await new Promise(resolve => setTimeout(resolve, 1000));

                  let currentVideoDuration = await page.evaluate(() => document.querySelector('.ytp-time-current')?.textContent);
                  log( 'currentVideoDuration: ' + chalk.white.bgGreen.bold( currentVideoDuration ) + '\n\n'  );

                  await page.hover('video');









                  if( !videoDuration ){
                  log( 'Cant find video duration.. Maybe video not found? We go to next video..' );

                                                if( await page.$('#captcha-form') ) {

                                                    await page.bringToFront();
                                                    log( 'Google Captcha was found.. solve it or change ip.. We wait now 60 second and after this we restart bot..\n\n' );
                                                    await new Promise(resolve => setTimeout(resolve, 60000));
                                                    await startYoutTube(ytLinks_AR, client, page);

                                                } //   if( googleCaptcha ) {
                                                else{

                                                    ytLinks_AR.shift();
                                                    await startYoutTube(ytLinks_AR, client, page);

                                                } // else from   if( googleCaptcha ) {

                      return;
                   } // if( !videoDuration ){








                  let vidDuration_ms = await controller.convert_time(videoDuration);

                  if( currentVideoDuration ) var currentVideoDuration_ms = await controller.convert_time(currentVideoDuration);
                  else var currentVideoDuration_ms = 0;
                  //log( 'Successfully converted times.. currentVideoDuration_ms:' + currentVideoDuration_ms + '\nvidDuration_ms: ' + vidDuration_ms +  '\n\n' );



                    if( vidDuration_ms ) {
                        var countdownValue = vidDuration_ms - currentVideoDuration_ms;
                        log( 'countdownValue after substract played time: ' + countdownValue + '\n\n' );
                     }  else {
                        var countdownValue = vidDuration_ms;
                        log( 'countdownValue without substract played time: ' + countdownValue + '\n\n' );
                     }





























































    let playButton = await page.$('.ytp-large-play-button.ytp-button');
    if (await playButton.isIntersectingViewport()) {
    log( 'Large play button was found.. Video did not started itself\n\n' );


              await page.click('.ytp-large-play-button.ytp-button');
              log( 'We wait now until the video was finished.. Countdown: ' + countdownValue + '\n\nTime left: \n\n' );

              countdown(countdownValue, page);
              await new Promise(resolve => setTimeout(resolve, countdownValue));
              log( 'It seems that the video was finished.. We go now to next one..\n\n' );

              ytLinks_AR.shift();
              await startYoutTube(ytLinks_AR, client, page);


     } //   if (await playButton.isIntersectingViewport()) {
     else {



               // wait now 5 seconds in case that the video gets stopped again.. this happens when you delete css via adblock and ignore the I accept your cookies shit fields

               log( 'We wait now 5 seconds and then check again if the video is playing or not..\n\n' );
               await page.waitFor(5000);


                 let videoDuration = await page.evaluate(element => element.textContent, await page.$(".ytp-time-duration") );
                 log( '#2 videoDuration: ' + chalk.white.bgGreen.bold( videoDuration ) + '\n\n' );

                 await page.hover('.ytp-progress-bar-container');
                 await new Promise(resolve => setTimeout(resolve, 1000));

                  let currentVideoDuration = await page.evaluate(element => element.textContent, await page.$(".ytp-time-current") );
                  log( '#2 - currentVideoDuration: ' + chalk.white.bgGreen.bold( currentVideoDuration ) + '\n\n'  );


                  await page.hover('video');


                   let vidDuration_ms = await controller.convert_time(videoDuration);
                   log( 'Current video duration in ms: ' + vidDuration_ms );

                   if( currentVideoDuration ){
                       var currentVidDuration_ms = await controller.convert_time(currentVideoDuration);
                       log( '#2 Current video duration in ms: ' + currentVidDuration_ms );
                    } // if( currentVideoDuration ){
                   else currentVidDuration_ms = 0;





              if( currentVidDuration_ms ) {
                  var countdownValue = vidDuration_ms - currentVidDuration_ms;
                  log( 'countdownValue after substract played time: ' + countdownValue + '\n\n' );
              }
              else {
                  var countdownValue = vidDuration_ms;
                  log( 'countdownValue without substract played time: ' + countdownValue + '\n\n' );
              }









               if ( await page.$('.ytp-play-button.ytp-button[aria-label="Play (k)" ]') ){

                    log( 'Small Play button was found.. video did not started itself.. \n\nWe click now play..\n\nTime left:\n\n' );
                    await page.click('.ytp-play-button.ytp-button');

               }
              else log( 'Play button not visible.. video started itself.. \n\nWe wait now until the video was finished..\n\nTime left:\n\n' );








               countdown( countdownValue, page );
               await new Promise(resolve => setTimeout(resolve, countdownValue));
               log( '#2 - It seems that the video was finished.. We go to next one now' );

               ytLinks_AR.shift();
               await startYoutTube(ytLinks_AR, client, page);




} // else from   if (await example.isIntersectingViewport()) {










































} catch(e) {
log('ASYNC - startYoutTube() - error :' + e )

          if ( e.toString().match( "TypeError: Cannot read property 'outerHTML' of null" ) ){
               log( '#2 - TypeError: Cannot read property outerHTML of null was found we reload page now..' );
               await startYoutTube(ytLinks_AR, client, page);
          }


          if ( e.toString().match( "Execution context was destroyed" ) ){
               log( '#2 - Execution context was destroyed was found we reload page now..' );
               await startYoutTube(ytLinks_AR, client, page);
          }

}}; // async function startYoutTube(ytLinks_AR, client, page){