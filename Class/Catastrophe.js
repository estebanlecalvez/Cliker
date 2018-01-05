class Catastrophe {
    chance = Math.ceil(Math.random() * 100000);
    constructor(type,chance){
        this.type = type;
        this.chance = chance;
    }
    get chance(){
        return this.chance;
    }
    catastrophe() {
        var catastrophe = new Catastrophe(1, 10);
        if (catastrophe < catastrophe.chance()) {
            displayText("showCatastrophe1", "red", 4000);
            compteur = 0;
        }

        if (catastrophe > 99990) {
            displayText("showCatastrophe2", "red", 4000);

        }
    }

}


