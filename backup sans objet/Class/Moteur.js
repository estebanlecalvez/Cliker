'use strict';

class Clock {
    construtor() {
        init();
    }

    init() {
        this.tick();
    }

    tick() {
        var self = this;
        setTimeout(function () {
            self.engine();
            catastrophe();
            addAchievement();
        }, 10);
    }

    engine() {
        if (nbWood != 0) {
            //math.ceil pose problemme
           
            compteur = compteur + (nbWood * 0.03);
            nbTotalDegats = nbTotalDegats + (nbWood * 0.03);
            compteurArrondi = Math.ceil(compteur);
            compteurTotalArrondi = Math.ceil(nbTotalDegats);
            text("compteur", compteurArrondi + " <img src='img/emeraude.png'>");
            text("nbTotalDegats", "Argent depuis le debut: " + compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (nbStone != 0) {
            compteur = compteur + (nbStone * 0.1);
            nbTotalDegats = nbTotalDegats + (nbStone * 0.1);
            compteurArrondi = Math.ceil(compteur);
            compteurTotalArrondi = Math.ceil(nbTotalDegats);
            text("compteur", compteurArrondi + " <img src='img/emeraude.png'>");
            text("nbTotalDegats", "Argent depuis le debut: " + compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (nbIron != 0) {
            compteur = compteur + (nbIron * 0.2);
            nbTotalDegats = nbTotalDegats + (nbIron * 0.2);
            compteurArrondi = Math.ceil(compteur);
            compteurTotalArrondi = Math.ceil(nbTotalDegats);
            text("compteur", compteurArrondi + " <img src='img/emeraude.png'>");
            text("nbTotalDegats", "Argent depuis le debut: " + compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (nbGold != 0) {
            compteur = compteur + (nbGold * 0.5);
            nbTotalDegats = nbTotalDegats + (nbGold * 0.5);
            compteurArrondi = Math.ceil(compteur);
            compteurTotalArrondi = Math.ceil(nbTotalDegats);
            text("compteur", compteurArrondi + " <img src='img/emeraude.png'>");
            text("nbTotalDegats", "Argent depuis le debut: " + compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (nbDiamond != 0) {
            compteur = compteur + (nbDiamond * 1);
            nbTotalDegats = nbTotalDegats + (nbDiamond * 1);
            compteurArrondi = Math.ceil(compteur);
            compteurTotalArrondi = Math.ceil(nbTotalDegats);
            text("compteur", compteurArrondi + " <img src='img/emeraude.png'>");
            text("nbTotalDegats", "Argent depuis le debut: " + compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else {
            this.tick();
        }
    }

}

var clock = new Clock();
clock.init();