const Discord =  require('discord.js');
const bot = new Discord.Client();

var prefix = ("/");

bot.on('ready', function() {
    bot.user.setGame ("command: /help ou /help2")
    console.log("bot_ok");
});

bot.login("NDYxNjE3NTM1MjA5NDM5MjMz.DhjluA.d5U6FLOkpn_X_ct2AQC1dxNM4uk");

bot.on('message' , message => {
    
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes du serveur informative \n - /bot: pour voir les détails \n - /site: Le lien du site du bot pour voir les modifs et les commandes *coming soon*\n - /ping: pour ton ping... c'est dans le nom de la commande...\n - /test: pour voir si le bot marche bien et qu'il est pas tout casser");
        console.log("help effectué")
    }

    if (message.content === prefix + "bot"){
        message.channel.sendMessage(" *Bip Bop* \n Voici mes détails \n -numéro de version 1.0 \n *Bip Bop*"); // voir pour ajouter autre chose
        console.log("bot effectué")
    }

    if (message.content === prefix + "site"){
        message.channel.sendMessage("La site arrive bientot"); //ajouter la lien du site du bot
        console.log("site effectué")
    }
    
    if (message.content === prefix + "test"){
        message.channel.sendMessage("Test chat validé");
        console.log("Test effectué")
    }

    if (message.content === prefix + "ping"){
        message.reply("HMMMM... T'as " + `${message.createdTimestamp - Date.now()}` + "MS de ping... C'EST A CHIEZ GROS CON !! AVEC TA CO EN CARTON!!");
        console.log("ping effectué")
    }    

    if (message.content === prefix + "help2"){
        var aide_2 = ("essaie la et tu verra ! :wink: ")
        
        var aide_1 = new Discord.RichEmbed()
            .setTitle("Liste des commandes secondaires")
            .setColor(`#DB1C1C`)
            .addField("- /saucisse", `${aide_2}`)
            .addField("- /love", `${aide_2}`)
            .addField("- /gaetan", `${aide_2}`)
            .addField("- /69", `${aide_2}`)
            .addField("- /saucisse", `${aide_2}`)
        message.channel.send({embed: aide_1});
    }

    if (message.content === prefix + "saucisse"){
        message.channel.send("OPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !!");
        console.log("saucisse effectué")
    }

    if (message.content === prefix + "69"){
        message.channel.send("OPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\n" );
        console.log("69 effectué")
    }

    if (message.content === prefix + "gaetan"){
        message.channel.sendMessage("Gaétan dans environ 5-6 ans ==> https://www.youtube.com/watch?v=KZb3GUOWX8I");
        console.log("gaetan effectué")
    }

    if (message.content === prefix + "love"){
        message.channel.sendMessage("WHAT IS LOVE !? Tel est la question ! https://www.youtube.com/watch?v=dAIpjgvhKsA ");
        console.log("WiL effectué")
    }

});
