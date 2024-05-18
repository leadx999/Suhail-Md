const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233508849717";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  ""  // PUT your SESSION_ID SUHAIL_23_09_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDc3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MyxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTkzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjA5LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICA0NyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MixcbiAgICAgICAgMjIwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODQsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICA5MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDczLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODMsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5LFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdkTWVMMGdoOHVDc3JVUzVEVXp0RlBJQk84SGVlcFZjYjkyWnplSUJxdms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQ0bGh3Um5RU3pLWDJEWFctYXljOWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2UxMTdkNmUtMWJkNC00NDVmLWEwNGQtNTU0ZDUzYjM4MjAzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MSxcbiAgICAgIDY1LFxuICAgICAgMjM5LFxuICAgICAgMjUyLFxuICAgICAgMTc4LFxuICAgICAgNDcsXG4gICAgICA3LFxuICAgICAgMjM5LFxuICAgICAgMTQxLFxuICAgICAgMTY3LFxuICAgICAgMTcsXG4gICAgICA4MSxcbiAgICAgIDEyNCxcbiAgICAgIDg1LFxuICAgICAgMjAzLFxuICAgICAgMjI5LFxuICAgICAgNyxcbiAgICAgIDEyNCxcbiAgICAgIDIzMixcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMTMxLFxuICAgICAgOTAsXG4gICAgICAzLFxuICAgICAgMjAzLFxuICAgICAgODAsXG4gICAgICAyMjcsXG4gICAgICAxOTQsXG4gICAgICAxNjcsXG4gICAgICAxMDQsXG4gICAgICAyMixcbiAgICAgIDIzNyxcbiAgICAgIDIyNixcbiAgICAgIDIwOCxcbiAgICAgIDE3MSxcbiAgICAgIDEzNCxcbiAgICAgIDI5LFxuICAgICAgNzYsXG4gICAgICAxNjMsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLclI1Y0FERUkvcXBMSUdHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIktERU4yQjZ3akdvbEpQcFdHdzVVdFBPS1hxYm5rQmpwR0ZKQVJ5WGQ2aHM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSUF5N0tpRWtteWFzSXBBMkpTQ3JyTkJYVU50Wm43TXNTTlJxNk42Sy9HK1dhTEdQbk5ocU9EOGZlWEtEdHROSXdNWlVuK01XN2ZIZnhzZDFncDBHQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXRSVnZSbmpKcVhhQWlGYks4TW13L0xleEdaTFpGTUhKTWNFSjM2ZTE2TStmdjZwd25weUgrOXU3aEIxdC81RlFKUkEyNXVVRXhRNUpjZ2lTalFjRHc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzM1MDg4NDk3MTc6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1NTk4ODk5MzEyMjQxMDoxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJMRUFEICAgICAgWCDwn5G+XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MDg4NDk3MTc6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTYwNzM3NDhcbn0iCn0=


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
