const Discord = require('discord.js')

exports.run = (client, msg, args) => {
   let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('Who s Avatar Do You Want To See?')
}});
   const Discord = require('discord.js')
        const kullanicibilgimk = new Discord.RichEmbed()
        .setTitle(member.user.tag+"s Avatar Photo")
        .setImage(member.user.avatarURL)
        .setFooter("TurkishMP - Avatar System")
        return msg.channel.send(kullanicibilgimk);
    }
	
	
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'avatar',
 description: 'Show Avatars',
 usage: '/avatar [@user]'
 }