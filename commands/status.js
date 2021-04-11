const Discord = require("discord.js");
const fetch = require('node-fetch');

function replaceString(fstring) {
  const search = `,`  
  const replacer = new RegExp(search, 'g')

  const string = fstring

  return string.replace(replacer, ' ')  
}

module.exports.run = async (client, message, args) => {
    const returnEmbed = new Discord.MessageEmbed()
  .setAuthor("ICBM-C4 “Cluster Bomb”")
  .setDescription(`Set your status to: \"${replaceString(args.toString())}\"`)
  message.channel.send(returnEmbed)
    client.user.setActivity(replaceString(args.toString()))
        .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
}

module.exports.help = {
  name: "status",
  description: "Sets the status of the USER/BOT."  
}

module.exports.requirements = {
    userPerms: [],
    clientPerms: [],
    ownerOnly: false
}

module.exports.limits = {
    rateLimit: 2,
    cooldown: 1e4
}