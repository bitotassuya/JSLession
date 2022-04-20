// Array Reduce
const data = [10, 20, 30, 40];

/*array.resuce((ค่าที่ถูกประเมินผล,element) => {})*/
const summation = data.reduce((value, element) => {
  console.log(value);
  const total = element + value;
  return total;
}, 0);
console.log("ผลรวม=" + summation);

/* Array Resuce + Attribute */
const Cart = [
  { name: "กระเป่า", price: 500 },
  { name: "หนังสือ", price: 400 },
  { name: "มือถือ", price: 5000 },
];

const SummationCart = Cart.reduce((value, element) => {
  console.log(value);
  const TotalCart = element.price + value;

  return TotalCart;
}, 0);
console.log("ผลรวมของในรถเข็น=" + SummationCart);
