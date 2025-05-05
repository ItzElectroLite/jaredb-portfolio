
let username = propmt("What's your name?")

function greeting(name){
    if(name === ""){
        document.getElementById("greeting").textContent = "Hello, stranger!"

        else {
            document.getElementById("greeting").textContent = "Hello," +name;
        }
    }
}

greetingsUsername("")