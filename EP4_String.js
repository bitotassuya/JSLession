// ทำงาน String แบบ 1 บรรทัด
const Address = 'ชื่อลูกค้า : NonSensei ที่อยู่ : อยู่ที่นึงในประเทศไทน เบอร์ติดต่อ : 09999999'
console.log(Address+"\n");


// ทำงานกับ String หลายบบรทัด Multi line
const Address2 = `ชื่อลูกค้า : NonSensei 
ที่อยู่ : อยู่ที่นึงในประเทศไทน 
เบอร์ติดต่อ : 09999999`
console.log(Address2+"\n");

//แทรกค่าตัวแปล interpretation 
let CustomerName ="เด็กชายซาสึเกะ"
let CustomerAddress = "สักที่ในประเทศอเมริกา"
let CustomerContract = "088888888"

const Address3 = `ชื่อลูกค้า : ${CustomerName} 
ที่อยู่ : ${CustomerAddress}
เบอร์ติดต่อ : ${CustomerContract}`
console.log(Address3+"\n");
