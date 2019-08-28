const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('**' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ping'],
  permLevel: 0
};

exports.help = 
{
  name: 'ping',
  description: 'Show Bot s Ping',
  usage: 'ping'
};