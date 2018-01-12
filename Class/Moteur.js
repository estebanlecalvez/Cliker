class Clock {
    construtor() {
        init();
    }

    init() {
        this.tick();
    }

    
    tick() {
        setTimeout(function () {
            clock.engine();
            catastrophe.catastrophe(catastrophe.chance);
            bonus.addAchievement();
            perso.changePerso();
        }, 10);
    }

    engine() {
        if (tools.nbWood != 0) {
            tools.compteur = tools.compteur + (tools.nbWood * sword.nbDegat);
            tools.nbTotalDegats = tools.nbTotalDegats + (tools.nbWood * sword.nbDegat);
            tools.compteurArrondi = Math.ceil(tools.compteur);
            tools.compteurTotalArrondi = Math.ceil(tools.nbTotalDegats);
            tools.text("compteur", tools.compteurArrondi + " <img src='img/emeraude.png'>");
            tools.text("nbTotalDegats", "Argent depuis le debut: " + tools.compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (tools.nbStone != 0) {
            tools.compteur = tools.compteur + (tools.nbStone * sword.nbDegat);
            tools.nbTotalDegats = tools.nbTotalDegats + (tools.nbStone * sword.nbDegat);
            tools.compteurArrondi = Math.ceil(tools.compteur);
            tools.compteurTotalArrondi = Math.ceil(tools.nbTotalDegats);
            tools.text("compteur", tools.compteurArrondi + " <img src='img/emeraude.png'>");
            tools.text("nbTotalDegats", "Argent depuis le debut: " + tools.compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (tools.nbIron != 0) {
            tools.compteur = tools.compteur + (tools.nbIron * sword.nbDegat);
            tools.nbTotalDegats = tools.nbTotalDegats + (tools.nbIron * sword.nbDegat);
            tools.compteurArrondi = Math.ceil(tools.compteur);
            tools.compteurTotalArrondi = Math.ceil(tools.nbTotalDegats);
            tools.text("compteur", tools.compteurArrondi + " <img src='img/emeraude.png'>");
            tools.text("nbTotalDegats", "Argent depuis le debut: " + tools.compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (tools.nbGold != 0) {
            tools.compteur = tools.compteur + (tools.nbGold * sword.nbDegat);
            tools.nbTotalDegats = tools.nbTotalDegats + (tools.nbGold *sword.nbDegat);
            tools.compteurArrondi = Math.ceil(tools.compteur);
            tools.compteurTotalArrondi = Math.ceil(tools.nbTotalDegats);
            tools.text("compteur", tools.compteurArrondi + " <img src='img/emeraude.png'>");
            tools.text("nbTotalDegats", "Argent depuis le debut: " + tools.compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else if (tools.nbDiamond != 0) {
            tools.compteur = tools.compteur + (tools.nbDiamond * sword.nbDegat);
            tools.nbTotalDegats = tools.nbTotalDegats + (tools.nbDiamond * sword.nbDegat);
            tools.compteurArrondi = Math.ceil(tools.compteur);
            tools.compteurTotalArrondi = Math.ceil(tools.nbTotalDegats);
            tools.text("compteur", tools.compteurArrondi + " <img src='img/emeraude.png'>");
            tools.text("nbTotalDegats", "Argent depuis le debut: " + tools.compteurTotalArrondi + " <img src='img/emeraude.png'>");
            this.tick();
        } else {
            this.tick();
        }
    }

}

var clock = new Clock();
clock.init();