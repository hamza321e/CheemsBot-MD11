//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: HAMZA" //ur yt chanel name
global.socialm = "GitHub: salmanytofficial" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'HAMZA Bot MD V11' //ur bot name
global.ownernumber = '923417680053,9232014149,' //ur owner number
global.ownername = '🦄드림 가이 Xeon' //ur owner name
global.websitex = "https://hamzacoding.online"
global.wagc = "https://chat.whatsapp.com/G0RAGHE329OBUE0pfoeZNV"
global.themeemoji = '🪀'
global.wm = "HAMZA Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "HAMZA"
global.author = "🦄드림 가이 HAMZA\n\n+923417680053"
global.creator = "923417680053@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["923417680053"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '9' //set autoblock country code
global.antiforeignnumber = '9' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall =  //falsebot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
