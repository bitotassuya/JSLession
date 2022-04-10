// การกระจายสมาชิกใน Array
// แบบปกติ
const newArr = [100,200,300]
const Data = [10,20,newArr]

console.log(Data)
console.log(Data.length)

//แบบSpread Operator
const newArr2 = [100,200,300,400,500]
const Data2 = [10,20,...newArr2]
const NewColor =["แดง","เหลือง","เขียว"]
const OldColor = ["ส้ม","ชมพู"]

console.log("Spread Opearator= "+Data2)
console.log(Data2.length)

//ใช้ Array Function
OldColor.push(...NewColor)
console.log(OldColor)
