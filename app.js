class Objet {
    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

class Personnage {
    constructor(nom, sac, argent) {
        this.nom = nom;
        this.sac = sac;
        this.argent = argent;
    }

    prendre(objet) {
        this.sac.push(objet);
    }

    acheter(vendeur, objet) {
        if (this.argent >= objet.prix) {
            this.sac.push(objet);
            this.argent -= objet.prix;
            vendeur.argent += objet.prix;
        } else {
            console.log(`${this.nom} n'a pas assez d'argent pour acheter ${objet.nom}`);
        }
    }
}

const objet1 = new Objet("Stylo", 2.5);
const objet2 = new Objet("Cahier", 3.5);
const boite = [objet1, objet2];

const personnage1 = new Personnage("Bob", [], 10);
const personnage2 = new Personnage("Alice", [], 5);

personnage1.prendre(boite[0]);
personnage2.prendre(boite[1]);

personnage1.acheter(personnage2, personnage2.sac[0]);