const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_01_40_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDE3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTM3LFxuICAgICAgICA1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDExLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzksXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA5MixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTM5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI1LFxuICAgICAgICAyOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA5NCxcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDc4LFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgODEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNE1lMzVEeGRHNXVTdmNaemZDRS9NTnUvOHBBUGtUVHlqYzR2YURPS0JlQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM2YxRmdEdnlSa1dSanVvWFVvVEFNUVwiLFxuICBcInBob25lSWRcIjogXCJkZThjMjMyNC0yN2E4LTQ5MDItOTM4Yi1kNzdhN2Q3YzdlMzNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAyMTYsXG4gICAgICAyMDgsXG4gICAgICA1LFxuICAgICAgOTQsXG4gICAgICAyNTEsXG4gICAgICA1NyxcbiAgICAgIDE0OSxcbiAgICAgIDEwLFxuICAgICAgMTM5LFxuICAgICAgMjQwLFxuICAgICAgMTYxLFxuICAgICAgMTIyLFxuICAgICAgMjE0LFxuICAgICAgMTY4LFxuICAgICAgMjQ4LFxuICAgICAgMTk0LFxuICAgICAgNzQsXG4gICAgICAxMixcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ0LFxuICAgICAgMjI1LFxuICAgICAgMjIxLFxuICAgICAgMTc5LFxuICAgICAgMTA2LFxuICAgICAgMTI2LFxuICAgICAgOTksXG4gICAgICAxNCxcbiAgICAgIDQwLFxuICAgICAgMTYyLFxuICAgICAgOTEsXG4gICAgICAxODksXG4gICAgICAxMTAsXG4gICAgICAxMjMsXG4gICAgICAyMDQsXG4gICAgICAyNDIsXG4gICAgICA1MixcbiAgICAgIDEwMSxcbiAgICAgIDExMCxcbiAgICAgIDE3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUMUhZRlg5SFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxNDg5OTA0NzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkpvcHBhXCIsXG4gICAgXCJsaWRcIjogXCI4Mjc5MDMwOTcwNzk1NzozNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKSHpqTDhERUozY25ic0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImVCdGp0KzVqdUZpay9xdEt6bU50aHJOQ2FhUzdSM0I4d0xSeXh0T1RmVE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRVV5Uk41Yi81YkJ4dXpvM2VMWVNOVjk5VXorVjRDL2FqOG5uVTZuanZXaXdDRGpIdUFMcVp1Zlhrc0JZY3owSDhhdjdaZDNsYzlzUS9icUtkcm9tRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwic010ZXdMMko0T213Uncva3NWTWtTdW5VNVlnTFR6MGgvZnFYemNrcHFQQ2pMRkF1a0VEZDJTMkFLWXUxT1UySDdJQTNpbVkvTGV2R2ExK3RDSUdPalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxNDg5OTA0NzozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDgzMTY1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZaSVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlpJLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQTdicGRRaXNEcTEvbGttdFJpWW1zNzArOFdac0JSalZ4cGlCcTNDV2c0cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5Mzc2MzgyODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
