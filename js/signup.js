let signupForm = document.querySelector("#signupForm");

signupForm.addEventListener('submit' , (e) => { 

    e.preventDefault()


    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value 
    let password =document.querySelector('#password').value

    let Users = JSON.parse(localStorage.getItem('users')) || []


    let isUserRegistered = Users.find(user => Users.email=== email)

    if(isUserRegistered) {
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'El correo ya se encuentra en uso, usa otro diferente'
        })
        return
    }


    //Almacenaremos los datos del usuario
    Users.push({name, email, password})
    localStorage.setItem('users' , JSON.stringify(Users))
    Swal.fire({
        icon:'success',
        title: 'Registro exitosos',
        text: 'Tu registro se ha creado con exito'

    }).then(() =>{
        window.location.href = "login.html"
})
})