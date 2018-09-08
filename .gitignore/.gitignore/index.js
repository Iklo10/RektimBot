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
    var aide_1_1 = ("Pour voir ma version et mes ajouts !") 
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
        var version1_1 = ("**Version 2.6**") 
        var version1_2 = ("Le système d'XP est enfin là !! *vas vite fait voir les règles quand même en tapant /rxp* \n Des améliorations arrivent du système bientôt !*pour plus d'information ==> /futur* ")
        var version1_3 = ("- Ajout de la commande /wankul qui permet de faire passer aléatoirement 15 (plus peut etre bientôt) wankil (pour l'instant crée par mMthis et Géatan) \n - Petit changement esthétique du coté de la commande */help2*")
        var version1_4 = ("- Ajout de 6 wankuls !)
        
            var version1 = new Discord.RichEmbed()
                .setTitle("NotePatch")
                .setColor(`#DB1C1C`)
                .addField("Version ZululBot", `${version1_1}`)
                .addField("Ajouts V2.0", `${version1_2}`)
                .addField("Ajouts V2.5", `${version1_3}`)
                .addField("Ajouts V2.6", `${version1_4}`)
            message.channel.send({embed: version1});
    }
  
    if (message.content === prefix + "test"){
        message.channel.send("Test chat validé");
    }

    if (message.content === prefix + "ping"){
        message.reply("PONG !! Latence actuelle: " + `${message.createdTimestamp - Date.now()}` + " ms");
    }
    
    if (message.content === prefix + "rxp"){
        var rxp1 = ("Il suffit d'écrire un message pour obtenir 1 point") 
        var rxp2 = ("Tous message considéré comme du spam ou spam sera reconnu comme triche ou anti-jeu et sera puni allant d'un rappel à un mute temporaire, un ban temporaire ou même d'une remise à zéro de son compteur d'XP!")
        var rxp3 = ("Les conteurs sont remis à zéro à version déployer !")
        
            var rxp0 = new Discord.RichEmbed()
                .setTitle("Règle du système d'XP")
                .setColor(`#DB1C1C`)
                .addField("Gagner de l'xp c'est facile ! ", `${rxp1}`)
                .addField("MAIS ATTENTION ! IL Y A UNE REGLE !", `${rxp2}`)
                .addField("Petite dernière chose:", `${rxp3}`)
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
        var aide_2_1 = ("- /saucisse \n - /love \n - /gaetan \n - /69 \n - /repd \n - /bafouille \n - /zorana \n - /rasoir \n - /tatayoyo \n - /wankul \n **De futur commandes du genre arriveront plus tard**")
                
        var aide_2_2 = new Discord.RichEmbed()
            .setTitle("Liste des commandes secondaires")
            .setColor(`#DB1C1C`)
            .addField("Voici la liste des commande secondaire ! Testent les et tu verras bien que ça donnera :wink:", `${aide_2_1}`)
        message.channel.send({embed: aide_2_2});
    }

    if (message.content === prefix + "saucisse"){
        message.channel.send("OPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !! \nOPÉRATION SAUCISSE, OPÉRATION CUISSON-SSON !!");
    }

    if (message.content === prefix + "69"){
        message.channel.send("OPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\nOPÉRATION PÉNIS, OPÉRATION FÉLATION-TION !!\n" );
    }

    if (message.content === prefix + "gaetan"){
        message.channel.send("Gaétan dans environ 5-6 ans ==> https://www.youtube.com/watch?v=KZb3GUOWX8I");
    }

    if (message.content === prefix + "love"){
        message.channel.send("WHAT IS LOVE !? Tel est la question ! https://www.youtube.com/watch?v=dAIpjgvhKsA ");
    }
    
    if (message.content === prefix + "repd"){
        message.channel.send("D, la réponse D");
    }
        
    if (message.content === prefix + "bafouille"){
        message.channel.send("C'est votre ultime bafouille Gui ?");
    }
        
    if (message.content === prefix + "zorana"){
        message.channel.send("BONJOUR! Je suis le pésident à ZORANA! \nSi je suis là, c\'est parce qu'est en SPÉCIAL! ELLE A DES BUBULLES !! ");
    }

    if (message.content === prefix + "rasoir"){
        message.channel.send("GILLETTE !!!! THE BEST MAN CAN GET!!! :microphone: :musical_score: :microphone: :musical_score: https://www.youtube.com/watch?v=9fWxCIi5PIw");
    }

    if (message.content === prefix + "tatayoyo"){
        for (var boucle = 0; boucle < 10; boucle++)
        message.channel.send("@everyone TATAAAAAAAA YOYOOOOO");
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

if (message.content === prefix + "wankul"){
        number = 15;
        var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random) {
            case 1: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252130-44eef000-b352-11e8-98c4-caf5ac41bf63.png']}); break;
            case 2: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252131-44eef000-b352-11e8-822d-d52f7d050b6d.png']}); break;
            case 3: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252132-44eef000-b352-11e8-9b37-d38c3194606b.png']}); break;
            case 4: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252133-45878680-b352-11e8-92ff-98eaf177030a.png']}); break;
            case 5: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252134-45878680-b352-11e8-9053-3dc61afa4d5a.png']}); break;
            case 6: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252135-45878680-b352-11e8-9535-e530377ea9c3.png']}); break;
            case 7: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252136-46201d00-b352-11e8-8b89-de33d2d45a6a.png']}); break;
            case 8: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252137-46201d00-b352-11e8-948c-ae2ba8360325.png']}); break;
            case 9: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252140-46201d00-b352-11e8-8b31-f2c406530f68.png']}); break;
            case 10: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252141-46b8b380-b352-11e8-8281-49a93f19febd.png']}); break;
            case 11: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252142-46b8b380-b352-11e8-88ba-820be872817f.png']}); break;
            case 12: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252143-46b8b380-b352-11e8-85a0-28c48d49a9c1.png']}); break;
            case 13: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252144-47514a00-b352-11e8-9e5b-e799275f5498.png']}); break;
            case 14: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252146-47514a00-b352-11e8-9d07-1140e49896f5.png']}); break;
            case 15: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252147-47514a00-b352-11e8-8b54-1bcad5b1eaa4.png']}); break;
            case 16: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252382-92b92780-b355-11e8-83ad-bef815eb11f5.png']}); break;
            case 17: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252383-9351be00-b355-11e8-9c09-a1249daab68f.png']}); break;
            case 18: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252384-9351be00-b355-11e8-8b19-d2ffc821e3dd.png']}); break;
            case 19: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252385-9351be00-b355-11e8-917d-1c8e64ccabc5.png']}); break;
            case 20: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252386-9351be00-b355-11e8-810f-40ccaafdf894.png']}); break;
            case 21: message.channel.send({files:['https://user-images.githubusercontent.com/40717116/45252387-9351be00-b355-11e8-8f4c-b13043dc592d.png']}); break;
        }
    }
    
});
