# YouTube Bulk Music Player
This Bot will parse YouTube links from unformatted text, generate a internal playlist and then autoplay each video!
- **This project is still working (checked 2024) but at the moment it is not maintained and bad written. Maybe it will get refactored in the future :)**

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


![alt tag](https://i.imgur.com/2FXctBZ.jpg)


<br />
<br />

____________________________________________________________


<br />
<br />


# Install
Insert your YouTube links here:
- **bookmarks.txt**
<br />
<br />
You can import browser bookmarks files text or other unformatted  text but make sure that the YouTube links end with " or '
<br />
<br />
Alternative you can directly paste YouTube links separated with a new line.


<br />
<br />

Then run:
```javascript
npm install
```

<br />
<br />

 _____________________________________________________


<br />
<br />



# *Important*
- YouTube must be displayed in english because the Bot scraps text like "Video unavailable"! For default we already use **'--lang=en'**

# *Features*
- **Detect Google Captcha and wait until its solved by user**
<br /><br />
- **Randomise YouTube links for fresh music feeling each new start**
- **Detect duplicated YouTube links**
- **When video is offline(Video Private/unavailable/..) the link will be deleted from the bookmarks.txt file!**
- **After very long play time without interaction YouTube will pause the video.. In this case the bot will detect it and click play again**
<br /><br />
- **Detect Video ADS and skip them (Also detect double Video ADS and Video ADS inside of long videos)**
<br /><br />
- **Detect "Accept Terms" Modal Box and auto accept it (This box was added 2020)**
- **Detect "Please sign-in" Modal Box and click on "No thanks"  (This box was added 2020)**
<br /><br />
- **Scrap Video Details (Views, Likes, ..) and display in Terminal.**

<br />
<br />

 _____________________________________________________


<br />
<br />


# config.json
Here you can control your Bot and define some settings (**./admin/config.json**)

- **browser_profile** - This will set your Browser Profile which will be used in all further sessions too! (stored at **./lib/browserProfiles**)! You can change now browser settings, change the theme or sign-in to google to view videos with age restriction

- **headless** - true or false (**Currently only works with false**)

- **windowWidth & windowHeight** - Define your window width and height



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
MIT - Do whatever you want with this project! :) Greets CyberT33N
