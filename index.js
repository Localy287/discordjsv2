const { token, prefix } = require("./config")
const { Client, Collection} = require("discord.js")
const client = new Client()


client.prefix = prefix;
client.commands = new Collection();
client.limits = new Map();
const commands = require("./structures/command")
commands.run(client);
const events = require("./structures/event")
events.run(client)

client.login(process.env.BOT_TOKEN);