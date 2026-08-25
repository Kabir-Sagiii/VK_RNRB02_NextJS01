 
 let data = ["aditya","sneha","raj","vikram","kabir"] // array


     //access the array value
     let value = data[3]
     let name2 = data[4]

    //  console.log(value,name2)

     //Destructuring of array
    let [name,name1,x,y,a] = data

    // console.log(name1,y)



    var user = {
        username:"Vaishnavi",
        gender:"female",
        id:101
    }

    //access object properties value

      console.log(user.gender)
      console.log(user.username)

    //Object Destructuring 

    let {id,gender,username} = user

    console.log(gender,id,username)



    var info = {

        name:"",
        address : {
            city :{
                cityName:"hyd",
                cityCode:""
            }
        }
    }

    //without Destructuring
      info.address.city.cityName

    //Destructure

    var info = [100,200,["raj","amir",["hello"]]]

     //without Desctruturing

        info[2][2][0]

    //Destructure


    [100,{name:{firstName:"",lastName:"",address:[100,200]}}]