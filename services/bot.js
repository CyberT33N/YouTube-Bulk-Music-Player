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
          openLink: async function(ytLinks_AR, page) { return await openLink(ytLinks_AR, page); },
          youTubeError: async function(ytLinks_AR, page) { return await youTubeError(ytLinks_AR, page); },
          checkSignBox: async function(page) { return await checkSignBox(page); },
          scrapVideoInfo: async function(page) { return await scrapVideoInfo(page); },
          checkVideoDuration: async function(page, logs, ytLinks_AR) { return await checkVideoDuration(page, logs, ytLinks_AR); },
          checkADS: async function(page) { return await checkADS(page); },
          checkGoogleCaptcha: async function(page, ytLinks_AR) { return await checkGoogleCaptcha(page, ytLinks_AR); },
          startVideo: async function(page, ytLinks_AR) { return await startVideo(page, ytLinks_AR); },
          countdown: function(countdownValue, page) { countdown(countdownValue, page); }

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
               await page.setViewport({width:windowWidth, height:windowHeight});
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
















































async function checkSignBox(page){
log( 'checkSignBox() - firstRUN: ' + firstRUN );


    // check if signin box is avaible..
     if( firstRUN ){
     log( 'We wait now 10 seconds if the sign-in box will come.. Please wait.. We will only do this 1x time at the start..' );
     firstRUN = false;




         try {

             let visible = await page.waitForSelector('paper-button.style-scope.yt-button-renderer.style-text.size-small', {visible: true, timeout:10000});
             log( 'Sign-in Box visible: ' + visible );
             if ( !await page.$('#dialog[aria-hidden="true"]') && await page.$('#dialog') || visible ){


                       if ( await page.$('paper-button.style-scope.yt-button-renderer.style-text.size-small') ){
                       log( 'Sign-in box found' );

                            await page.click('paper-button.style-scope.yt-button-renderer.style-text.size-small');

                       } //    if ( await page.$('paper-button.style-scope.yt-button-renderer.style-text.size-small') ){


                       log( 'We wait now 5 seconds to check if the terms box will come after this..' );
                       await new Promise(resolve => setTimeout(resolve, 5000));


                       if ( !await page.$('#dialog[aria-hidden="true"]') && await page.$('#dialog') ){
                       log( 'Agree terms box found..' );

                            const elementHandle = await page.$('#iframe');
                            const frame = await elementHandle.contentFrame();
                            log( 'frame: ' + frame );
                            await frame.click('#introAgreeButton');

                        } //    if ( !await page.$('#dialog[aria-hidden="true"]') && await page.$('#dialog') ){

                        await new Promise(resolve => setTimeout(resolve, 1000));


             } // if ( !await page.$('#dialog[aria-hidden="true"]') && await page.$('#dialog') || visible ){

        } catch(e) { log( 'Async - checkSignBox() - error: ' + e.message ); }



    } //   if( firstRUN ){

} // async function checkSignBox(client, page){











































async function youTubeError(ytLinks_AR, page){
log( 'youTubeError()' );





            try {

                  // dont remove, youtube is loading sometimes even when document is ready..
                  await page.waitForSelector('.title.style-scope.ytd-video-primary-info-renderer', {visible: true, timeout: 10000});

               } catch(e) {

                   log( '#3a error: ' + e.message );
                   if( e.message.match('TimeoutError: waiting for selector') ) log( 'As it seems the video title cant be found.. We will check now in more detail whats the problem.. \n\n' );

              } // catch(e) {
             log( 'Successfully loaded: ' + ytLinks_AR[0] + '\n\n' );





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
                 return {"ytLinks_AR":ytLinks_AR, "nextVid": true};

            } // if( !videoDuration ){




            if(
                  errorMessage == 'Video unavailable' ||
                  errorMessagetwo == 'Video unavailable' ||
                  errorMessageMAIN == 'Video unavailable'
                ){

                  log( 'This video is unavailable.. We delete this video now from bookmarks file..\n\n' );
                  return {"ytLinks_AR":await controller.deleteOfflineVideos(ytLinks_AR), "nextVid": true};


            } // if( !videoDuration ){







              if(
                   errorMessage == 'Private video' ||
                   errorMessagetwo == 'Private video' ||
                   errorMessageMAIN == 'Private video'
                 ){
                   log( 'This video is private.. We delete this video now from bookmarks file..\n\n' );
                   return {"ytLinks_AR":await controller.deleteOfflineVideos(ytLinks_AR), "nextVid": true};

              } // if( !videoDuration ){






              if(
                  errorMessage == "This video has been removed for violating YouTube's Community Guidelines." ||
                  errorMessagetwo == "This video has been removed for violating YouTube's Community Guidelines." ||
                  errorMessageMAIN == "This video has been removed for violating YouTube's Community Guidelines."
               ){

                  log( 'This video has been removed for violating YouTubes Community Guidelines.. We delete this video now from bookmarks file..\n\n' );
                  return {"ytLinks_AR":await controller.deleteOfflineVideos(ytLinks_AR), "nextVid": true};


              } // if( !videoDuration ){






                if(
                  errorMessage == "Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video." ||
                  errorMessagetwo == "Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video." ||
                  errorMessageMAIN == "Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video."
                 ){
                    log( 'Your browser does not currently recognize any of the video formats available. Click here to visit our frequently asked questions about HTML5 video... We skip this video now..\n\n' );
                    ytLinks_AR.shift();
                    return {"ytLinks_AR":ytLinks_AR, "nextVid": true};
                } // if( !videoDuration ){




