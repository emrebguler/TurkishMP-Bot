const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning? You Must Not Use Warn Command In DM**')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('**You Must Say The Reason**');
  if (message.mentions.users.size < 1) return message.reply('**Who I Must Ban**').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField(':red_circle: Action:', 'Warn')
  .addField(':bust_in_silhouette: User:', `${user.username}#${user.discriminator}`)
  .addField(':cop: Moderator:', `${message.author.username}#${message.author.discriminator}`)
  .addField(':question: Reason', reason);
  return message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Warn Memebers.',
  usage: 'warn [user] [reason]'
};
