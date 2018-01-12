class Sword {
    changeSword(typeSword) {
        if (nbGold >= 5) {
            id("GoldSword", "DiamondSword");
            src("DiamondSword", "img/armes/DiamondSword.png");
        } else if (nbIron >= 5) {
            id("IronSword", "GoldSword");
            src("GoldSword", "img/armes/GoldSword.png");
        } else if (nbStone >= 5) {
            id("StoneSword", "IronSword");
            src("IronSword", "img/armes/IronSword.png");
        } else if (nbWood >= 5) {
            id("WoodSword", "StoneSword");
            src("StoneSword", "img/armes/StoneSword.png");
        } if (compteur > 15 & document.getElementById("WoodSword")) {
            document.getElementById("WoodSword").src = "img/armes/WoodSword.png";
        }

    }

    ChangeSwordType(ancientSwordType, newSwordType, ancientSwordBonuses, newSwordBonuses, actualSword, numberPerSecond) {
        if (document.getElementById(ancientSwordType)) {
            document.getElementById(ancientSwordType).innerHTML = '<img src="img/bonus/' + actualSword + 'SwordBonusSmall.png">' + actualSword + ' Swords (' + numberPerSecond + ' par seconde) <img src="img/bonus/' + actualSword + 'SwordBonusSmall.png">';
            document.getElementById(ancientSwordType).id = newSwordType;
            document.getElementById(ancientSwordBonuses).innerHTML = "";
            document.getElementById(ancientSwordBonuses).id = newSwordBonuses;
        }

    }
}

