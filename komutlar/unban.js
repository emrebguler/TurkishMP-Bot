const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning! You Must Not Use Ban Command In DM!** ')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  client.unbanReason = reason;
  client.unbanAuth = message.author;
  let user = args[0];
  if (reason.length < 1) return message.reply('**You Must **');
  if (!user) return message.reply('**Banı kaldırılacak kişinin** **__ID__** **numarasını yazmalısın.**').catch(console.error);
  message.guild.unban(user);

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField(':red_circle: Action:', 'Un Ban')
    .addField(':bust_in_silhouette: User:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField(':cop: Moderator:', `${message.author.username}#${message.author.discriminator}`)
    .addField(':question: Reason', reason);
  return message.channels.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'unban',
  description: 'Un Ban Member',
  usage: 'unban [user] [reason]'
};
