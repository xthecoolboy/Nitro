const Bot = require('./struct/Bot')

const config = require('./config')

Bot().then(bot => {
    module.exports = bot
    require('./events/message')
    require('./events/messageEdit')
    require('./events/guildCreate+Delete')
    require('./events/guildMemberAdd')
    require('./events/guildMemberRemove')
    require('./events/modlog')
    require('./functions/loadCommands').load()
    require('./util')
    require('./functions/specialHelp')
    client.login(process.env.TOKEN);
}).catch(err => console.log(err));
