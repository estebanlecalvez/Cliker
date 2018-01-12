var compteur = 0;
var nbTotalDegats = 0;
var nbWood = 0;
var nbStone = 0;
var nbIron = 0;
var nbGold = 0;
var nbDiamond = 0;
var nbClicsOnZombie = 0;
var achievementNumber = 1;
var compteurArrondi = 0;
var compteurTotalArrondi = 0;
class Tools {
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


    afficheCompteur(materielActuel) {
        document.getElementById("compteur").innerHTML = compteur + '<img src="img/emeraude.png">';
    }
    afficheTotal() {
        document.getElementById("nbTotalDegats").innerHTML = 'Argent depuis le debut:' + nbTotalDegats + '<img src="img/emeraude.png">';
    }

}
