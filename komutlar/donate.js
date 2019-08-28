const Discord = require('discord.js')

exports.run = async (client,message,args) => {
        const embed = new Discord.RichEmbed()
                .setDescription(`Donate Link`)
                .setDescription(`Furkan Kartals ByNoGame https://www.bynogame.com/destekle/FurkanKartal`)
                .setTimestamp()
        message.channel.send({embed})
}


exports.conf = {
	enabled: true, 
	guildOnly: true, 
	aliases: ['donate'], 
	permLevel: 0,
	kategori: 'donate' 
}

exports.help = {
	komut: 'donate', 
	aciklama: 'This Is Donate Command', 
	kullanim: 'donate'
}