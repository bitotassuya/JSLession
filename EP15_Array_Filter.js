//Array Filter
const data = [
  { name: "นนท์", salary: 25000, department: "โปรแกรมเมอร์" },
  { name: "มาย", salary: 10000, department: "เด็กฝึกงาน" },
  { name: "เม", salary: 40000, department: "ฝ่ายขาย" },
  { name: "หมู", salary: 32000, department: "ที่ปรึกษาโปรเตค" },
  { name: "แบงค์", salary: 15000, department: "โปรแกรมเมอร์" },
];
const result = data
  .filter((element) => element.salary > 10000)
  .filter((element) => element.department === "โปรแกรมเมอร์");

console.log(result);
