

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

             const fs = require('fs'),
                  log = require('fancy-log'),
                chalk = require('chalk'),
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




       await startYoutTube(ytLinks_AR, client, page);
       log( 'finish..' );





})().catch((e) => {(async () => {
     log('ASYNC - MAIN - error :' + e );


     if ( e.toString().match( "TypeError: Cannot read property 'outerHTML' of null" ) ){
          log( '#2 - TypeError: Cannot read property outerHTML of null was found we reload page now..' );
          await startYoutTube(ytLinks_AR, client, page);
     }


     if ( e.toString().match( "Execution context was destroyed" ) ){
          log( '#2 - Execution context was destroyed was found we reload page now..' );
          await startYoutTube(ytLinks_AR, client, page);
     }


})()});


















async function startYoutTube(ytLinks_AR, client, page){
log( 'app.js - startYoutTube()' );





                  if( !ytLinks_AR[0] ){
                  log( `############ FINISH ##############
                  No more youtube video was found.. We will end the script now.. Thank you for using this Bot :)\n\n`);

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
               var ytLinks_AR_obj = await controller.youTubeError(ytLinks_AR, page);
               ytLinks_AR = ytLinks_AR_obj.ytLinks_AR;
               if( ytLinks_AR_obj.nextVid ){
                   await startYoutTube(ytLinks_AR, client, page);
                   return;
               }
               log( 'youTubeError() done.. No error was found..' );







             // check if signin box is avaible..
             await controller.checkSignBox(page);
             log( 'checkSignBox done..' );






              // scrap video details like likes, views, ..
              await controller.scrapVideoInfo(page);
              log( 'scrapVideoInfo() done..' + '\n\n' );








              ytLinks_AR_obj = await controller.checkGoogleCaptcha(page, ytLinks_AR);
              ytLinks_AR = ytLinks_AR_obj.ytLinks_AR;
              if( ytLinks_AR_obj.nextVid ){
                  await startYoutTube(ytLinks_AR, client, page);
                  return;
              }
              log( 'checkGoogleCaptcha() done..' + '\n\n' );












              // check for video ads.. do it 2 times because sometimes 2 ads..
              await controller.checkADS(page);
              await controller.checkADS(page);
              log( 'checkADS() done..' );







                // start video..
                ytLinks_AR = await controller.startVideo(page, ytLinks_AR);
                log( 'startVideo() done..' + '\n\n' );



                // go to next video..
                await startYoutTube(ytLinks_AR, client, page);



}; // async function startYoutTube(ytLinks_AR, client, page){
