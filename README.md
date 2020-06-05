# YouTube Bulk Music Player
This Bot is based on Puppeteer and will autoplay a list of imported YouTube Links!

Works with default links (https://www.youtube.com/watch?v=GvEMP8pvxJs) or playlist links (https://www.youtube.com/watch?v=qycAC_6Bbto&list=PLazJAbbVspIhZp5nRaij_FjS7aIy7PqHF&index=2)

![alt tag](https://i.imgur.com/UOYleZU.jpg)




# Install
```   
install_module.bat/.sh
```  


You can import unsorted text from browser bookmarks files (bot will parse youtube links which ends with " or ') or directly paste YouTube links seperated with a new line at this file:
**bookmarks.txt**


# Important
- YouTube must be displayed in english because the Bot scraps text like "Video unavailable"! For default we already use **'--lang=en'**

# Features
- Randomise YouTube links for fresh music feeling each new start
- Detect duplicated YouTube links
- When video is offline(Video Private/unavailable) the link will be deleted from the bookmarks.txt file!

# Browser Extensions
- If you want you can use any Ad blocking extension like ScriptSafe or Adblock Plus to block all video ads! Extensions must be inserted at **./lib/chromeextension** and included in your **app.js** like this:

```   
'--disable-extensions-except=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0,../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0',

'--load-extension=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0',
'--load-extension=../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0',

```  
For me on windows the current path was inside of the Puppeteer folder inside of the node_modules folder thats why I went 5 folder back with ../../../../../
You may have to change this depend on your OS


# config.json
Here you can control your Bot and define some settings (**./admin/config.json**)

- **browser_profile** This will set your Browser Profile which will be used in all further sessions too! (stored at **./lib/browserProfiles**)! You can change now browser settings, change the theme or sign-in to google to view videos with age restriction

- **headless**
true or false (**Currently only works with false**)

- **windowWidth & windowHeight** Define your window width and height



## License  
MIT - Do what you ever you want with this code :) Greets CyberT33N
