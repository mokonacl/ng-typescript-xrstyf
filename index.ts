class Animaler {
  age = 10;
  constructor(public isCry: boolean) {}

  crynow() {
    if (this.isCry) {
      console.log(`age : ${this.age}`);
    } else {
      console.log('ショボーン');
    }
  }
}

let doger = new Animaler(false);
doger.crynow();
