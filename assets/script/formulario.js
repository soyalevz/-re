const $form = document.querySelector('#form');
const $buttonAle = document.querySelector('#trucazo');

$form.addEventListener('submit', handleSubmit);

function handleSubmit (event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonAle.setAttribute ('href', `mailto:me@alejozxxz18.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)

    $buttonAle.click()
}








// const $btnSignIn= document.querySelector('.sign-in-btn'),
//       $btnSignUp = document.querySelector('.sign-up-btn'),  
//       $signUp = document.querySelector('.sign-up'),
//       $signIn  = document.querySelector('.sign-in');

// document.addEventListener('click', e => {
//     if (e.target === $btnSignIn || e.target === $btnSignUp) {
//         $signIn.classList.toggle('active');
//         $signUp.classList.toggle('active')
//     }

    
// });

