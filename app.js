

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





        // start browser and get page & client..
        const botEngine_AR = await controller.startBROWSER();
        log( 'startBROWSER() done..' );

        if(!botEngine_AR){
           log( 'Something went wrong we cant find botEngine_AR' );
           return;
        }

        const client = botEngine_AR.client;
        const page = botEngine_AR.page;





        // start the main youtube bot..
        await controller.startYoutTube(ytLinks_AR, client, page);
        log( 'startYoutTube() done..' );




})().catch((e) => {  log('ASYNC - MAIN - error :' + e )  });
