// การ loop Array
// for loop , foreach,ForOf
const data = [1,2,3,4,5,6]

// for(index = 0 ; index < data.length ; index++){
//     if(data[index]>=5) break
//     console.log(`ลำดับที่ ${index} = ${data[index]}`)
// }

// // ไม่สามารถใช้ break continue ได้
// data.forEach(element => {
//     console.log("ค่า = "+element)
// });

for(const index of data){
    if(index >= 4 ) break
    console.log(`สมาชิก Array data = ${index}`)

}

