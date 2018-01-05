class Personnage {

    constructor(lvlPersonnage, srcImg) {
        this.lvlPersonnage = lvlPersonnage;
        this.srcImg = srcImg;
    }

    get lvlPersonnage() {
        return this.lvlPersonnage;
    }
    get srcImg() {
        return this.srcImg;
    }

    changePerso() {
        var perso = new Personnage();
        perso.lvlPersonnage = 1;
        perso.srcImg = "img/perso/niveau1.png";
        if (nbStone == 2 && achievementNumber == 1) {
            perso.lvlPersonnage = 2;
            perso.srcImg = "img/perso/niveau2.png";

        }
        if (nbIron == 2 && achievementNumber == 2) {
            perso.lvlPersonnage = 3;
            perso.srcImg = "img/perso/niveau3.png";
        }
        if (nbClicsOnZombie == 10) {
            perso.lvlPersonnage = 4;
            perso.srcImg = "img/perso/niveau4.png";
            displayText("persoNiv4", "green", 4000);

        }
        if (nbClicsOnZombie == 15) {
            perso.lvlPersonnage = 5;
            perso.srcImg = "img/perso/niveau5.png";
            displayText("persoNiv5", "green", 4000);

        }
        if (nbClicsOnZombie == 20) {
            perso.lvlPersonnage = 6;
            perso.srcImg = "img/perso/niveau6.png";
            displayText("persoNiv6", "green", 4000);

        }
        if (nbClicsOnZombie == 30) {
            perso.lvlPersonnage = 7;
            perso.srcImg = "img/perso/niveau7.png";
            displayText("persoNiv7", "green", 4000);

        }
        if (nbClicsOnZombie == 40) {
            perso.lvlPersonnage = 8;
            perso.srcImg = "img/perso/niveau8.png";
            displayText("persoNiv8", "green", 4000);
        }
    }


}
