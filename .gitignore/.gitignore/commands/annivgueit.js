exports.run = (client, msg, args) => {
    const Discord = require("discord.js");

    const blanc = ("**-/anus\n -/youpi\n -/etmerde\n -/lesexe\n -/meurtre\n -/fortnite2\n -/tortueninja\n -/ninjaaa\n -/plaisir\n -/judo\n -/ptn\n -/cc\n -/yo\n -/roulade\n -/urss\n -/dance**")
        
        const aide = new Discord.RichEmbed()
            .setColor(`#87CEEB`)
            .addField("**Toutes les commandes liés à l'anniversaire de Gaétan**", `${blanc}`)
        msg.channel.send({embed: aide});
     
}
