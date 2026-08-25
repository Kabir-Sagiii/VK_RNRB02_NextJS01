
// Nested Objects
 var obj1 = {
    name :{
        first:"Rajiv",
        last:"Patel"
    },
    gender:"male",
    address :{
        city :{
            cityName:"pune",
            pincode:888888
        }
    }
 }

 const {name:{last:lastName},gender,address:{city:{pincode:pin}}} = obj1

 //without Destructuring
 console.log(obj1.name.last)
 console.log(obj1.address.city.pincode)

console.log("")

//after Destructuring
 console.log(lastName)
 console.log(pin)


//Nested Array Destructuring

//level1
var info = [100,200,300,["a","b","c"]]
const [,,,[value1,b]] = info



//level2
var info = [100,200,300,["a","b","c",[99,88,66,function f1(){
                                                console.log("JS looks Awesome")}]]]

const [, , ,[,,,[,,,f1]]] = info


//without Destructuring
// console.log(info[3][1])
// info[3][3][3]()

//After Destructuring
// console.log(b)
// console.log(value1)

// console.log(blueArray)

// f1()


function changePin(newPin,oldPin){
console.log(newPin,oldPin)
}

changePin(9999,pin)

