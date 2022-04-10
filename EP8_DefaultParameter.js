 //Defaulth Parameter
 getDataCustomer=(CustomerName,CustumerAddress = "กรุงเทพมหานคร")=>{
     const address =`ชื่อลูกค้า : ${CustomerName}
     ที่อยู่ : ${CustumerAddress}`
     return address

    }
console.log(getDataCustomer("ก้องห้วยไร่"));
console.log(getDataCustomer("โจโจ้","ยะลา"))