exports.run = (client, msg, args) => {
    
    number = 23;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
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
