class Personnage {

    constructor(pseudo, classe, sante, attaque) {

        this.pseudo = pseudo;
        this.classe = classe;
        this.sante = sante;
        this.attaque = attaque;
        this.niveau = 1;
    }
    evoluer() {

        this.niveau++;
        console.log(this.pseudo + 'passe au niveau' + this.niveau + ' !');
    }

    verfiierSante() {

        if (this.sante <= 0) {

            this.sante == 0;
            console.log(this.pseudo + ' a perdu!');
        }
    }

    get informations() {

        return (this.pseudo + '(' + this.classe + ')' + 'a ' + this.sante + ' points de vis et est au niveau ' + this.niveau + '.');
    }
}

class Magicien extends Personnage {

    constructor(pseudo) {
        super(pseudo, "magicien", 170, 90)
    }
    attaquer(personnage) {

        personnage.sante -= this.attaque
        console.log(this.pseudo + ' attaque' + personnage.pseudo + 'en lançant un sort' + '(' + this.attaque + 'dégâts)');

        this.evoluer();
        personnage.verfiierSante();

    }
    coupSpecial(personnage) {

        personnage.sante -= this.attaque * 5;
        console0log(this.pseudo + ' attaque avec son coup spécial puissance des arcanes ' + personnage.pseudo + '(' + this.attaque * 5 + ' dégât).');
        this.evoluer();
        personnage.verfiierSante();
    }


}

class Guerrier extends Personnage {

    constructor(pseudo) {
        super(pseudo, "guerrier", 350, 50)
    }
    attaquer(personnage) {

        personnage.sante -= this.attaque
        console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' avec son épée' + '(' + this.attaque + 'dégâts)');

    }
    coupSpecial(personnage) {

        personnage.sante -= this.attaque * 5;
        console.log(this.pseudo + ' attaque avec son coup spécial haches de guerre ' + personnage.pseudo + '(' + this.attaque * 5 + ' dégât).');

    }
}

let gandalf = new Magicien('Gandalf');
let thor = new Guerrier('thor');

console.log(thor.informations);
console.log(gandalf.informations);
gandalf.attaquer(thor)
console.log(thor.informations);
thor.attaquer(gandalf)
console.log(gandalf.informations);
gandalf.attaquer(thor);
console.log(thor.informations);
thor.attaquer(gandalf);
console.log(gandalf.informations);
