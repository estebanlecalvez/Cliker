class Bonus {
    constructor() { }



    addAchievementDiv(src, title) {
        var imgType = document.createElement("img");
        imgType.src = src;
        imgType.title = title;
        document.getElementById("Achievement" + tools.achievementNumber).appendChild(imgType);
        tools.achievementNumber++;
    }

    addAchievement() {
        if (tools.nbStone == 1 && tools.achievementNumber == 1) {
            tools.displayText("showAchievement1", "green", 3000);
            bonus.addAchievementDiv("img/bonus/StoneSwordBonus.png", "Vous avez acheté votre première épée en pierre");
        }
        if (tools.nbIron == 1 && tools.achievementNumber == 2) {
            tools.displayText("showAchievement2", "green", 3000);
            bonus.addAchievementDiv("img/bonus/IronSwordBonus.png", "Vous avez acheté votre première épée en fer");
        }
        if (tools.nbGold == 1 && tools.achievementNumber == 3) {
            bonus.addAchievementDiv("img/bonus/GoldSwordBonus.png", "Vous avez acheté votre première épée en or");
        }

        if (tools.nbDiamond == 1 && tools.achievementNumber == 4) {
            bonus.addAchievementDiv("img/bonus/DiamondSwordBonus.png", "Vous avez acheté votre première épée en diamant");
        }

        if (tools.compteurTotalArrondi > 100000 && tools.achievementNumber == 5) {
            bonus.addAchievementDiv("img/emeraude.png", "Vous avez gagné plus de 100 000 emeraudes depuis le début. Si vous continuez comme ça, Steve Jobs va se retourner dans sa tombe!!!");
        }

    }

    addASwordBonus() {
        if (sword.id == "WoodSword") {
            bonus.addAWoodSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id == "StoneSword") {
            bonus.addAStoneSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id == "IronSword") {
            bonus.addAnIronSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id == "GoldSword") {
            bonus.addAGoldSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id == "DiamondSword") {
            bonus.addADiamondSword();
            sword.changeSword();
            bonus.addAchievement();
        }
    }

    addBonusSwordToBonuses(actualSword) {
        var imgType = document.createElement("img");
        imgType.src = "img/bonus/" + actualSword + "SwordBonus.png";
        document.getElementById(actualSword + "SwordBonuses").appendChild(imgType);
    }

    viderSwordBonuses(swordDiv, swordBonuses) {
        document.getElementById(swordDiv).id = "WoodSwordDiv";
        document.getElementById(swordBonuses).innerText = "";
        document.getElementById(swordBonuses).id = "WoodSwordBonuses";
    }

    addAWoodSword() {
        if (tools.compteur >= 15) {
            tools.compteur -= 15;
            tools.nbWood++;
            tools.afficheCompteur();
            tools.afficheTotal();
            bonus.addBonusSwordToBonuses("Wood");
        } else {
            tools.displayText("matosWood", "red", 2000);
        }
    }

    addAStoneSword() {
        if (tools.nbStone >= 1) {
            tools.nbWood = 0;
        }
        if (tools.compteur >= 45) {
            tools.compteur -= 45;
            tools.nbStone++;
            tools.afficheCompteur();
            tools.afficheTotal();
            sword.ChangeSwordType("WoodSwordDiv", "StoneSwordDiv", "WoodSwordBonuses", "StoneSwordBonuses", "Stone", 3);
            bonus.addBonusSwordToBonuses("Stone");


        } else {
            tools.displayText("matosStone", "red", 2000);
        }
    }

    addAnIronSword() {
        if (tools.nbIron >= 1) {
            tools.nbStone = 0;
        }
        if (tools.compteur >= 100) {
            tools.compteur -= 100;
            tools.nbIron++;
            tools.afficheCompteur();
            tools.afficheTotal();
            sword.ChangeSwordType("StoneSwordDiv", "IronSwordDiv", "StoneSwordBonuses", "IronSwordBonuses", "Iron", 10);
            bonus.addBonusSwordToBonuses("Iron");
        } else {
            tools.displayText("matosIron", "red", 2000);
        }
    }
    addAGoldSword() {
        if (tools.nbGold >= 1) {
            tools.nbIron = 0;
        }
        if (tools.compteur >= 250) {
            tools.compteur -= 250;
            tools.nbGold++;
            tools.afficheCompteur();
            tools.afficheTotal();
            sword.ChangeSwordType("IronSwordDiv", "GoldSwordDiv", "IronSwordBonuses", "GoldSwordBonuses", "Gold", 20);
            bonus.addBonusSwordToBonuses("Gold");
        } else {
            tools.displayText("matosGold", "red", 2000);
        }
    }
    addADiamondSword() {
        if (tools.nbDiamond >= 1) {
            tools.nbGold = 0;
        }
        if (tools.compteur >= 1000) {
            tools.compteur -= 1000;
            tools.nbDiamond++;
            tools.afficheCompteur();
            tools.afficheTotal();
            sword.ChangeSwordType("GoldSwordDiv", "DiamondSwordDiv", "GoldSwordBonuses", "DiamondSwordBonuses", "Diamond", 50);
            if (tools.nbDiamond > 10) {
                tools.text("ifDiamondSup10", "<div class='title is-5'><p color='white'><b><p color ='white'>" + tools.nbDiamond + "</p></b></div>");
            } else {
                bonus.addBonusSwordToBonuses("Diamond");
            }
        } else {
            tools.displayText("matosDiamond", "red", 2000);
        }
    }
}