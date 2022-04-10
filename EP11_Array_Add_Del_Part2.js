//Array Splice Slice

//Splice(ตำแหน่งที่จะลบ,จำนวนที่จะลบ,สมาชิกที่ต้องการแทนรก)
const data = [10,20,30,40,50]
console.log(data)

data.splice(1,2,[100,200])
console.log(data)
data.splice()


//Slice(ตำแหน่งเริ่มต้น,ตำแหน่งสุดท้าย-1)
const data2 = [10,20,30,40,50]
console.log(data2)
const lastData = data2.slice(1,3)
/* มันจะไม่กระทบกับตัวแปรเดิม ดังนั้นเราต้องสร้างตัวแปรอื่นมาเก็บ*/
console.log(lastData)
