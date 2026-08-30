
var info = [100,200,{address:{
    cities :["hyd","pune","mumbai","banglore"]
}}]

let [, ,{address:{cities:[, ,city]}}] = info

// let [a,b,{city}] = info
// console.log(a,b,c,x)

function f1(){

    console.log(city) // hyd
}


function f2(currentCity){
  console.log(currentCity)
}


function f3(){
   //access city hyd and return it
    return city //hyd
}

f1()
f2(city)
console.log(f3())