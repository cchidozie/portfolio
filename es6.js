//TEMPLATE LITERALS
// let word1 = 'dozie'
// let word2 = 'Chidozie'
// let num1 = 1
// let num2 = 12

// const fullname = `${num1 + num2} ${word2}`

// console.log(fullname)

//OBJECT DESTRUCTURING
// const person = {
//   name: 'Chidozie',
//   lName: 'Chukwugbo',
//   age: 28,
//   city: 'Bariga',
//   state: 'Lagos',
//   phone: 23481144860119,
// }

// const {
//   name: oruko,
//   lName: oruko2,
//   age: aho,
//   city: obodo,
//   state: obodo2,
//   phone: phonu,
// } = person

// console.log(oruko, phonu)

//ARRAY DESTRUCTURING
// let [English, Scottish, German, Pourtugese] = [
//   'Chelsea',
//   'Celtic',
//   'Bayern',
//   'Porto',
// ]

// console.log(English)

// //OBJECT LITERAL
// function newDrako(city, state) {
//   const name = { city, state }
//   console.log(name)
// }

// newDrako('huncho', 'jack')

// //for of
// let moneys = [10000, 50000, 6000]

// for (let money of moneys) {
//   let newAmount = (money += 5000)
//   console.log(newAmount)
// }

//SPREAD OPERATOR

// let elem1 = {
//   name: 'chidozie',
//   age: 28,
// } 

// let elem2 = { ...elem1 }

// console.log(elem2);


//DEFAULT PARAMS
 function add(numArr = []){
  let total = 0
  numArr.forEach((elem) =>{
   total+= elem
  })
  console.log(total);
 }

 add()


 this