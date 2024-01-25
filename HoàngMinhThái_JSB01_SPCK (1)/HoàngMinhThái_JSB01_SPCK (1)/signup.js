let signupbtn = document.getElementById("signup-btn")
let backbtn = document.getElementById("back-btn")
signupbtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let pw = document.getElementById("password")
    let confpw = document.getElementById("confirm-password")
    if(name.value.trim().length == 0 || email.value.trim().length == 0 || pw.value.trim().length == 0 || confpw.value.trim().length == 0) {
        alert("Please complete all the information.")
    } else if(name.value.trim().length < 5) {
        alert("Your name must have at least 5 characters.")
    } else if(pw.value.trim().length < 8) {
        alert("Your password must have at least 8 characters.")
    } else if(confpw.value != pw.value) {
        alert("Please confirm the same password.")
    } else {
        if(localStorage.users) {
            let users = JSON.parse(localStorage.users)
            // Kiểm tra xem email đã tồn tại trong danh sách người dùng hay chưa
            let existingUser = users.find(user => user.email === email.value.trim())
            if(existingUser) {
                alert("This email is already registered.")
            } else {
                users.push({
                    email: email.value.trim(),
                    pw: pw.value.trim()
                })
                localStorage.setItem("users", JSON.stringify(users))
                location.replace("./login.html")
            }
        } else {
            localStorage.setItem("users", JSON.stringify([
                {
                    email: email.value.trim(),
                    pw: pw.value.trim()
                }
            ]))
            location.replace("../login.html")
        }
    }
})