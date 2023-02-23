function login() {



    window.location = "search_add.html"
}

function logout() {
    window.location = "index.html"
}

function search1() {
    window.location = "search.html"
}

function add() {
    window.location = "product_add.html"
}

function back() {
    window.location = "search_add.html"
}



function addProduct() {
    //create an object to store
    product = { pname: pname.value, id: pid.value, batch: pbatch.value, price: pprice.value, box: pbox.value }

    //check the input id is alredy exist
    if (product.id in localStorage) {
        alert("product id alredy exist")
    }
    else {
        //access item from add and convert js type data ton JSON using JSON.stringify methode
        localStorage.setItem(product.id, JSON.stringify(product))
        alert("product added")

        window.location = "product_add.html"

    }
}





function search() {
    //access the value from the input window
    idse = s2.value

    //check the value of key is in the local storage

    if (idse in localStorage) {
        //if the key is in localstorage and that convert in to java script using JSON.parse methode and store in emp variable
        emp = JSON.parse(localStorage.getItem(idse))

        result1.innerHTML= `${emp.pname}`
        result2.innerHTML= `${emp.id}`
        result3.innerHTML= `${emp.batch}`
        result4.innerHTML= `${emp.price}`
        result5.innerHTML= `${emp.box}`
    }
    else {
        
        window.location = "search.html"
        alert("ID is not predent")
        
    }
}






