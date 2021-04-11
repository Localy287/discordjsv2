const { owner } = require("../config");
const fs = require("fs");
const { msg } = require("discord.js");

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

        cmd.run(client, msg, args)
    }
}
const missingPerms = (member, perms) => {
    const missingPerms = member.permissions.mossing(perms)
        .map(str => `\`${str.replace(/_/g, ' ').toLowerCase().replace(/\b(\w)/g, char => char.toUpperCase())}\``);
    return missingPerms.length > 1 ?
        `${missingPerms.slice(0, -1).join(", ")} and ${missingPerms.slice(-1)[0]}` :
        missingPerms[0];
}