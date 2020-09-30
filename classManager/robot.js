class Robot {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}`);
  }
}

class Ai extends Robot {
  constructor(name) {
    super(name);
  }

  walk() {
    console.log(`walk: ${this.name}`);
  }
}

const a = new Ai('hi');
a.speak();
a.walk();
