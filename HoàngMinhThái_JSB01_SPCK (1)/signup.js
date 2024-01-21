let signupbtn = document.getElementById("sigup-btn")
let backbtn = document.getElementById("back-btn")
signupbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let pw = document.getElementById("password")
    let confpw = document.getElementById("confirm-password")
    if(name.value.trim().length == 0 && email.value.trim().length == 0 && pw.value.trim().length == 0 && confpw.value.trim().length == 0){
        
    }
})