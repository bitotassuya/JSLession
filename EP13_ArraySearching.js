/*ค้นหาข้อมูลใน Array
indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง  Index ที่ค้นเจอ ถ้าไม่เจอจะได้ -1
find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้  undefind
findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1*/

const color = ["แดง","เขียว","น้ำเงิน","ม่วง","ขาว","ชมพู","ฟ้า","เทา"]
const index = color.indexOf("ฟ้า")
console.log(index)

const search = color.find(element => element === "เขียว" )
console.log(search)

const searchIndex = color.findIndex(element => element === "เขียว")
console.log(searchIndex)