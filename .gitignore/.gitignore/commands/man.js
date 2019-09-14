exports.run = (client, msg, args) => {
    const Discord = require("discord.js")
    
    if (!args[0]) return msg.channel.send("Pour utiliser la commande: /man + le nom de superhéros que tu veux te donner");

    msg.reply("tu es vraiment " + `${args.join('')}` + "man !!"); 
}
