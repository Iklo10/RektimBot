exports.run = (client, msg, args) => {
    const Discord = require("discord.js");

    const version1 = ("**Version 2.1**") 
    const version2 = ("Une refonte totale c'est faite ! Le bot est donc \n - plus beau ! \n - plus fort ! \n - plus rapide ! \n - plus performant ! \n - ET SURTOUT... Plus facile à lui ajouter des conneries et des fonctionnalités bien sympa ! \n **(les commandes restent les mêmes sauf pour /ping qui a été supprimer)**" )
    const version3 = ("NOUVELLES COMMANDE !! \n /menu et /man !")
    const changelog = ("** https://github.com/Iklo10/RektimBot/wiki#version-20 **")
    
        const version = new Discord.RichEmbed()
            .setColor(`#87CEEB`)
            .addField("Version RektimBot", `${version1}`)
            .addField("V2.0", `${version2}`)
            .addField("V2.1", `${version3}`)
            .addField("Pour les changelogs version par version, c'est ici :", `${changelog}`)
        msg.channel.send({embed: version});
}
