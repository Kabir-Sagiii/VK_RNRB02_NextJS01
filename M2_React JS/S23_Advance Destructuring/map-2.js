
let info = [{pname:"iphone",price:150000},
    {pname:"samsung galaxy",price:90000},
    {pname:"vivo v9",price:40000},
    {pname:"oppo",price:70000}]


  let latestData =info.map(function(element){
                var newPrice= element.price - 5000
                  element.price = newPrice
                    return element // [{pname:"iphone",price:145000},{pname:"samsung",price:85000}]
  })

  console.log(latestData)