return {"ytLinks_AR":ytLinks_AR, "nextVid": false};

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




































async function openLink(ytLinks_AR, page){
log( 'openLink()' );



          try {
              await page.goto(ytLinks_AR[0], {waitUntil: 'networkidle0', timeout: 35000});
          } catch(e) {
          log( 'Error while open youtube video.. Error: ' + e.message );


                    if( e.message.match('Navigation timeout of') ){
                        log( '#2 - Navigation timeout was found we reload page in 30 seconds..\n\n' );
                        await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_EMPTY_RESPONSE' ) ){
                         log( '#2 - net::ERR_EMPTY_RESPONSE was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_NETWORK_CHANGED' ) ){
                         log( '#2 - net::ERR_NETWORK_CHANGED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_NAME_NOT_RESOLVED' ) ){
                         log( '#2 - net::ERR_NAME_NOT_RESOLVED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_CLOSED' ) ){
                         log( '#2 - net::ERR_CONNECTION_CLOSED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }


                    if ( e.message.match( 'net::ERR_PROXY_CONNECTION_FAILED' ) ){
                         log( '#2 - net::ERR_PROXY_CONNECTION_FAILED was found.. Maybe your proxy is offline? Maybe change your proxy.. However we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_REFUSED' ) ){
                         log( '#2 - net::ERR_CONNECTION_REFUSED was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
                    }

                    if ( e.message.match( 'net::ERR_CONNECTION_TIMED_OUT' ) ){
                         log( '#2 - net::ERR_CONNECTION_TIMED_OUT was found we reload page in 30 seconds..\n\n' );
                         await new Promise(resolve => setTimeout(resolve, 30000));
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
                                        confirmButton = false;
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


                                           await checkADS(page);
                                           await checkADS(page);

                    }, 1000); //   let countdownInterval = setInterval(() => {




  } //function countdown(count){








































// start youtube video..
async function startVideo(page, ytLinks_AR){
log( 'startVideo();' );


      let playButton = await page.$('.ytp-large-play-button.ytp-button');
      if (await playButton.isIntersectingViewport()) {
      log( 'Large play button was found.. Video did not started itself\n\n' );


            const timeValues = await checkVideoDuration(page, true, ytLinks_AR);
            const countdownValue = timeValues.countdownValue;
            const videoDuration = timeValues.videoDuration;
            const currentVideoDuration = timeValues.currentVideoDuration;
            log( '#1 - checkVideoDuration() done..' );


            await page.click('.ytp-large-play-button.ytp-button');
            log( 'We wait now until the video was finished.. Countdown: ' + countdownValue + '\n\nTime left: \n\n' );

            countdown(countdownValue, page);
            await new Promise(resolve => setTimeout(resolve, countdownValue));
            log( 'It seems that the video was finished.. We go now to next one..\n\n' );

            ytLinks_AR.shift();
            return ytLinks_AR;


       } //   if (await playButton.isIntersectingViewport()) {
       else {



           // wait now 5 seconds in case that the video gets stopped again.. this happens when you delete css via adblock and ignore the I accept your cookies shit fields

           log( 'We wait now 5 seconds and then check again if the video is playing or not..\n\n' );
           await page.waitFor(5000);


           const timeValues = await checkVideoDuration(page, true, ytLinks_AR);
           const countdownValue = timeValues.countdownValue;
           const videoDuration = timeValues.videoDuration;
           const currentVideoDuration = timeValues.currentVideoDuration;
           log( '#2 - checkVideoDuration() done..' );





           if ( await page.$('.ytp-play-button.ytp-button[aria-label="Play (k)" ]') ){

                log( 'Small Play button was found.. video did not started itself.. \n\nWe click now play..\n\nTime left:\n\n' );
                await page.click('.ytp-play-button.ytp-button');

           }
          else log( 'Play button not visible.. video started itself.. \n\nWe wait now until the video was finished..\n\nTime left:\n\n' );



           countdown( countdownValue, page );
           await new Promise(resolve => setTimeout(resolve, countdownValue));
           log( '#2 - It seems that the video was finished.. We go to next one now' );

           ytLinks_AR.shift();
           return ytLinks_AR;



  } // else from   if (await example.isIntersectingViewport()) {



} // async function startVideo(page, ytLinks_AR){













































// check for google captcha..
async function checkGoogleCaptcha(page, ytLinks_AR){
log( 'checkGoogleCaptcha();' );


      const timeValues = await checkVideoDuration(page, true, ytLinks_AR);
      const countdownValue = timeValues.countdownValue;
      const videoDuration = timeValues.videoDuration;
      const currentVideoDuration = timeValues.currentVideoDuration;
      log( 'checkGoogleCaptcha() - checkVideoDuration() done..' );


        if( !videoDuration ){
        log( 'Cant find video duration.. Maybe video not found? We go to next video..' );

            if( await page.$('#captcha-form') ) {

                await page.bringToFront();
                log( 'Google Captcha was found.. solve it or change ip.. We wait now 60 second and after this we restart bot..\n\n' );
                await new Promise(resolve => setTimeout(resolve, 60000));
                return {"ytLinks_AR": ytLinks_AR, "nextVid": true};

            } // if( googleCaptcha ) {
            else {

                ytLinks_AR.shift();
                return {"ytLinks_AR": ytLinks_AR, "nextVid": true};

            } // else fromif( googleCaptcha ) {


         } // if( !videoDuration ){
         return {"ytLinks_AR": ytLinks_AR, "nextVid": false};


} // async function checkGoogleCaptcha(page){







































     // check for video ads..
    async function checkADS(page){

         if ( await page.$('.ad-showing') ){
         log( 'Video ADS was found.. We wait now until the AD is finished..\n\n' );

         const timeValues = await checkVideoDuration(page, false, ytLinks_AR);
         const countdownValue = timeValues.countdownValue;
         const videoDuration = timeValues.videoDuration;
         const currentVideoDuration = timeValues.currentVideoDuration;
         log( 'checkVideoDuration() done..' );



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

    } // async function checkADS(){





































// check current Video Duration
async function checkVideoDuration(page, logs, ytLinks_AR){
log('checkVideoDuration() - logs:' + logs );

        const videoDuration = await page.evaluate(() => document.querySelector('.ytp-time-duration')?.textContent);
        if(logs) log( 'checkVideoDuration() - videoDuration: ' + chalk.white.bgGreen.bold( videoDuration ) );


        let playButton = await page.$('.ytp-large-play-button.ytp-button');
        if (await playButton?.isIntersectingViewport()) { log( 'checkVideoDuration() - Play button found.. We click the button now and then wait 5 seconds..' );
          await page.click('.ytp-large-play-button.ytp-button');
          await new Promise(resolve => setTimeout(resolve, 5000));
        } //   if (await playButton.isIntersectingViewport()) {
        log( 'checkVideoDuration() - playButton.isIntersectingViewport() done..' );


        if( !await page.$('.ytp-progress-bar-container') ) { log( 'checkVideoDuration() - Can not find Hover CSS .ytp-progress-bar-container - Reload page..' );
          await openLink(ytLinks_AR, page);
          return await checkVideoDuration(page, logs, ytLinks_AR);
        }

        await page.hover('.ytp-progress-bar-container');
        await new Promise(resolve => setTimeout(resolve, 1000));
        log( 'checkVideoDuration() - .ytp-progress-bar-container hover done..' );


        const currentVideoDuration = await page.evaluate(() => document.querySelector('.ytp-time-current')?.textContent);
        if(logs) log( 'currentVideoDuration: ' + chalk.white.bgGreen.bold( currentVideoDuration ) + '\n\n'  );

        await page.hover('video');






        const vidDuration_ms = await controller.convert_time(videoDuration);

        if( currentVideoDuration ) var currentVideoDuration_ms = await controller.convert_time(currentVideoDuration);
        else var currentVideoDuration_ms = 0;
        //log( 'Successfully converted times.. currentVideoDuration_ms:' + currentVideoDuration_ms + '\nvidDuration_ms: ' + vidDuration_ms +  '\n\n' );


        if( vidDuration_ms ) return {"countdownValue":vidDuration_ms - currentVideoDuration_ms,"videoDuration":videoDuration,"currentVideoDuration":currentVideoDuration};
        else return {"countdownValue":vidDuration_ms,"videoDuration":videoDuration,"currentVideoDuration":currentVideoDuration};




} // async function checkVideoDuration(page, true){
