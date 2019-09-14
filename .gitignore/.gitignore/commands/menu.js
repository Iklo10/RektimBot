exports.run = (client, msg, args) => {
    const Discord =  require("discord.js");

    number = 5;
    var entréerdm = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (entréerdm) {
        case 1: var entrée = "Un gaspacho de fourmis"; break;
        case 2: var entrée = "Un tartare de limaces"; break;
        case 3: var entrée = "Des écrous en vinaigrette"; break;
        case 4: var entrée = "Une salade de batraciens crus"; break;
        case 5: var entrée = "Jean-Marie Le Pen sur son lit de sel"; break;
        case 6: var entrée = "Notre quiche Lorraine made in China"; break;
        case 7: var entrée = "Du plastique"; break;
        case 8: var entrée = "Un émincé d'autruche"; break; 
        case 9: var entrée = "De la salade noire"; break;        
    }   

    number = 5;
    var platrdm = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (platrdm) {
        case 1: var plat = "Une entrecôte vegan"; break;
        case 2: var plat = "La Pizza du Débat"; break;
        case 3: var plat = "Un veau entier pour deux personnes"; break;
        case 4: var plat = "Du cochon hallal"; break;
        case 5: var plat = "Un salade de dauphin"; break;     
        case 6: var plat = "Une vingtaine de scorpions vivants"; break;    
        case 7: var plat = "Du sel à l'orange"; break; 
        case 8: var plat = "Une oreille d'éléphant"; break;
    }  

    number = 5;
    var dessertrdm = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (dessertrdm) {
        case 1: var dessert = "Un sirop de menthe glaciale diluer au Coca et à la limonade"; break;
        case 2: var dessert = "Du sirop de menthe au sel"; break;
        case 3: var dessert = "Dix crêpes sans sucre"; break;
        case 4: var dessert = "Une coupe de glace à la sauce soja"; break;
        case 5: var dessert = "Un blob-fish"; break;
        case 6: var dessert = "Une salade de dauphin"; break;        
        case 7: var dessert = "Un rat crevé sur son coulis de fruits rouges"; break;
        case 8: var dessert = "Ta mère"; break;
        case 9: var dessert = "Ton père"; break;
        case 10: var dessert = "Jean-Marie Le Pen"; break;
        case 11: var dessert = "Un flambie Hollande"; break;
        case 12: var dessert = "Un glaçon au gingembre"; break;
        case 13: var dessert = "Une huitre avec du vinaigre"; break;
    }  
    
    const menu = new Discord.RichEmbed()
        .setTitle("**MENU DU JOUR**")
        .setColor(`#87CEEB`)
        .addField("En Entrée :", `${entrée}`)
        .addField("En Plat de Résistance :", `${plat}`)
        .addField("Et au Dessert :", `${dessert}`)
        .setTitle("**BON APPETIT !**")
    msg.channel.send({embed: menu});
}
