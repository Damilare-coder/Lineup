const players = []

const addPlayers = () =>{
    if (player.value===''){
        alert('Name cannot be empty')
    } else{
        players.push(player.value)
        document.getElementById('player').value = ''
        console.log(players);
        

        for(i=0; i<players.length; i++){
        
            starters.innerHTML = ""
            for(let i = 0; i < players.length; i++){

                starters.innerHTML += `
                <p>${i + 1}. ${players[i]}</P>
                `
            }

        }

    }
}