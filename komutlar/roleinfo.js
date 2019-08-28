const Discord = require("discord.js");
const superagent = require("superagent");
module.exports.run = async (client,message,args) => {
  var rol = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find("name", `${rol}`)
  var hata = new Discord.RichEmbed()
  .setColor("#36393F")
  .setDescription("❌ Please Write Role Name `Example: ?roleinfo Role`");
  if(!role) return message.channel.send(hata);
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  var roleinfoEmbed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .addField('✏ Role Name', role.name, true)
  .addField('🆔 ID', role.id, true)
  .addField('👥 Who Have Owner This Role', role.members.size, true)
  .addField('💙 Color', role.hexColor, true)
  .addField('📣 Labeling?', role.mentionable ? '\nEvet' : 'Hayır', true)
  .addField('📅 When Was Created?', moment(role.createdAt).format("LL"), true)
  .setFooter("");
  message.channel.send(roleinfoEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['roleinfo'],
  permLevel: 0
};

exports.help = {
  name: 'roleinfo',
  description: 'Say Role Informatıon',
  usage: 'rolinfo <rolename>'
};