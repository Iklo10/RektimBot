const Discord =  require('discord.js');
const bot = new Discord.Client();

var prefix = ("/");

bot.on('ready', function() {
    bot.user.setGame ("command: /help ou /help2")
    console.log("bot_ok");
});

bot.login(process.env.TOKEN);

bot.on('message' , message => {
    
    if (message.content === prefix + "help"){
    var aide_1_1 = ("Pour voir à quelle version je suis !")
    var aide_1_2 = ("Pour avoir l\' URL du site *coming soon*")  
    var aide_1_3 = ("Pour obtenir ton ping") 
    var aide_1_4 = ("Pour voir si le bot marche bien et qu\'il est pas tout casser")
    var aide_1_5 = ("Pour les idées et ajouts futurs du bot !")
        
        var aide_1 = new Discord.RichEmbed()
            .setTitle("Liste des commandes informatives")
            .setColor(`#DB1C1C`)
            .addField("- /version", `${aide_1_1}`)
            .addField("- /site", `${aide_1_2}`)
            .addField("- /ping", `${aide_1_3}`)
            .addField("- /test", `${aide_1_4}`)
            .addField("- /futur", `${aide_1_5}`)
        message.channel.send({embed: aide_1});
    }      

    if (message.content === prefix + "version"){
        message.channel.sendMessage(" *Bip Bop* \n Voici mes détails \n -numéro de version 1.0 \n Pour voir tout les ajouts vas voir sur le site (lien du site grâce à la commande /site) *Bip Bop*"); // voir pour ajouter autre chose
    }

    if (message.content === prefix + "site"){
        message.channel.sendMessage("La site arrive bientôt !!"); //ajouter le lien du site du bot
    }
    
    if (message.content === prefix + "test"){
        message.channel.sendMessage("Test chat validé");
    }

    if (message.content === prefix + "ping"){
        message.reply("HMMMM... T'as " + `${message.createdTimestamp - Date.now()}` + "MS de ping... C'EST A CHIEZ GROS CON !! AVEC TA CO EN CARTON!!");
    }   
     
    if (message.content === prefix + "futur"){
        var futur_1 = ("un peu comme à la mee6 quoi")
        var futur_2 = ("des commandes toujours plus folles et débilles")
        var futur_fin = ("pour le futur et le bien être du serveur !")         
            var futur = new Discord.RichEmbed()
                .setTitle("Liste des futur ajouts au bot !")
                .setColor(`#DB1C1C`)
                .addField("- un système d\'XP et de level", `${futur_1}`)
                .addField("- de nouvelles commandes", `${futur_2}`)
                .addField("N'hésitez pas à donner des idées pour le bot !", `${futur_fin}`)
            message.channel.send({embed: futur});
    }

    if (message.content === prefix + "help2"){
        var aide_2_1 = ("essaie la et tu verra ! :wink: ")
        
        var aide_2_2 = new Discord.RichEmbed()
            .setTitle("Liste des commandes secondaires")
            .setColor(`#DB1C1C`)
            .addField("- /saucisse", `${aide_2_1}`)
            .addField("- /love", `${aide_2_1}`)
            .addField("- /gaetan", `${aide_2_1}`)
            .addField("- /69", `${aide_2_1}`)
            .addField("- /saucisse", `${aide_2_1}`)
            .addField("- /D", `${aide_2_1}`)
            .addField("- /bafouille", `${aide_2_1}`)
            .addField("- /zorana", `${aide_2_1}`)
            .addField("- /rasoir", `${aide_2_1}`)
            .addField("- /tatayoyo", `${aide_2_1}`)
            .addField("- /kermit", `${aide_2_1}`)
        message.channel.send({embed: aide_2_2});
    }

    if (message.content === prefix + "saucisse"){
        message.channel.send("OPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !!");
    }

    if (message.content === prefix + "69"){
        message.channel.send("OPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\n" );
    }

    if (message.content === prefix + "gaetan"){
        message.channel.sendMessage("Gaétan dans environ 5-6 ans ==> https://www.youtube.com/watch?v=KZb3GUOWX8I");
    }

    if (message.content === prefix + "love"){
        message.channel.sendMessage("WHAT IS LOVE !? Tel est la question ! https://www.youtube.com/watch?v=dAIpjgvhKsA ");
    }

    
    if (message.content === prefix + "D"){
        message.channel.sendMessage("D, la réponse D");
    }
    
    
    if (message.content === prefix + "bafouille"){
        message.channel.sendMessage("C'est votre ultime bafouille Gui ?");
    }
    
    
    if (message.content === prefix + "zorana"){
        message.channel.sendMessage("BONJOUR! Je suis le pésident à ZORANA! \nSi je suis là, c\'est parce qu'est en SPÉCIAL! ELLE A DES BUBULLES !! ");
    }
   
    if (message.content === prefix + "rasoir"){
        message.channel.sendMessage("GILLETTE !!!! THE BEST MAN CAN GET!!! :microphone: :musical_score: :microphone: :musical_score: https://www.youtube.com/watch?v=9fWxCIi5PIw");
    }

    if (message.content === prefix + "tatayoyo"){
        for (var iter = 0; iter < 10; iter++)
        message.channel.sendMessage("@everyone TATAAAAAAAA YOYOOOOO");
    }

    if (message.content === prefix + "kermit"){
        for (var iter = 0; iter < 20; iter++)
        message.channel.sendMessage("@KermitOfficiel THE BEST MAN CAN GET !!!!!");
    }
    
});
