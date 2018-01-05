'use strict';

class Bonus {
    incrementClick() {
        if (document.getElementById("WoodSword")) {
            compteur += 1;
            nbTotalDegats += 1;
            nbClicsOnZombie += 1;
            afficheTotal();
            afficheCompteur();
            changePerso();
            addAchievement();
            catastrophe();
        }
        if (compteur >= 15 && document.getElementById("WoodSword")) {
            document.getElementById("WoodSword").src = "img/armes/WoodSword.png";
        }
        if (document.getElementById("StoneSword")) {
            compteur += 3;
            nbTotalDegats += 3;
            nbClicsOnZombie += 1;
            afficheTotal();
            afficheCompteur();
            changePerso();
            addAchievement();
            catastrophe();
        } else if (document.getElementById("IronSword")) {
            compteur += 10;
            nbTotalDegats += 10;
            nbClicsOnZombie += 1;
            afficheTotal();
            afficheCompteur();
            changePerso();
            addAchievement();
            catastrophe();
        } else if (document.getElementById("GoldSword")) {
            compteur += 20;
            nbTotalDegats += 20;
            nbClicsOnZombie += 1;
            afficheTotal();
            afficheCompteur();
            changePerso();
            addAchievement();
            catastrophe();
        } else if (document.getElementById("DiamondSword")) {
            compteur += 50;
            nbTotalDegats += 50;
            nbClicsOnZombie += 1;
            afficheTotal();
            afficheCompteur();
            changePerso();
            addAchievement();
            catastrophe();
        }
    }



    addAchievementDiv(src, title) {
        var imgType = document.createElement("img");
        imgType.src = src;
        imgType.title = title;
        document.getElementById("Achievement" + achievementNumber).appendChild(imgType);
        achievementNumber++;

    }

    addAchievement() {
        if (nbStone == 1 && achievementNumber == 1) {
            displayText("showAchievement1", "green", 3000);
            addAchievementDiv("img/bonus/StoneSwordBonus.png", "Vous avez acheté votre première épée en pierre");
        }
        if (nbIron == 1 && achievementNumber == 2) {
            displayText("showAchievement2", "green", 3000);
            addAchievementDiv("img/bonus/IronSwordBonus.png", "Vous avez acheté votre première épée en fer");
        }
        if (nbGold == 1 && achievementNumber == 3) {
            addAchievementDiv("img/bonus/GoldSwordBonus.png", "Vous avez acheté votre première épée en or");
        }

        if (nbDiamond == 1 && achievementNumber == 4) {
            addAchievementDiv("img/bonus/DiamondSwordBonus.png", "Vous avez acheté votre première épée en diamant");
        }

        if (compteurTotalArrondi > 100000 && achievementNumber == 5) {
            addAchievementDiv("img/emeraude.png", "Vous avez gagné plus de 100 000 emeraudes depuis le début. Si vous continuez comme ça, Bill Gates va se retourner dans sa tombe!!!");

        }
        if (document.getElementById("perso").src == "img/perso/niveau2.png") {
            addAchievementDiv("img/perso/niveau2.png", "Vous avez atteint le nv 2");
        }

    }

    addASwordBonus() {
        if (document.getElementById("WoodSword")) {
            addAWoodSword();
            changeSword();
            addAchievement();
            changePerso();
        } else if (document.getElementById("StoneSword")) {
            addAStoneSword();
            changeSword();
            addAchievement();
            changePerso();
        } else if (document.getElementById("IronSword")) {
            addAnIronSword();
            changeSword();
            addAchievement();
            changePerso();
        } else if (document.getElementById("GoldSword")) {
            addAGoldSword();
            changeSword();
            addAchievement();
            changePerso();
        } else if (document.getElementById("DiamondSword")) {
            addADiamondSword();
            changeSword();
            addAchievement();
            changePerso();
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
        if (compteur >= 15) {
            compteur -= 15;
            nbWood++;
            afficheCompteur();
            afficheTotal();
            addBonusSwordToBonuses("Wood");
        } else {
            displayText("matosWood", "red", 2000);
        }
    }

    addAStoneSword() {
        nbWood = 0;
        if (compteur >= 45) {
            compteur -= 45;
            nbStone++;
            afficheCompteur();
            afficheTotal();
            ChangeSwordType("WoodSwordDiv", "StoneSwordDiv", "WoodSwordBonuses", "StoneSwordBonuses", "Stone", 3);
            addBonusSwordToBonuses("Stone");
        } else {
            displayText("matosStone", "red", 2000);
        }
    }

    addAnIronSword() {
        nbStone = 0;
        if (compteur >= 100) {
            compteur -= 100;
            nbIron++;
            afficheCompteur();
            afficheTotal();
            ChangeSwordType("StoneSwordDiv", "IronSwordDiv", "StoneSwordBonuses", "IronSwordBonuses", "Iron", 10);
            addBonusSwordToBonuses("Iron");
        } else {
            displayText("matosIron", "red", 2000);
        }
    }
    addAGoldSword() {
        nbIron = 0;
        if (compteur >= 250) {
            compteur -= 250;
            nbGold++;
            afficheCompteur();
            afficheTotal();
            ChangeSwordType("IronSwordDiv", "GoldSwordDiv", "IronSwordBonuses", "GoldSwordBonuses", "Gold", 20);
            addBonusSwordToBonuses("Gold");
        } else {
            displayText("matosGold", "red", 2000);
        }
    }
    addADiamondSword() {
        nbGold = 0;
        if (compteur >= 1000) {
            compteur -= 1000;
            nbDiamond++;
            afficheCompteur();
            afficheTotal();
            ChangeSwordType("GoldSwordDiv", "DiamondSwordDiv", "GoldSwordBonuses", "DiamondSwordBonuses", "Diamond", 50);
            if (nbDiamond > 10) {
                text("ifDiamondSup10", "<div class='title is-5'><p color='white'><b><p color ='white'>" + nbDiamond + "</p></b></div>");
            } else {
                addBonusSwordToBonuses("Diamond");
            }
        } else {
            displayText("matosDiamond", "red", 2000);
        }
    }
}






