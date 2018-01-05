'use strict';

class Controller {
    constructor() {
        this.clock = new Clock(this, jQuery('#clock'));
        this.cookie = new Cookie(this);
    }
}

const game = new Controller();
game.clock.init();