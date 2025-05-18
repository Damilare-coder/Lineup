document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        signUp();
    }
});

const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

let allManagers = []

const signUp = () => {
    if (coach.value == '' || email.value == '' || club.value == '' || password.value == '') {
        toast('Not that quick 😁, fill in the inputs', '#f00', '#fff')
        sub.innerHTML = '...loading'
        setTimeout(() => {
            sub.innerHTML = 'Create account'
        }, 1000)

    } else {

        sub.innerHTML = '...loading'
        setTimeout(() => {
            sub.innerHTML = 'Create account'
        }, 1500)
        console.log(allManagers);
        

    


    const mName = document.getElementById('coach').value;
    const mail = document.getElementById('email').value;
    const mClub = document.getElementById('club').value;
    const pass = document.getElementById('password').value;

    const userObj = { mName, mail, mClub, pass }

    allManagers.push(userObj)

    document.getElementById('coach').value = ''
    document.getElementById('email').value = ''
    document.getElementById('club').value = ''
    document.getElementById('password').value = ''

    localStorage.users = JSON.stringify(allManagers)

    // window.location.href = 'signin.html'

}
}