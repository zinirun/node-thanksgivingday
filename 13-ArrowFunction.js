'use strict';

function add(var1, var2) {
  return var1 + var2;
}

const add_ = (var1, var2) => var1 + var2; // 한 줄은 return 안써도됨

console.log(add_(1, 2));

// Curried Function (합성 함수)
// Closure 생성 (내부적으로 접근할 수 있는 함수를 생성)

const getDiscount = (rate) => (price) => rate * price; // getDiscount(0.1)(10000)

const getTenpercentOff = getDiscount(0.1);

getTenpercentOff(10000);
getTenpercentOff(20000);
getTenpercentOff(30000);

// f(x) = x+1 // getTenpercentOff
// g(x) = x^2 // getDiscount
// h(x) = f(g(x))
