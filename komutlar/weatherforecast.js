const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
    if (!args[0]) {
        const embed = new Discord.RichEmbed()
            .setDescription("Write The Province!")
            .setColor("RANDOM")
        message.channel.send({embed})
        return
    }

    const konum = args.join(" ")
    message.channel.send("", {
        files: [
            `http://wttr.in/${konum}_0tqp_lang=tr.png`
        ]
    })
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['weatherforecast'],
    permLevel: 0
}

exports.help = {
    name: 'weatherforecast',
    description: 'Show Weather Forecast',
    usage: 'weatherforecast <province>'
}