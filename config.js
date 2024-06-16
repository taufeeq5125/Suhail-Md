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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_33_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDc0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgMTAwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDk0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA0LFxuICAgICAgICAxOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc1LFxuICAgICAgICA0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDM3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICA3OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0VDVndPbkgwU2p1dS9BU3NEdVByYkFoN1BMV3V5TC9Kc3JSNUZZWFhmbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NzE1MjY4MTA4ODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI5MTg1MkM4N0UwQURCNjE4N0I5NjAyRTQwNTA3RjZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODU3MzYxM1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRVXlzSEhDa1JIR1kzczBqbWhjUDRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3NTU2ZGVmLTRhNGYtNDVhMC1iZDNmLTQzY2VhYWI2N2IzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAxOCxcbiAgICAgIDQsXG4gICAgICA5OSxcbiAgICAgIDE1MCxcbiAgICAgIDEwMixcbiAgICAgIDEzMCxcbiAgICAgIDg2LFxuICAgICAgMTUsXG4gICAgICAyMTEsXG4gICAgICAyMTUsXG4gICAgICA4LFxuICAgICAgMyxcbiAgICAgIDQsXG4gICAgICAxMjcsXG4gICAgICAxODYsXG4gICAgICAxMjgsXG4gICAgICAxNTksXG4gICAgICAxMTYsXG4gICAgICAyMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzMsXG4gICAgICAxMDMsXG4gICAgICAyNyxcbiAgICAgIDI1NCxcbiAgICAgIDMyLFxuICAgICAgMyxcbiAgICAgIDE5MixcbiAgICAgIDE4NCxcbiAgICAgIDY4LFxuICAgICAgNjEsXG4gICAgICAxMzcsXG4gICAgICA4NSxcbiAgICAgIDE2MSxcbiAgICAgIDEzNixcbiAgICAgIDE5MSxcbiAgICAgIDYxLFxuICAgICAgODcsXG4gICAgICA5NCxcbiAgICAgIDE4MSxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUVkJFNUpFWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTcxNTI2ODEwODgyOjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9ueW1vdXMgSGFja2VyXCIsXG4gICAgXCJsaWRcIjogXCI3MjA5MTQ5NTg3MDYzMTozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lDbDI1c0VFS0cwdmJNR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwic0dLMnlpRXBEdE1JbzdnOW5hdjQ4cEFKVys0aWRzWWRyTGhaTmp5bnBEQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2QUI5ZDJlci90Q3Q4NFA5Zy91a1NSb01vNGVVS0MvRnZNdUovOXZJODMzem1zbldNajUzcHRWOEM4VDlFQVdLMk04UGFDT0xzQlo5Ynk2ZnVZL1VCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJSa0p6RnpZSDdQSk9PenZOOFdvOVBTOVZoWTdvaGZwVTFXUDZaNkp6SmZUNG9IVDVyTm9EYVJEbzE4QVFtb09hdmI3VWF3WWYyWDNPWHpPWkdHWTVoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NzE1MjY4MTA4ODI6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4NTczNjA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRWhnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFaGcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxWGx6S2w3VDZyb0ZKV2ZtTDF2WWtCYnpFUGlocVJuTUJFNkc1Lzk3N1dNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMzE4NjA2MDgsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODU3MzQ0MDM1NlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
