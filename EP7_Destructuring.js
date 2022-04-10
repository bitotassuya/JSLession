/*กำหนดค่าที่อยู่ใน Array หรือ  object ให้กับตัวแปรโดยใช้วิธีการจับคู่ตัวแปรกับค่าใน
Array หรือ Object */

//Array
const colors = ["เขียว","เหลือง","แดง"]
const [green,yellow,red] = colors
console.log(green+"\n"+yellow+"\n"+red)

const [,SubColor,] = colors
console.log(SubColor)

//Object
const Product = {
    productName : "Computer",
    productprice : 30000,
    strock: 10
}
const {productName:Name,productprice:Price,strock:S} = Product 
console.log(Name+"\n"+Price+"\n"+S)