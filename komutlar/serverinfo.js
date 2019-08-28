const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Warning! You Must Not Use serverinfo Command In DM')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField(':pencil2: Server Name', message.guild.name)
    .addField(':id: Server ID:', message.guild.id)
    .addField(':beginner: Main Channel:', message.guild.defaultChannel)
    .addField(':globe_with_meridians: Region:', message.guild.region)
    .addField(':dolls: Members:', message.guild.memberCount)
    .addField(':gear: Owner:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField(':satellite: Channel Number:', message.guild.channels.size)
    .addField(':calendar_spiral: When Was It Created?:', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['serverinfo'],
  permLevel: 0
};

exports.help = {
  name: 'serverinfo',
  description: 'Say Server About Something',
  usage: 'serverinfo'
};
   