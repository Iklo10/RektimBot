const Discord =  require('discord.js');
const bot = new Discord.Client();
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('database.json');
const db = low(adapter);

db.defaults({ histoires: [], xp: [] }).write()

var prefix = ("/");
var prefix2 = ("@");

bot.on('ready', function() {
    bot.user.setGame ("command: /help ou /help2")
    console.log("bot_ok");
});

bot.login(process.env.TOKEN);

bot.on('message' , message => {
    
    if (message.content === prefix + "help"){
    var aide_1_1 = ("Pour voir à quelle version je suis !") 
    var aide_1_2 = ("Pour obtenir ton ping") 
    var aide_1_3 = ("Pour voir si le bot marche bien et qu\'il est pas tout casser")
    var aide_1_4 = ("Pour voir les règles du système d'XP")
    var aide_1_5 = ("Pour voir le tableau d'XP")
    var aide_1_6 = ("Pour les idées et ajouts futurs du bot !")
        
        var aide_1 = new Discord.RichEmbed()
            .setTitle("Liste des commandes informatives")
            .setColor(`#DB1C1C`)
            .addField("- /version", `${aide_1_1}`)
            .addField("- /ping", `${aide_1_2}`)
            .addField("- /test", `${aide_1_3}`)
            .addField("- /rxp", `${aide_1_4}`)
            .addField("- /xp", `${aide_1_5}`)
            .addField("- /futur", `${aide_1_6}`)
        message.channel.send({embed: aide_1});
    }      

    if (message.content === prefix + "version"){
        var version1_1 = ("**Version 2.0**") 
        var version1_2 = ("Le système d'XP est enfin là !! *vas vite fait voir les règles quand même en tapant /rxp* \n Des améliorations arrivent du système bientôt !*pour plus d'information ==> /futur* ")
            
            var version1 = new Discord.RichEmbed()
                .setTitle("NotePatch")
                .setColor(`#DB1C1C`)
                .addField("Version ZululBot", `${version1_1}`)
                .addField("Ajouts V2.0", `${version1_2}`)
            message.channel.send({embed: version1});
    }
  
    if (message.content === prefix + "test"){
        message.channel.sendMessage("Test chat validé");
    }

    if (message.content === prefix + "ping"){
        message.reply("PONG !! Latence actuelle: " + `${message.createdTimestamp - Date.now()}` + " ms");
    }
    
    if (message.content === prefix + "rxp"){
        var rxp1 = ("Il suffit d'écrire un message pour obtenir 1 point") 
        var rxp2 = ("Tous message considéré comme du spam ou spam sera reconnu comme triche ou anti-jeu et sera puni allant d'un rappel à un mute temporaire, un ban temporaire ou même d'une remise à zéro de son compteur d'XP!")
            
            var rxp0 = new Discord.RichEmbed()
                .setTitle("Règle du système d'XP")
                .setColor(`#DB1C1C`)
                .addField("Gagner de l'xp c'est facile ! ", `${rxp1}`)
                .addField("MAIS ATTENTION ! IL Y A UNE REGLE !", `${rxp2}`)
            message.channel.send({embed: rxp0});
    }
     
    if (message.content === prefix + "futur"){
        var zbv3 = ("Amélioration du système d'xp avec des levels et des rôles ainsi qu'un cooldown pour éviter tout problème de spam ")
        var zbv4 = ("Une commande toute simple qui permet de mentionner entre 5 et 10 fois la personne demandée")
        var zbv5 = ("Ajout d'un système audio *Un rythm maison on va dire* ")
        var futur_fin = ("Pour le futur et le bien être du serveur !")         
            
            var futur = new Discord.RichEmbed()
                .setTitle("Liste des futur ajouts au bot !")
                .setColor(`#DB1C1C`)
                .addField("Mise à jour ZulutBot V3.0 :", `${zbv3}`)
                .addField("Mise à jour ZulutBot V4.0 :", `${zbv4}`)
                .addField("Mise à jour ZulutBot V5.0 :", `${zbv5}`)
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
            .addField("- /repd", `${aide_2_1}`)
            .addField("- /bafouille", `${aide_2_1}`)
            .addField("- /zorana", `${aide_2_1}`)
            .addField("- /rasoir", `${aide_2_1}`)
            .addField("- /tatayoyo", `${aide_2_1}`)
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
    
    if (message.content === prefix + "repd"){
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
        for (var boucle = 0; boucle < 10; boucle++)
        message.channel.sendMessage("@everyone TATAAAAAAAA YOYOOOOO");
    }

    var perso = message.author.username;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: perso}).value()){
        db.get("xp").push({user: perso,xp: 1}).write();
        
    }else{
        var userxpdb = db.get("xp").filter({user: perso}).find('xp').value();
        console.log(userxpdb)
        var userxp = Object.values(userxpdb)
        db.get("xp").find({user: perso}).assign({user: perso, xp: userxp[1] +=1}).write();

    if (message.content === prefix + "xp"){
        var xp = db.get("xp").filter({user: perso}).find('xp').value()
        var xpfinal = Object.values(xp);
        var xp_embed = new Discord.RichEmbed()
            .setTitle(`Stat des XP de ${message.author.username}`)
            .setColor(`#F4D03F`)
            .addField("Niveau")
            .addField("XP total:", `${xpfinal[1]} points d'expériences`)
        message.channel.send({embed: xp_embed});
    }} 
});
