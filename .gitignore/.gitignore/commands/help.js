exports.run = (client, msg, args) => {
    const Discord = require("discord.js");

    const aide1 = ("Pour voir ma version et mes ajouts !") 
    const aide2 = ("Pour le concours de bite du nombre")
    const aide3 = ("Pour avoir le lien du site Rektim **Coming Soon** ")
    const aide4 = ("Pour voir la seconde partie des commandes")
        
        const aide = new Discord.RichEmbed()
            .setTitle("Liste des commandes informatives")
            .setColor(`#87CEEB`)
            .addField("**- /version**", `${aide1}`)
            .addField("**- /random**", `${aide2}`)
            .addField("**- /site**", `${aide3}`)
            .addField("**- /help2**", `${aide4}`)
        msg.channel.send({embed: aide});
     
}
