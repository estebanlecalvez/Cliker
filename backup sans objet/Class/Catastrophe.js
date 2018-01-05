function catastrophe() {
    var catastrophe = Math.ceil(Math.random() * 100000);
    if (catastrophe < 10) {
        displayText("showCatastrophe1", "red", 4000);
        compteur = 0;
    }

    if (catastrophe > 99990) {
        displayText("showCatastrophe2", "red", 4000);

    }
}

