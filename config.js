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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "971526810882";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_54_06_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEyLFxuICAgICAgICA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTg3LFxuICAgICAgICA4OSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDExLFxuICAgICAgICA0NyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTI3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA0LFxuICAgICAgICA4LFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICA2MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0LFxuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODYsXG4gICAgICAgIDkxLFxuICAgICAgICAxODksXG4gICAgICAgIDM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI2Z0p5bEJVMHBORWl3VGhoWVRLSUJRUTJGNjIvcDY5YWVLc1hjdlYvQ1dBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIRXZXRXljOFEzNnFoY09NTXZ3WjdRXCIsXG4gIFwicGhvbmVJZFwiOiBcImMwODE0NjhhLWY2OWItNDNlNS1hMGEyLTNkNjlmMjllOGY1ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDAsXG4gICAgICA4MyxcbiAgICAgIDc1LFxuICAgICAgMTk1LFxuICAgICAgODEsXG4gICAgICA5MyxcbiAgICAgIDE2MSxcbiAgICAgIDExMCxcbiAgICAgIDI1MSxcbiAgICAgIDIxNyxcbiAgICAgIDI1LFxuICAgICAgMjQxLFxuICAgICAgMTAwLFxuICAgICAgMTgsXG4gICAgICAxMSxcbiAgICAgIDE5NyxcbiAgICAgIDEyOSxcbiAgICAgIDIsXG4gICAgICA1MyxcbiAgICAgIDE5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDQsXG4gICAgICA2MixcbiAgICAgIDE0NyxcbiAgICAgIDMsXG4gICAgICAyLFxuICAgICAgOTQsXG4gICAgICAxNjksXG4gICAgICAyMzIsXG4gICAgICAzMSxcbiAgICAgIDEzMSxcbiAgICAgIDI1LFxuICAgICAgMzYsXG4gICAgICAxNDIsXG4gICAgICA3LFxuICAgICAgNjEsXG4gICAgICAxOTIsXG4gICAgICAzOCxcbiAgICAgIDE5MixcbiAgICAgIDAsXG4gICAgICAxMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUllZUVJaUzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk3MTUyNjgxMDg4MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5vbnltb3VzIEhhY2tlclwiLFxuICAgIFwibGlkXCI6IFwiNzIwOTE0OTU4NzA2MzE6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJQ2wyNXNFRU9paHZiTUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInNHSzJ5aUVwRHRNSW83ZzluYXY0OHBBSlcrNGlkc1lkckxoWk5qeW5wREE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWnFkS1h3aWRIWEI4U2o3VWFBNkR6cEpZdHM1MGtqRXhjL0kzZS9SdHlOL29vdnFIQVBKWi9IckxpSitmaUx4cUl1RUp4STJYbjlhaHBLTVBWTU5xQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVklwbEtJWHREczFuWEVPeU5Eak9KTUQzNXhoQVhNbDBaWWdoc2tRMXVmNHM3RE0raWJ1ZXNwemlxSjM3d1FJQVpuSDNqZDNZVEZ5ZHovcFlwYzB6akE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTcxNTI2ODEwODgyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODU3MTI0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVoZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWhmLmpzb24iOiAie1wia2V5RGF0YVwiOlwic1ZwdXZuN04zRUJnMVRKa2trQU5DbkZpNlQvYWszU0tSdWs1Z3lta1VxZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTMxODYwNjA4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTg0OTkzNzExMjdcIn0iCn0="  // PUT your SESSION_ID 


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
