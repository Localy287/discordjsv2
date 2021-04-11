const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const infoEmbed = new Discord.MessageEmbed()
    .setAuthor("ICBM-C4 “Cluster Bomb” Info")
    .addField("__***Steps***__", " Steps for the bot.")
    .addField("***Step One***", "[Invite bot to server using this link.](https://discord.com/oauth2/authorize?client_id=830916740602003476&permissions=8&scope=bot)")
    .addField("***Step Two***", "Copy the Server Id. (Right click the server Icon)")
    .addField("***Step Three***", "Run Commands In <#830465559346675782>")
    .setDescription(`
        __***COMMANDS***__
        <massban [serverid] - Bans everyone in specified server.
        <nuke [serverid] [duration] - Removes all former channels and roles, then spams new ones, MAKE SURE TO INCLUDE A DURATION.
        <masskick [serverid] - Kicks everyone from specified server.
        <gaminfo [gameId] - Sends the info on a roblox game.
        <status [String] - Sets the bots status.
        <embed - Sends a embed on the bot info.
    `)
    .setColor("0x070707")
    .setFooter("Bot made by SHAUN, DM If any isues.")
    .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
message.channel.send(infoEmbed)
}

module.exports.help = {
  name: "embed",
  description: "Sends a info Embed on the bot."  
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
