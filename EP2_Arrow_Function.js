const { Agent } = require("http");

// old function
function FullName(FName,LName){
    return FName+" "+LName;
}

console.log(FullName("Jirapong","Jareansong"));

// Arrow Function

NewFullName=(fName,lName)=>fName+" "+lName
console.log(NewFullName("Jirapong","Jareansong"))

SetAge=(Age)=>"อายุ = "+ Age
console.log(SetAge(27))