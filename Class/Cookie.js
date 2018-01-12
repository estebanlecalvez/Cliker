'use strict';

class Cookie {
    constructor(game) {
        this.cookie = 0;
        
    }

    count(number) {
        this.cookie += number;
        console.log(this.cookie);
    }
}