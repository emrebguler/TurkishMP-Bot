const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");


exports.run = (client, message) => {
    const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
	const istatistikozel = new Discord.RichEmbed()
    .setColor(0x36393F)
.setDescription("TurksihMP Bot Informatıon")
  .addField(`⇒ Owner:`, `<364730924853755906>`, true)
	.addField("⇒ RAM Use:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
  .addField("⇒ Server Number:", `${client.guilds.size.toLocaleString()}`, true)
  .addField("⇒ All Member Number:", `${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("⇒ Channel Number:", `${client.channels.size.toLocaleString()}`, true)
  .addField(`⇒ How Long Has It Been Active:`, `${duration}`, true)
  .addField("⇒ Ping:", `${client.ping}`, true)
  .addField("⇒ Discord.js Release:", `${Discord.version}`, true)
  message.channel.sendEmbed(istatistikozel)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['botinfo'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'info',
  description: 'Give Bot Informatıon',
  usage: 'info'
};