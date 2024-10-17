//asignar los datos del formulario a una variable
let loginForm = document.querySelector('#loginForm')

//asiganr un evento 
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value 
    
    let Users = JSON.parse(localStorage.getItem('users')) ||  []

    let validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        Swal.fire({
        icon: 'error',
        title:'Error de Datos',
        text: 'El usuario y/o clave son incorrectos , Intentalo de nuevo'
        
        })
        return
    }
    Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión Exitoso',
        text:  `Bienvenido de nuevo ${validUser.name}`
    })
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href ='index.html'
})
