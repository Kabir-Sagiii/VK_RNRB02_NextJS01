
var data = [10,20,30,40,50]

 var filteredArray =data.filter(function(element,index){
            var result   =  element > 20
             return result // [30,40,50]
 })

 console.log(filteredArray)

 var info = [{name:"raj",gender:"male"},
    {name:"sneha",gender:"female"},
    {name:"rishvika",gender:"female"}]

    let femaleData = info.filter(function(element){

              return element.gender =="male"
    })

    console.log(femaleData)