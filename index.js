const { prefix } = require("./config")
const { Client, Collection } = require("discord.js")
const client = new Client()


client.prefix = prefix;
client.commands = new Collection();
client.limits = new Map();
client.blacklist = new Map();
client.server_blacklist = new Map();
client.bypass_user = new Map();


const commands = require("./structures/command")
const events = require("./structures/event")

commands.run(client);
events.run(client);

client.login(process.env.BOT_TOKEN);
