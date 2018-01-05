'use strict';

class Clock {
  constructor(game, container) {

    // Clock properties
    this.container = container;
    this.day = 20;
    this.month = 12;
    this.year = new Date().getFullYear();
    this.play = false;
  }

  init() {
    console.log(game.pouet);
    this.tick();
  }

  updateUI() {
    var day = (this.day < 10) ? `0${this.day}` : this.day,
        month =  (this.month < 10) ? `0${this.month}` : this.month;

    this.container.html(`${day}/${month}/${this.year}`);
  }

  tick() {
    this.updateUI();
    game.cookie.count(10);
    setTimeout(() => this.engine(), 1000);
  }

  engine() {
    if(this.day < 28) {
      ++this.day;
      this.tick();
      return;
    }

    switch(this.month) {
      default:
        if(this.day === 31) {this.newMonth(); break;}
        ++this.day;
        break;

      case 4:
      case 6:
      case 9:
      case 11:
        if(this.day === 30) {this.newMonth(); break;}
        ++this.day;
        break;

      case 2:
        if(this.day === 29 || ((this.year % 4 !== 0 || this.year % 100 === 0) && this.year % 400 !== 0)) {this.newMonth(); break;}
        ++this.day;
        break;

      case 12:
        if(this.day === 31) {this.month = 0; this.newMonth(); this.newYear(); break;}
        ++this.day;
        break;
    }

    this.tick();
  }

  newMonth() {
    ++this.month;
    this.day = 1;
    return;
  }

  newYear() {
    ++this.year;
    return;
  }
}