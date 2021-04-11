const Discord = require("discord.js");
const fetch = require('node-fetch');
module.exports.run = async (client, message, args) => {
  fetch(`https://www.roblox.com/places/api-get-details?assetId=${args.toString()}`)
    .then(res => res.json())
    .then(json => {
      const returnEmbed = new Discord.MessageEmbed()
      .setAuthor(`ICBM-C4 “Cluster Bomb” - ${json.Name} Stats`)
      .addField("Players: ", json.OnlineCount)
      .addField("UniverseRootPlaceId: ", json.UniverseRootPlaceId)
      .addField("Created: ", json.Created)
      .addField("Updated: ", json.Updated)
      .setDescription(json.Description)
      message.channel.send(returnEmbed)
    });
}

module.exports.help = {
  name: "gameinfo",
  description: "Returns the game info of specified ID."  
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