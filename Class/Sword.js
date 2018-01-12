class Sword {
    constructor(id, src, nbDegat) {
        this.id = id;
        this.src = src;
        this.nbDegat = nbDegat;
    }

    changeSword() {
        
        if (tools.nbGold >= 5) {
            sword.upgradeToDiamond();
        } else if (tools.nbIron >= 5) {
            sword.upgradeToGold();
        } else if (tools.nbStone >= 5) {
            sword.upgradeToIron();
        } else if (tools.nbWood >= 5) {
            sword.upgradeToStone();
        } 

    }

    upgradeToDiamond() {
        sword.id = "DiamondSword";
        sword.src = "img/armes/DiamondSword.png";
        sword.nbDegat = 0.1;
        tools.changeSrcSword();
    }

    upgradeToGold() {
        sword.id = "GoldSword";
        sword.src = "img/armes/GoldSword.png";
        sword.nbDegat = 0.05;
        tools.changeSrcSword();
    }

    upgradeToIron() {
        sword.id = "IronSword";
        sword.src = "img/armes/IronSword.png";
        sword.nbDegat = 0.02;
        tools.changeSrcSword();
    }

    upgradeToStone() {
        sword.id = "StoneSword";
        sword.src = "img/armes/StoneSword.png";
        sword.nbDegat = 0.01;
        tools.changeSrcSword();
    }



    ChangeSwordType(ancientSwordType, newSwordType, ancientSwordBonuses, newSwordBonuses, actualSword, numberPerSecond) {
        if (document.getElementById(ancientSwordType)) {
            document.getElementById(ancientSwordType).innerHTML = '<img src="img/bonus/' + actualSword + 'SwordBonusSmall.png">' + actualSword + ' Swords <img src="img/bonus/' + actualSword + 'SwordBonusSmall.png">';
            document.getElementById(ancientSwordType).id = newSwordType;
            document.getElementById(ancientSwordBonuses).innerHTML = "";
            document.getElementById(ancientSwordBonuses).id = newSwordBonuses;
        }
    }
}

