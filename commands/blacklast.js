const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (args[0] == null) {
        return
    }

    if (message.author.id == "331615683173548033" || message.author.id == "359835581456580618"){
        const sendEmbed = new Discord.MessageEmbed()
            .setColor("0x070707")
            .setTitle("ICBM-C4 “Cluster Bomb”")
            .setDescription(`Successfully blacklisted ${args[0]}.`)
            .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        message.channel.send(sendEmbed)

        client.blacklist.set(args[0], true)
    }
    else{
        const sendEmbed = new Discord.MessageEmbed()
            .setColor("0x070707")
            .setTitle("ICBM-C4 “Cluster Bomb”")
            .setDescription(`You do not meet the requirements too whitelist/blacklist ${args[0]}.`)
            .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        message.channel.send(sendEmbed)
    }
}

module.exports.help = {
  name: "blacklist",
  description: "Blacklist the user specified from using the bot."  
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
