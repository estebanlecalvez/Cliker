function changePerso() {
    if (nbStone == 2 && achievementNumber == 1) {
        document.getElementById("perso").src = "img/perso/niveau2.png";
        
    }
    if (nbIron == 2 && achievementNumber == 2) {
        document.getElementById("perso").src = "img/perso/niveau3.png";
        
    }
    if (nbClicsOnZombie == 10) {
        document.getElementById("perso").src = "img/perso/niveau4.png";
        displayText("persoNiv4", "green", 4000);

    }
    if (nbClicsOnZombie == 15) {
        document.getElementById("perso").src = "img/perso/niveau5.png";
        displayText("persoNiv5", "green", 4000);

    }
    if (nbClicsOnZombie == 20) {
        document.getElementById("perso").src = "img/perso/niveau6.png";
        displayText("persoNiv6", "green", 4000);

    }
    if (nbClicsOnZombie == 30) {
        document.getElementById("perso").src = "img/perso/niveau7.png";
        displayText("persoNiv7", "green", 4000);

    }
    if (nbClicsOnZombie == 40) {
        document.getElementById("perso").src = "img/perso/niveau8.png";
        displayText("persoNiv8", "green", 4000);
    }
}

