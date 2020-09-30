class test {
  // static 메소드만 있는 class라면 생성자 필요 없음
  constructor() {
    this.config = {};
  }

  fn() {}

  // static: class를 생성하지 않고 호출 가능
  static call() {
    // constructor의 객체에 절대 접근할 수 없음
    console.log('static method');
  }
}

test.call();
