document.addEventListener('keyword', (e) => {
    if (e.key == 'Enter') {
        addPlayer();
    }

})

const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position,
        stopOnFocus: true,
        style: {
            background,
            color,
        },
        onClick: function () { }
    }).showToast();
}


const starters = []

localStorage.setItem('starters', JSON.stringify(starters))


const addPlayer = () => {
    if (playerName.value === '' || playerNum.value == '' || roleSelect.value == '') {
        toast('Player information is not complete, please fill in the inputs', '#f00', '#fff')

        addPlayerBtn.innerHTML = '...loading'
        setTimeout(() => {
            addPlayerBtn.innerHTML = 'Add player to lineup'
        }, 1000)


    } else {
        addPlayerBtn.innerHTML = '...loading'
        setTimeout(() => {
            addPlayerBtn.innerHTML = 'Add player to lineup'
        }, 1500)
        document.getElementById('addedSound').play();

        const pName = document.getElementById('playerName').value;
        const pNum = document.getElementById('playerNum').value;
        const role = document.getElementById('roleSelect').value;

        const player = { pName, pNum, role }
        // console.log(player);

        let added = starters.find(eachPlayer => eachPlayer.pName == pName && eachPlayer.pNum == pNum && eachPlayer.role == role);
        // console.log(added);

        if (added == undefined) {
            starters.push(player)
            toast('Player added successfully 😁', '#006400', '#fff')
            console.log(starters);

            document.getElementById('playerName').value = ''
            document.getElementById('playerNum').value = ''
            document.getElementById('roleSelect').value = ''

            localStorage.players = JSON.stringify(starters)
        

        } else {
            toast('Account already exists', '#00f', '#fff')
            // setTimeout(() => {
            //     // window.location.href = 'signin.html'
            // }, 2000)

        }

        starters.push(player)
        console.log(starters);




    }
}