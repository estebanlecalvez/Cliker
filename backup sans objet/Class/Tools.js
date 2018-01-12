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

function text(id, text) {
    return document.getElementById(id).innerHTML = text;
}

function html(id, text) {
    return document.getElementById(id).innerText = text;
}

function src(id, src) {
    return document.getElementById(id).src = src;
}

function id(idBefore, idNew) {
    return document.getElementById(idBefore).id = idNew;
}

function appendChild(id, child) {
    document.getElementById(id).appendChild(child);
}

function displayText(idText, colorText, time) {
    document.getElementById(idText).style.display = "block";
    document.getElementById(idText).style.color = colorText;
    setTimeout(function () {
        document.getElementById(idText).style.display = "none";
    }, time);
}


function afficheCompteur(materielActuel) {
    document.getElementById("compteur").innerHTML = compteur + '<img src="img/emeraude.png">';
}
function afficheTotal() {
    document.getElementById("nbTotalDegats").innerHTML = 'Argent depuis le debut:' + nbTotalDegats + '<img src="img/emeraude.png">';
}
