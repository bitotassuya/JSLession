// Rest Parameter ต้องเปลี่ยนพารามิเตอร์เป็นอาร์เรย์
// เพื่อที่จะสามารถใช้งานพารามิเตอร์เยอะๆได้ กรณ๊เรียกใช้หลายที่
Summation=(...ArrayRest)=>{
    let Total = 1
    for(let i of ArrayRest)
        Total*=i
    return Total
}
console.log(Summation(5,6,7))
