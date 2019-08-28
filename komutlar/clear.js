const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You Must Not Use This Command");
if(!args[0]) return message.channel.send("You Must Write How Many?");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`I Was Cleared ${args[0]} Message!`)
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['clear'],
  permLevel: 2
};

exports.help = {
  name: 'clear',
  description: 'Clear Messages!',
  usage: 'clear <how many>'
};
