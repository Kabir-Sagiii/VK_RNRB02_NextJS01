
//object Destructuring

var user = {
    name:"sagar",
    gender:"male",
    id:101
}

let {id,name,gender} = user

function getId(){
   console.log(user.id)
   console.log(id)
}

function display(){
console.log(user.name,user.gender,user.id)
console.log(id,name,gender)
}


getId()
display()

console.log("")
console.log("")



// Array Destructuring

let data = [10,function(xValue){console.log("fun is called",xValue)},20,30,true,false,"reactjs","JS"]

     data[1]("js is so simple")

 let [x,myfun,z,a,,c,d] = data

 myfun(99.99)

 console.log(data[5])
 console.log(c)

 function f1(){

    console.log(data[6])
    console.log(d)
 }
 f1()

 function f2(){
    console.log(data[3])
    console.log(data[5])
    console.log(a)
    console.log(c)
 }
 f2()