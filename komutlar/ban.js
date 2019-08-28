const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Warning: You Must Not Use BAN Command in DM')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('You Must Write The Reason');
  if (message.mentions.users.size < 1) return message.reply('You Must Write Which Member').catch(console.error);

  if (!message.guild.member(user).bannable) return message.reply('I Must Not Ban Moderators');
  message.guild.ban(user, 2);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField(':recording: Action:', 'Ban From Server: ')
    .addField(':pencil2: Member', `${user.username}#${user.discriminator} (${user.id})`)
    .addField(':cop: Moderator', `${message.author.username}#${message.author.discriminator}`)
    .addField(':question: Reason:', reason);
  return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'Ban Members From Server',
  usage: 'ban [user] [reason]'
};