//Add and Del member in Array
//push,pop,shift,unshift

//push function
const data = [10,20,30]
console.log(data)

data.push(...[40,"Apple","lemon"])
console.log(data)

//pop function
data.pop()
console.log(data)

//Shift Function
data.shift()
console.log(data)

//UnShift Function
data.unshift(...[100,200])
console.log(data)