const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (args[0] == null){
      return;
    }
    const returnEmbed = new Discord.MessageEmbed()
    .setColor("0x070707")
    .setTitle("ICBM-C4 “Cluster Bomb”")
    .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
    .setDescription("Hello, user this is a automated dm from ICBM-C4 “Cluster Bomb”")
    client.users.cache.get(`args[0]`).send(returnEmbed)
}

module.exports.help = {
  name: "dm",
  description: "DM A user using the BOT."  
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
