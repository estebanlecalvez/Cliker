var bonus = new Bonus();
var catastrophe = new Catastrophe(Math.ceil(Math.random() * 100000));
var sword = new Sword("WoodSword", "img/armes/WoodSword.png", 0.003);
var perso = new Personnage(1, "img/perso/niveau1.png");

class Tools {
    constructor(compteur, nbTotalDegats, nbWood, nbStone, nbIron, nbGold, nbDiamond, nbClicsOnZombie, achievementNumber, compteurArrondi, compteurTotalArrondi) {
        this.compteur = compteur;
        this.nbTotalDegats = nbTotalDegats;
        this.nbWood = nbWood;
        this.nbStone = nbStone;
        this.nbIron = nbIron;
        this.nbGold = nbGold;
        this.nbDiamond = nbDiamond;
        this.nbClicsOnZombie = nbClicsOnZombie;
        this.achievementNumber = achievementNumber;
        this.compteurArrondi = compteurArrondi;
        this.compteurTotalArrondi = compteurTotalArrondi;
    }

    giveMeEmerald(nb){
        tools.compteur+=nb;
        tools.nbTotalDegats+=nb;
        tools.afficheCompteur();
        tools.afficheTotal();
    }

    changeSrcSword(){
        return document.getElementById("WoodSword").src = sword.src;
    }

    changeSrcPerso(){
        return document.getElementById("perso").src = perso.srcImg;
    }
    text(id, text) {
        return document.getElementById(id).innerHTML = text;
    }

    html(id, text) {
        return document.getElementById(id).innerText = text;
    }

    src(id, src) {
        return document.getElementById(id).src = src;
    }

    id(idBefore, idNew) {
        return document.getElementById(idBefore).id = idNew;
    }

    appendChild(id, child) {
        document.getElementById(id).appendChild(child);
    }

    displayText(idText, colorText, time) {
        document.getElementById(idText).style.display = "block";
        document.getElementById(idText).style.color = colorText;
        setTimeout(function () {
            document.getElementById(idText).style.display = "none";
        }, time);
    }
    
    incrementClick() {
        if (sword.id == "WoodSword") {
            tools.compteur += 1;
            tools.nbTotalDegats += 1;
            tools.nbClicsOnZombie += 1;
            tools.afficheTotal();
            tools.afficheCompteur();
            bonus.addAchievement();
            catastrophe.catastrophe();
        }
        if (compteur >= 15 && sword.id == "WoodSword") {
            sword.src = "img/armes/WoodSword.png";
        }
        if (sword.id == "StoneSword") {
            tools.compteur += 3;
            tools.nbTotalDegats += 3;
            tools.nbClicsOnZombie += 1;
            tools.afficheTotal();
            tools.afficheCompteur();
            bonus.addAchievement();
            catastrophe.catastrophe();
        } else if (sword.id == "IronSword") {
            tools.compteur += 10;
            tools.nbTotalDegats += 10;
            tools.nbClicsOnZombie += 1;
            tools.afficheTotal();
            tools.afficheCompteur();
            bonus.addAchievement();
            catastrophe.catastrophe();
        } else if (sword.id == "GoldSword") {
            tools.compteur += 20;
            tools.nbTotalDegats += 20;
            tools.nbClicsOnZombie += 1;
            tools.afficheTotal();
            tools.afficheCompteur();
            bonus.addAchievement();
            catastrophe.catastrophe();
        } else if (sword.id == "DiamondSword") {
            tools.compteur += 50;
            tools.nbTotalDegats += 50;
            tools.nbClicsOnZombie += 1;
            tools.afficheTotal();
            tools.afficheCompteur();
            bonus.addAchievement();
            catastrophe.catastrophe();
        }
    }


    addASwordBonus() {
        if (sword.id=="WoodSword") {
            bonus.addAWoodSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id=="StoneSword") {
            bonus.addAStoneSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id=="IronSword") {
            bonus.addAnIronSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id=="GoldSword") {
            bonus.addAGoldSword();
            sword.changeSword();
            bonus.addAchievement();
        } else if (sword.id=="DiamondSword") {
            bonus.addADiamondSword();
            sword.changeSword();
            bonus.addAchievement();
        }
    }

    afficheCompteur(materielActuel) {
        document.getElementById("compteur").innerHTML = Math.ceil(tools.compteur) + '<img src="img/emeraude.png">';
    }
    afficheTotal() {
        document.getElementById("nbTotalDegats").innerHTML = 'Argent depuis le debut:' + Math.ceil(tools.nbTotalDegats) + '<img src="img/emeraude.png">';
    }

}
var tools = new Tools(0,0,0,0,0,0,0,0,1,0,0);