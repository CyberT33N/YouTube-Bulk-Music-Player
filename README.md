# YouTube Bulk Music Player
This Bot will parse YouTube links from unformarted text, generate a internal playlist and then autoplay each link until all videos was played!

Works with default links or playlist links:
- https://www.youtube.com/watch?v=muNKZK5aSNQ
- https://www.youtube.com/watch?v=qycAC_6Bbto&list=PLazJAbbVspIhZp5nRaij_FjS7aIy7PqHF&index=2



<br />
<br />

____________________________________________________________

<br />
<br />

Database: **False**<br />
Webdriver: **Puppeteer**<br />
Sign-in required: **Not required only if your videos are age restricted**<br />
Language: **EN**<br />
Bot Protection:
- **Google Captcha (if VPN user but comes very rar)**
- **Headless or minimised not working because it´s premium feature for autoplay**



<br />
<br />
<br />
<br />

____________________________________________________________


<br />
<br />


# Install
You can import browser bookmarks files or other unsorted text (bot will parse youtube links which ends with " or ') or directly paste YouTube links seperated with a new line at this file:
**bookmarks.txt**


<br />
<br />

 _____________________________________________________


<br />
<br />



# *Important*
- YouTube must be displayed in english because the Bot scraps text like "Video unavailable"! For default we already use **'--lang=en'**

# *Features*
- **Randomise YouTube links for fresh music feeling each new start**
- **Detect Google Captcha and wait until its solved by user**
- **Detect duplicated YouTube links**
- **When video is offline(Video Private/unavailable/..) the link will be deleted from the bookmarks.txt file!**
- **After very long play time without interaction with the browser window youtube will pause the video. In this case the bot will detect it and click play again**
- **Detect Video ADS and skip them**


<br />
<br />

 _____________________________________________________


<br />
<br />


# config.json
Here you can control your Bot and define some settings (**./admin/config.json**)

- **browser_profile** This will set your Browser Profile which will be used in all further sessions too! (stored at **./lib/browserProfiles**)! You can change now browser settings, change the theme or sign-in to google to view videos with age restriction

- **headless**
true or false (**Currently only works with false**)

- **windowWidth & windowHeight** Define your window width and height



<br />
<br />

If you want you can use browser extensions (as example for block ads). In order to use them you must download the extensions and include the files at this folder:
- ./lib/chromeextension


<br />
<br />

Then in your config.json file you add these lines:

```javascript
"extensionlist": {
   "extension1": "webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0",
   "extension2": "script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0",
   "extension3": "modheader/idgpnmonknjnojddfkpgkljpfnnfcklj/3.0.7_0"
}
```

You can add as much extension as you want. However use always unique names like **extension1**, **extension2**, ..

If you want to disable extensions you use:
```javascript
"extensionlist": ""
```

<br />
<br />

 _____________________________________________________


<br />
<br />


## License  
MIT - Do what you ever you want with this code :) Greets CyberT33N
