const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// const arrayUObjecto = undefined; // ['cupones': descuento] {}?

// const couponsObjs = {
//   'para_amigos': 30,
//   '3456789': 25,
//   '123': 15,
// }

const couponsList = [];
couponsList.push({
  name: 'para_amigos',
  discount: 30,
});
couponsList.push({
  name: 'es_un_secreto',
  discount: 30,
});
couponsList.push({
  name: 'no_le_digas_a_nadie',
  discount: 30,
});
couponsList.push({
  name: '3456789',
  discount: 25,
});
couponsList.push({
  name: '123',
  discount: 15,
});

function calcularPrecioConDescuento() {
  const price = Number(inputPrice.value);
  const coupon = inputCoupon.value;

  if (!price || !coupon) {
    pResult.innerText = 'Ey, por favor llena el formulario';
    return;
  }
  
  let discount;

  function isCouponInArray(couponElement) {
    return couponElement.name == coupon;
  }

  const couponInArray = couponsList.find(isCouponInArray);

  if (couponInArray) {
    discount = couponInArray.discount;
  } else {
    pResult.innerText = 'Ey, por favor llena el formulario';
    return;
  }

  console.log({
    coupon,
    discount,
    couponInArray,
    couponsList
  })



  // if (couponsObjs(coupon)){
  //   discount = couponsObjs(coupon)
  // } else{
  //     pResult.innerText = 'El cupón no es válido';
  //     return
  //   }


  // switch (coupon) {
  //   case 'para_amigos':
  //     discount = 30;
  //     break;
  //   case 'no_le_digas_a_nadie':
  //     discount = 25;
  //     break;
  //   default:
  //     pResult.innerText = 'El cupón no es válido';
  //     return;
  // }
  
  // if (coupon == 'para_amigos') {
  //   discount = 30;
  // } else if (coupon == 'no_le_digas_a_nadie') {
  //   discount = 25;
  // } else {
  // pResult.innerText = 'El cupón no es válido';
  // return;
  // }
  
  const newPrice = (price * (100 - discount)) / 100;

  pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}