function login()
{
    


    window.location="search_add.html"
}

function logout()
{
    window.location="login.html"
}

function search1()
{
    window.location="search.html"
}

function add()
{
    window.location="product_add.html" 
}

function back()
{
    window.location="search_add.html" 
}



function addProduct()
{
    //create an object to store
    product={pname:pname.value,id:pid.value,batch:pbatch.value,price:pprice.value,box:pbox.value}

    //check the input id is alredy exist
    if(product.id in localStorage)
    {
        alert("product id alredy exist")
    }
    else
    {
         //access item from add and convert js type data ton JSON using JSON.stringify methode
          localStorage.setItem(product.id,JSON.stringify(product))
          
    }
}  





function search()
{
    //access the value from the input window
    vl=sea.value

    //check the value of key is in the local storage

    if(vl in localStorage)
    {    
        //if the key is in localstorage and that convert in to java script using JSON.parse methode and store in emp variable
        pro=JSON.parse(localStorage.getItem(vl))

        result.innerHTML=`<h3>NAME: ${pro.pname} <h3>ID: ${pro.id} <h3>DESIGNATION: ${pro.batch} <h3>SALARY: ${pro.price} <h3>EXPERIANCE: ${pro.box}   `
    }
    else
    {    

        result.innerHTML=""
        //if the id is not present print an alert message
        alert("the ID is not present")
    }
}

function alert()
{
    alert("something wrong ....its not work")
}