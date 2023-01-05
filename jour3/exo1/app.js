class Objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

let objet1 = new Objet("Coke", 1000);
let objet2 = new Objet("Pepsi", 20);

let boite = [objet1, objet2];

class Personnage {
    constructor(nom, argent ,sac) {
        this.nom = nom;
        this.sac = [];
        this.argent = argent;
    }

    prendre(objet) {
        this.sac.push(objet);
    }

    acheter(vendeur, objet) {
        if (vendeur.sac.includes(objet) && this.argent >= objet.prix) {
            this.sac.push(objet);
            this.argent -= objet.prix;
            vendeur.sac.splice(vendeur.sac.indexOf(objet), 1);
            vendeur.argent += objet.prix;
        }
        else console.log(`transaction impossible`);
    }
}

let personnage1 = new Personnage("Kevin", 100);
let personnage2 = new Personnage("Gerard", 50);

personnage1.prendre(objet1);
personnage2.prendre(objet2);
personnage1.acheter(personnage2, objet2);

console.log(`${personnage1.nom} a dans son sac : ${personnage1.sac.map(objet => objet.nom).join(', ')} et ${personnage1.argent}$`);
console.log(`${personnage2.nom} a dans son sac : ${personnage2.sac.map(objet => objet.nom).join(', ')}  ${personnage2.argent}$`);