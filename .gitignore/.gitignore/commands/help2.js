exports.run = (client, msg, args) => {
    const Discord =  require("discord.js");

    const cmd_basic = ("Test la ! Et tu verra !") 
    const tata_yoyo = ("Spam 5 fois la commande liée et mentionne tous le monde")
    const rdm = ("Tire au hasard une image ou une phrase dans une banque de données maison")
    const help2_fin = ("**Enjoy**")
    const diy = ("Crée tes propres réponses avec le modèle de la commande")

    const help2 = new Discord.RichEmbed()
        .setTitle("Liste des commande secondaire !")
        .setColor(`#87CEEB`)
        .addField("**- /fortnite \n- /saucisse \n- /gaetan \n- /love \n- /repd \n- /bafouille \n- /zorana**", `${cmd_basic}`)
        .addField("**- /tatayoyo**", `${tata_yoyo}`)
        .addField("**- /wankul \n- /tg \n- /menu**", `${rdm}`)
        .addField("**- /man**", `${diy}`)
        .addField("**D'autres petites commandes débiles arriveront sûrement bientôt !**", `${help2_fin}`)
    msg.channel.send({embed: help2});
}
