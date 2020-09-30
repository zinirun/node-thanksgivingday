function getId(phoneNumber) {
  return new Promise((resolve, reject) => {
    try {
      if (phoneNumber.includes('010')) {
        console.log(phoneNumber);
        resolve('id');
      }
    } catch {
      console.log('실패');
      reject(Error('id 실패!'));
    }
  });
}

function getEmail(id) {
  return new Promise((resolve, reject) => {
    if (id === 'id') {
      console.log(id);
      resolve('email');
    } else {
      reject(Error('email 실패!'));
    }
  });
}

function getName(email) {
  return new Promise((resolve, reject) => {
    if (email.includes('email')) {
      console.log(email);
      resolve('name');
    } else {
      reject(Error('name 실패!'));
    }
  });
}

function order(name) {
  console.log(`${name}님 주문 완료!`);
}

function orderCoffee(phoneNumber) {
  return getId(phoneNumber)
    .then(function (id) {
      return getEmail(id);
    })
    .then(function (email) {
      return getName(email);
    })
    .then(function (name) {
      return order(name, 'coffee');
    });
}

orderCoffee('12341234');
