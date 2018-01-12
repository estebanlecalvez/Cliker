class Personnage {

    constructor(lvlPersonnage, srcImg) {
        this.lvlPersonnage = lvlPersonnage;
        this.srcImg = srcImg;
    }

    changePerso() {
       if (tools.nbTotalDegats >= 1000000) {
            perso.lvlPersonnage = 8;
            perso.srcImg = "img/perso/niveau8.png";
            tools.changeSrcPerso();
        } else  if (tools.nbTotalDegats >= 100000) {
            perso.lvlPersonnage = 7;
            perso.srcImg = "img/perso/niveau7.png";
            tools.changeSrcPerso();
        } else if (tools.nbTotalDegats >= 15000) {
            perso.lvlPersonnage = 6;
            perso.srcImg = "img/perso/niveau6.png";
            tools.changeSrcPerso();
        } else  if (tools.nbTotalDegats >= 5000) {
            perso.lvlPersonnage = 5;
            perso.srcImg = "img/perso/niveau5.png";
            tools.changeSrcPerso();
        }else if (tools.nbTotalDegats >= 2500) {
            perso.lvlPersonnage = 4;
            perso.srcImg = "img/perso/niveau4.png";
            tools.changeSrcPerso();
        } else  if (tools.nbWood == 4) {
            perso.lvlPersonnage = 3;
            perso.srcImg = "img/perso/niveau3.png";
            tools.displayText("persoNiv3", "green", 2000);
            tools.changeSrcPerso();
        } else if (tools.nbClicsOnZombie == 15) {
            perso.lvlPersonnage = 2;
            perso.srcImg = "img/perso/niveau2.png";
            tools.displayText("persoNiv2", "green", 2000);
            tools.changeSrcPerso();
        }
    }


}
