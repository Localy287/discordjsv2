const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (args[0] == null) {
        return
    }

    if (message.author.id == "331615683173548033" || message.author.id == "359835581456580618"){
        const sendEmbed = new Discord.MessageEmbed()
            .setColor("0x070707")
            .setTitle("ICBM-C4 “Cluster Bomb”")
            .setDescription(`Successfully whitelisted ${args[0]}.`)
            .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        message.channel.send(sendEmbed)

        if (client.blacklist.has(args[0])){
            client.blacklist.delete(args[0])
        }
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
  name: "whitelist",
  description: "Whitelist the user specified from using the bot."  
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
