const client = require("../index");
const config = require('../config.json')
const prefix = config.prefix


client.on('ready', () => {
  client.user.setActivity(`${prefix}help`)
  console.log(`${client.user.username} is Ready ✅`)
})