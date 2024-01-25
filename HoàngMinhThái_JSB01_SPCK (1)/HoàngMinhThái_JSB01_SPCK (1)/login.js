// let loginbtn = document.getElementById("btn")
// // loginbtn.addEventListener("submit", (e) => {
// //     e.preventDefault()
// //     let email = document.getElementById("email")
// //     let pw = document.getElementById("password")
  
// //     if (email.value.trim().length == 0 || pw.value.trim().length == 0) {
// //         alert("Please enter both email and password.")
// //     } else {
// //         if (localStorage.users) {
// //             let users = JSON.parse(localStorage.users)
// //             let existingUser = users.map(index => index.email === email.value.trim() && index.pw === pw.value.trim())
// //             if (existingUser[0]==true) {
// //                 location.replace("./index(logout).html")
// //             } else {
// //                 alert("Incorrect email or password. Please try again.")
// //             }
// //         } else {
// //             alert("No users found. Please sign up first.")
// //         }
// //     }
// // })
let login = document.getElementById('btn')
login.addEventListener("submit", (e) => {
    e.preventDefault()

    let users = JSON.parse(localStorage.users)

    let email = document.getElementById("email")
    let pw = document.getElementById("password");

    let check = users.map(index => index.email == email.value.trim() && index.pw == pw.value.trim())

    if (check[0] == true){
        window.location.href = "../logout.html"
    } else {
        alert("Please input again")
    }
})