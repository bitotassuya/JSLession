// เรียกใช้ Object
const userName2 = "NonSensei"
const userAge2 = 27
const userAddress2 = "Yala"

const CustomerObject2 = {
    userName2,
    userAge2,
    userAddress2,
    ShowData(){
        console.log("ข้อมูลลูกค้า = "+this.userName2)
    }
}
CustomerObject2.ShowData()