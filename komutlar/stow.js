const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("True Use: ?stow @user time");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("I Must Not Stow Moderators");
let muterole = message.guild.roles.find(r => r.name === "Muzzled");

  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("True Use: ?stow @user Time");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> stowed! ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> s Mute Is Finished`);
  }, ms(mutetime));



}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['geçici-sustur', 'gsustur'],
  permLevel: 2
};

exports.help = {
  name: 'sustur',
  description: 'Sureli Susturur.',
  usage: 'sustur [Kullanıcı] [Süre]'
};