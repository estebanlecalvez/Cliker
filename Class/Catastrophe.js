class Catastrophe {

    constructor(chance){
        this.chance = chance;
    }

    catastrophe(chance) {
        catastrophe.chance=Math.ceil(Math.random()*100000);
        if (chance < 10) {
            tools.displayText("showCatastrophe1", "red", 4000);
            tools.compteur = 0;
        }

        if (chance > 99990) {
            tools.displayText("showCatastrophe2", "red", 4000);
            tools.compteur -=15000;
            tools.afficheCompteur();
            if (tools.compteur < 0) {
                setTimeout(function(){
                    alert("Tu as perdu tout tes diamants et même bien plus, c'est le GAME OVER.");
                    window.location.reload();
                }, 1000);
            }
           
        }
    }


}


