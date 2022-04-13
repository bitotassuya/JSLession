//Array Map
const numbers = [10,20,30,40,50]
console.log(numbers)

const result = numbers.map(element =>{
    const sum = element*2
    return sum
})
/* const result = numbers.map(element => element*2) */
console.log(result)
//ใช้กับ  String
const data = ["ฝนตก","แดดร้อน","ฟ้าคะนอง","หนาว","ลมแรง","หิมะตกหนัก","หมอกหนา","อากาศดี","สดใส","ชื้น"]

const weather = data.map((element,index) =>{
    return `วันที่ ${index} ,สภาพอากาศ = ${element}`
})
console.log(weather)

//ใช้กับ  Object
const AllData = [
    {day:"13/02/2565",weather:"แดดร้อน",temp:27},
    {day:"14/02/2565",weather:"ฝนตก",temp:22},
    {day:"15/02/2565",weather:"หนาว",temp:20}
]
const resultofData = AllData.map(element=>{
    return element.weather+element.temp})
console.log(resultofData)