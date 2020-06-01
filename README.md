# YouTube Bulk Music Player
This Bot is based on Puppeteer and will autoplay a list of imported YouTube Links!

Works with default URL´s (https://www.youtube.com/watch?v=GvEMP8pvxJs) or playlist URL´s (https://www.youtube.com/watch?v=qycAC_6Bbto&list=PLazJAbbVspIhZp5nRaij_FjS7aIy7PqHF&index=2)

![alt tag](https://i.imgur.com/UOYleZU.jpg)




# Install
```   
install_module.bat/.sh
```  


You can import unsorted text from browser bookmarks files (bot will parse youtube links which ends with " or ') or directly paste YouTube URL´s seperated with a new line at this file:
**bookmarks.txt**


# Important
You must use any Ad blocking extension like ScriptSafe or Adblock Plus to block all video ads! The Bot is currently only written for this case! Extensions must be inserted at **./lib/chromeextension** and included in your **app.js** like this:

```   
'--disable-extensions-except=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0,../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0',

'--load-extension=../../../../../lib/chromeextension/webrtc_anti_leak_prevent/eiadekoaikejlgdbkbdfeijglgfdalml/1.0.14_0',
'--load-extension=../../../../../lib/chromeextension/script_safe/oiigbmnaadbkfbmpbfijlflahbdbdgdf/1.0.9.3_0',

```  

# Features
- Randomise YouTube URL´s for fresh music feeling each new start!


# config.json
Here you can control your Bot and define some settings..

- **browser_profile** This will set your Browser Profile which will be used in all further sessions too! (stored at **./lib/browserProfiles**)! You can change now browser settings, change the theme or sign-in to google view videos with age restriction
- **headless** true or false can be used (**Currently only works with false**)
- **windowWidth & windowHeight** Define your window widht and height



## License  
MIT
Do what you ever you want with this code :) Greets
