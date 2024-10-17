//
let user = JSON.parse(localStorage.getItem('login_success')) || false

//
if(!user) {
    Swal.fire({
        icon: 'info',
        title: 'Iniciar sesión',
        text: 'Debes iniciar sesión para acceder a esta página',
        confirmButtonText: 'Ir a iniciar sesión'

    }).then((result) => {
        if(result.isConfirmed){
            window.location.href = 'login.html'
        }
    });
}

let logout = document.querySelector('#logout')
logout.addEventListener('click' , () => {
    Swal.fire({
        icon: 'info',
        title: 'Cerrar Sesión',
        text:'¿Estas seguro de que quieres cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Si, cerrar sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            localStorage.removeItem('login_success');
            Swal.fire({
                icon: 'success',
                title: 'Sesión Cerrada',
                text: 'Tu sesion ha sido cerrada correctamente',
                confirmButtonText: 'ok'
            }).then(() => {
                window.location.href = 'login.html';
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = button.getAttribute('data-price');

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            const item = { product, price };

            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));

            Swal.fire({
                title: 'Producto añadido!',
                text: `${product} ha sido añadido al carrito`,
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        });
    });});


