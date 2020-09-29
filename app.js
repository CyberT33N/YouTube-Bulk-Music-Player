

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
████████████████████████████████████████████████████████████████████████████████
.__                              __           .__               .__
|__| _____ ______   ____________/  |_  ______ |  |  __ __  ____ |__| ____   ______
|  |/     \\____ \ /  _ \_  __ \   __\ \____ \|  | |  |  \/ ___\|  |/    \ /  ___/
|  |  Y Y  \  |_> >  <_> )  | \/|  |   |  |_> >  |_|  |  / /_/  >  |   |  \\___ \
|__|__|_|  /   __/ \____/|__|   |__|   |   __/|____/____/\___  /|__|___|  /____  >
         \/|__|                        |__|             /_____/         \/     \/
*/
var firstRUN = true;

             const fs = require('fs'),
                  log = require('fancy-log'),
                chalk = require('chalk'),
              cheerio = require('cheerio'),
            puppeteer = require('puppeteer'),
       chalkAnimation = require('chalk-animation'),
             gradient = require('gradient-string'),

           controller = require('./controller/controller'),
        controllerLib = require('./controller/controllerLib');










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







log( 'Current working directory: ' + __dirname );
(async () => {
log( 'ENTER main async area..' );




        // get youtube links from bookmarks.txt
        const ytLinks_AR = await controllerLib.parseYoutTubeLinks();
        if(!ytLinks_AR){
          log( 'No video was able to get parsed..\n\n' );
          return;
        }
        log( 'We successfully parsed all YouTube links.. ytLinks_AR[0]: ' + ytLinks_AR[0] );





        // start browser and get page & client
        const botEngine_AR = await controller.startBROWSER();
        log( 'startBROWSER() done..' );

        if(!botEngine_AR){
           log( 'Something went wrong we cant find botEngine_AR' );
           return;
        }

        const client = botEngine_AR.client;
        const page = botEngine_AR.page;













async function startYoutTube(ytLinks_AR, client, page){
log( 'app.js - startYoutTube()' );


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
                      if( !await controller.openLink(ytLinks_AR, page) ){
                          await startYoutTube(ytLinks_AR, client, page);
                          return;
                       }
                      log( 'openLink() done..' );








                       // check if any youtube error like private video and so on is visible..
                       const ytLinks_AR_obj = await controller.youTubeError(ytLinks_AR, page);
                       ytLinks_AR = ytLinks_AR_obj.ytLinks_AR;
                       if( ytLinks_AR_obj.nextVid ){
                           await startYoutTube(ytLinks_AR, client, page);
                           return;
                       }
                       log( 'youTubeError() done.. No error was found..' );












                     // check if signin box is avaible..
                      if( firstRUN ){
                      log( 'We wait now 10 seconds if the sign-in box will come.. Please wait.. We will only do this 1x time at the start..' );
                      firstRUN = false;

                        try {

                            let visible = await page.waitForSelector('paper-button.style-scope.yt-button-renderer.style-text.size-small', {visible: true, timeout:10000});
                            log( 'Sign-in Box visible: ' + visible );
                            if ( !await page.$('#dialog[aria-hidden="true"]') && await page.$('#dialog') || visible ) await controller.checkSignBox(page);


                        } catch(e) {
                        log( 'wait for visible (paper-button.style-scope.yt-button-renderer.style-text.size-small) error: ' + e.message );

                        }

                      }
                      log( 'checkSignBox done..' );















                      // scrap video details like likes, views, ..
                      await controller.scrapVideoInfo(page);
                      log( 'scrapVideoInfo() done..' + '\n\n' );




















                      var timeValues = await controller.checkVideoDuration(page, true);
                      var countdownValue = timeValues.countdownValue;
                      var videoDuration = timeValues.videoDuration;
                      var currentVideoDuration = timeValues.currentVideoDuration;
                      log( 'checkVideoDuration() done..' );






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












                          // check for video ads.. do it 2 times because sometimes 2 ads..
                          await controller.checkADS(page);
                          await controller.checkADS(page);
                          log( 'checkADS() done..' );




















                        let playButton = await page.$('.ytp-large-play-button.ytp-button');
                        if (await playButton.isIntersectingViewport()) {
                        log( 'Large play button was found.. Video did not started itself\n\n' );


                                  await page.click('.ytp-large-play-button.ytp-button');
                                  log( 'We wait now until the video was finished.. Countdown: ' + countdownValue + '\n\nTime left: \n\n' );

                                  controller.countdown(countdownValue, page);
                                  await new Promise(resolve => setTimeout(resolve, countdownValue));
                                  log( 'It seems that the video was finished.. We go now to next one..\n\n' );

                                  ytLinks_AR.shift();
                                  await startYoutTube(ytLinks_AR, client, page);


                         } //   if (await playButton.isIntersectingViewport()) {
                         else {



                                 // wait now 5 seconds in case that the video gets stopped again.. this happens when you delete css via adblock and ignore the I accept your cookies shit fields

                                 log( 'We wait now 5 seconds and then check again if the video is playing or not..\n\n' );
                                 await page.waitFor(5000);



                                 timeValues = await controller.checkVideoDuration(page, true);
                                 countdownValue = timeValues.countdownValue;
                                 videoDuration = timeValues.videoDuration;
                                 currentVideoDuration = timeValues.currentVideoDuration;
                                 log( '#3 - checkVideoDuration() done..' );






                                 if ( await page.$('.ytp-play-button.ytp-button[aria-label="Play (k)" ]') ){

                                      log( 'Small Play button was found.. video did not started itself.. \n\nWe click now play..\n\nTime left:\n\n' );
                                      await page.click('.ytp-play-button.ytp-button');

                                 }
                                else log( 'Play button not visible.. video started itself.. \n\nWe wait now until the video was finished..\n\nTime left:\n\n' );








                                 controller.countdown( countdownValue, page );
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

await startYoutTube(ytLinks_AR, client, page);
log( 'finish..' );













})().catch((e) => {  log('ASYNC - MAIN - error :' + e )  });
