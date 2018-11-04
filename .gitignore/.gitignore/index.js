const Discord =  require('discord.js');
const bot = new Discord.Client();

var prefix = ("/");

bot.on('ready', function() {
    bot.user.setGame("command: /help ou /help2")
    console.log("bot_ok");
});

bot.login(process.env.TOKEN);

bot.on('message' , msg => {
    
    if (msg.content === prefix + "help"){
    var aide_1_1 = ("Pour voir ma version et mes ajouts !") 
    var aide_1_2 = ("Pour obtenir ton ping")
    var aide_1_3 = ("Pour voir la seconde partie des commandes")
    var futurhelp = ("Pour les idées et ajouts futurs du bot !")
        
        var aide_1 = new Discord.RichEmbed()
            .setTitle("Liste des commandes informatives")
            .setColor(`#DB1C1C`)
            .addField("- /version", `${aide_1_1}`)
            .addField("- /ping", `${aide_1_2}`)
            .addField("- /futur", `${futurhelp}`)
            .addField("- /help2 ", `${aide_1_3}`)
        msg.channel.send({embed: aide_1});
    }      

    if (msg.content === prefix + "version"){
        var version1_1 = ("**Version 3.10**") 
        var version1_2 = ("- Suppression du système d'XP et remise à 0 de l'XP de Mee6 \n - Les valeurs de */ping* ne sont plus négatives")
        var version1_3 = ("- Commande */manon* est arrivé")
        var version1_4 = ("- Commande */manon* est remplacer par la commande */gif* qui affiche au hasard dans une banque de 3 gif maison pour l'instant *(A vous d'en proposer d'autre **A CREER** )* \n - Les commandes */futur*, *help2* et */help* ont été mise à jour \n - Ajout de note de musique a la commande */tatayoyo* \n - Le bot est un peu plus rapide")


            var version1 = new Discord.RichEmbed()
                .setTitle("NotePatch")
                .setColor(`#DB1C1C`)
                .addField("Version ZululBot", `${version1_1}`)
                .addField("Ajouts V3.0", `${version1_2}`)
                .addField("Ajouts V3.1", `${version1_3}`)
                .addField("Ajouts V3.10", `${version1_4}`)
            msg.channel.send({embed: version1});
    }
  
    if (msg.content === prefix + "test"){
        msg.channel.send("Test chat validé");
    }

    if (msg.content === prefix + "ping"){
        msg.reply("PONG !! Latence actuelle: " + `${Date.now() - msg.createdTimestamp}` + " ms");
    }
    
    if (msg.content === prefix + "futur"){
        var zbf1 = ("Une commande qui permet de mentionner entre 5 et 10 fois la personne demandée *(elle arrivera un jour ! C'est promis !)* et un système de sondage")
        var zbf2 = ("Ajout d'un système audio *Un rythm maison on va dire* ")
        var zbf3 = ("Le retour d'un système d'XP maison aboutie à 100% avec des roles et des permissions")
        var futur_fin = ("Pour le futur et le bien être du serveur !")         
            
            var futur = new Discord.RichEmbed()
                .setTitle("Liste des futurs ajouts au bot !")
                .setColor(`#DB1C1C`)
                .addField("Mise à jour ZulutBot prioritaire :", `${zbf1}`)
                .addField("Mise à jour ZulutBot secondaire :", `${zbf2}`)
                .addField("Mise à jour ZulutBot tertiaire :", `${zbf3}`)
                .addField("N'hésitez pas à donner des idées pour le bot !", `${futur_fin}`)
                msg.channel.send({embed: futur});
    }

    if (msg.content === prefix + "help2"){
        var cmd_basic = ("test là ! et tu verra !") 
        var tata_yoyo = ("spam 10 fois **TATAAAAAAAA YOYOOOOO :microphone: :musical_score: :microphone: :musical_score:** et mentionne tous le monde")
        var rdm = ("Tire au hasard une image ou une phrase dans une banque de donnée maison")

        var help2_1 = new Discord.RichEmbed()
                .setTitle("Liste des commande secondaire !")
                .setColor(`#DB1C1C`)
                .addField("- /saucisse \n- /69 \n- /gaetan \n- /love \n- /repd \n- /bafouille \n- /zorana \n- /rasoir", `${cmd_basic}`)
                .addField("- /tatayoyo:", `${tata_yoyo}`)
                .addField("- /wankul \n- /tg \n- /gif", `${rdm}`)
                .addField("**D'autres petites commandes débiles arriveront surement bientôt !**")
                msg.channel.send({embed: help2_1});
    }

    if (msg.content === prefix + "saucisse"){
        msg.channel.send("OPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !!");
    }

    if (msg.content === prefix + "69"){
        msg.channel.send("OPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\n" );
    }

    if (msg.content === prefix + "gaetan"){
        msg.channel.send("Gaétan dans environ 5-6 ans ==> https://www.youtube.com/watch?v=KZb3GUOWX8I");
    }

    if (msg.content === prefix + "love"){
        msg.channel.send("WHAT IS LOVE !? Tel est la question ! https://www.youtube.com/watch?v=dAIpjgvhKsA ");
    }
    
    if (msg.content === prefix + "repd"){
        msg.channel.send("D, la réponse D");
    }
        
    if (msg.content === prefix + "bafouille"){
        msg.channel.send("C'est votre ultime bafouille Gui ?");
    }
        
    if (msg.content === prefix + "zorana"){
        msg.channel.send("BONJOUR! Je suis le pésident à ZORANA! \nSi je suis là, c\'est parce qu'est en SPÉCIAL! ELLE A DES BUBULLES !! ");
    }

    if (msg.content === prefix + "rasoir"){
        msg.channel.send("GILLETTE !!!! THE BEST MAN CAN GET!!! :microphone: :musical_score: :microphone: :musical_score: https://www.youtube.com/watch?v=9fWxCIi5PIw");
    }

    if (msg.content === prefix + "tatayoyo"){
        for (var boucle = 0; boucle < 10; boucle++)
        msg.channel.send("@everyone TATAAAAAAAA YOYOOOOO :microphone: :musical_score: :microphone: :musical_score: ");
    }

    if (msg.content === prefix + "gif"){
        number = 3;
        var random1 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random1) {
            case 1:msg.channel.send("If Manon says yes...", {files:['https://user-images.githubusercontent.com/40717116/47956813-eee1a600-dfaa-11e8-87bd-767920df8ea7.gif']}); break;
            case 2:msg.channel.send("Moi devant les vidéos Tik Tok", {files:['https://user-images.githubusercontent.com/40717116/47963314-ca2d1300-e02a-11e8-8f71-7912ceb9f60b.gif']}); break;
            case 3:msg.channel.send("DEBOUT LA DEDANS !!", {files:['https://user-images.githubusercontent.com/40717116/47963313-ca2d1300-e02a-11e8-941c-dbd3299cfa50.gif']}); break;
        }
    }

    if (msg.content === prefix + "wankul"){
        number = 33;
        var random2 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random2) {
            case 1: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252130-44eef000-b352-11e8-98c4-caf5ac41bf63.png']}); break;
            case 2: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252131-44eef000-b352-11e8-822d-d52f7d050b6d.png']}); break;
            case 3: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252132-44eef000-b352-11e8-9b37-d38c3194606b.png']}); break;
            case 4: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252133-45878680-b352-11e8-92ff-98eaf177030a.png']}); break;
            case 5: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252134-45878680-b352-11e8-9053-3dc61afa4d5a.png']}); break;
            case 6: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252135-45878680-b352-11e8-9535-e530377ea9c3.png']}); break;
            case 7: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252136-46201d00-b352-11e8-8b89-de33d2d45a6a.png']}); break;
            case 8: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252137-46201d00-b352-11e8-948c-ae2ba8360325.png']}); break;
            case 9: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252140-46201d00-b352-11e8-8b31-f2c406530f68.png']}); break;
            case 10: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252141-46b8b380-b352-11e8-8281-49a93f19febd.png']}); break;
            case 11: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252142-46b8b380-b352-11e8-88ba-820be872817f.png']}); break;
            case 12: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252143-46b8b380-b352-11e8-85a0-28c48d49a9c1.png']}); break;
            case 13: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252144-47514a00-b352-11e8-9e5b-e799275f5498.png']}); break;
            case 14: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252146-47514a00-b352-11e8-9d07-1140e49896f5.png']}); break;
            case 15: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45265074-6d581680-b446-11e8-8502-02002d6cf353.png']}); break;
            case 16: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252382-92b92780-b355-11e8-83ad-bef815eb11f5.png']}); break;
            case 17: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252383-9351be00-b355-11e8-9c09-a1249daab68f.png']}); break;
            case 18: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252384-9351be00-b355-11e8-8b19-d2ffc821e3dd.png']}); break;
            case 19: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252385-9351be00-b355-11e8-917d-1c8e64ccabc5.png']}); break;
            case 20: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252386-9351be00-b355-11e8-810f-40ccaafdf894.png']}); break;
            case 21: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252387-9351be00-b355-11e8-8f4c-b13043dc592d.png']}); break;
            case 22: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45257512-98d7f400-b3a7-11e8-9af3-beb55de6ea1e.png']}); break;
            case 23: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45257513-99708a80-b3a7-11e8-9ae9-ea9778c42097.png']}); break;         
            case 24: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45257514-99708a80-b3a7-11e8-9d84-741a0e928d17.png']}); break;
            case 25: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45257509-98d7f400-b3a7-11e8-8785-af7e403ab933.png']}); break;
            case 26: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45257510-98d7f400-b3a7-11e8-89cc-a713c3181a77.png']}); break;
            case 27: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45257511-98d7f400-b3a7-11e8-88fc-1044f45221b2.png']}); break;
            case 28: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45265093-ab553a80-b446-11e8-9408-e037797de2b2.png']}); break;
            case 29: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45265094-ab553a80-b446-11e8-970a-dd143c2cf9b4.png']}); break; 
            case 30: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45596893-c1717680-b9c3-11e8-98e4-51ead1c92fd5.png']}); break; 
            case 31: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45596894-c20a0d00-b9c3-11e8-927c-a182f0177523.png']}); break; 
            case 32: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45596895-c2a2a380-b9c3-11e8-8a17-6086c9fcfa93.png']}); break; 
            case 33: msg.channel.send({files:['https://user-images.githubusercontent.com/40717116/45596896-c2a2a380-b9c3-11e8-9b4c-0cb1467dbf4e.png']}); break; 
        }
    }

    if (msg.content === prefix + "tg"){
        number = 23;
        var random3 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random3) {
            case 1: msg.channel.send("Va faire une sieste dans la bétonneuse"); break;
            case 2: msg.channel.send("Va prendre des vacances à fukushima"); break;
            case 3: msg.channel.send("Inspire profondément ne t'arrête surtout pas"); break;
            case 4: msg.channel.send("Peut-être que tes neurones souffrent d'un décalage horaire"); break;
            case 5: msg.channel.send("Attention la date de péremption de ton cerveau est largement dépassé"); break;
            case 6: msg.channel.send("Va te sécher les cheveux dans le micro-ondes"); break;
            case 7: msg.channel.send("Va cueillir des fleurs dans un champ de mine"); break;
            case 8: msg.channel.send("Enlève le bouton pause de ton cerveau"); break;
            case 9: msg.channel.send("Retourne prendre un bol de gravier"); break;
            case 10: msg.channel.send("Tu n'as pas télécharger la dernière mise à jour de ton cerveau"); break;
            case 11: msg.channel.send("Va te masser les tempes à la ponceuse électrique"); break;
            case 12: msg.channel.send("Va te faire un bain de bouche avec une poire à lavement"); break;
            case 13: msg.channel.send("Je crois que tout cerveau est myope"); break;
            case 14: msg.channel.send("Va te faire une tisane au ciment"); break;
            case 15: msg.channel.send("Va te mettre en mode avion"); break;
            case 16: msg.channel.send("Va te curer les dents à la perceuse"); break;
            case 17: msg.channel.send("Rebranche tes neurones"); break;
            case 18: msg.channel.send("Bande-toi les yeux et court très vite dans la forêt"); break;
            case 19: msg.channel.send("Tes parents ont peut-être confondu le lait et la lessive"); break;
            case 20: msg.channel.send("Allume un cierge et range le dans ta poche"); break;
            case 21: msg.channel.send("Va faire un pic nic sur la voie ferrée"); break;
            case 22: msg.channel.send("Va faire un câlin à l’autoroute"); break;
            case 23: msg.channel.send("Appel le service après-vente de ta perspicacité"); break;
        }
    }
});
