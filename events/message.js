const { owner } = require("../config");
const fs = require("fs");
const { msg, MessageEmbed } = require("discord.js");

module.exports =  async (client, msg) => {
    if (msg.author.bot) return;
    const args = msg.content.split(/ +/g)
    const command = args.shift().slice(client.prefix.length).toLowerCase();
    const cmd = client.commands.get(command);

    if (!msg.content.toLowerCase().startsWith(client.prefix)) return;

    if (!cmd) return;

    if (cmd.limits) {
        const current = client.limits.get(`${command}-${msg.author.id}`);

        if (!current) client.limits.set(`${command}-${msg.author.id}`, 1);
        else {
            if (current >= cmd.limits.rateLimit) return;
            client.limits.set(`${command}-${msg.author.id}`, current + 1)
        }
        
        setTimeout(() => {
            client.limits.delete(`${command}-${msg.author.id}`);
        }, cmd.limits.cooldown);
        
        if (client.blacklist.get(msg.author.id) == true){
            const sendEmbed = new MessageEmbed()
                .setColor("0x070707")
                .setTitle("ICBM-C4 “Cluster Bomb”")
                .setDescription(`Cannot run commands, ${msg.author.username} is blacklisted from the bot message SHAUN or Prinz to be unblacklisted.`)
                .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
            msg.channel.send(sendEmbed)
            return
        }
        else{
            if (client.server_blacklist.get(args[0]) == true){
                if (client.bypass_user.get(msg.author.id) == true){
                    cmd.run(client, msg, args)
                }
                else{
                    const sendEmbed = new MessageEmbed()
                    .setColor("0x070707")
                    .setTitle("ICBM-C4 “Cluster Bomb”")
                    .setDescription(`Cannot send attacks to ${args[0]}, ${msg.author.username}.`)
                    .setThumbnail("https://cdn.discordapp.com/attachments/828768110658977872/829892969443622963/mmm.png")
                msg.channel.send(sendEmbed)
                return
                }
            }
            cmd.run(client, msg, args)
        }
    }
}
