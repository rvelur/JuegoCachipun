
let jugadas = ['piedra', 'papel', 'tijeras']
let puntajeUser = 0;
let puntajeMaquina = 0;

let numeroJugadas = parseInt(prompt("Cuantas veces deseas jugar en este torneo?"))

for (let i = 0; i < numeroJugadas; i++ ) {
    let jugadaUser = prompt('Ingrese la jugada que deseas jugar (piedra, papel, tijeras): ').toLowerCase()
    
    if (!jugadas.includes(jugadaUser)) {
        alert ('Esa no es una opcion valida')
    }

    let indiceMaquina = Math.floor(Math.random() * jugadas.length)
    
    let jugadaMaquina = jugadas[indiceMaquina]

    if(jugadaUser ===  jugadaMaquina) {
        alert( `Empate! - La maquina elige ${jugadaMaquina} y tu elegiste ${jugadaUser}`)
    } else if (
        (jugadaUser ===  'piedra' && jugadaMaquina ==='tijeras') ||
        (jugadaUser ===  'tijeras' && jugadaMaquina==='papel') ||
        (jugadaUser ===  'papel' && jugadaMaquina==='piedra') 
    ){   
        puntajeUser +=1;
        alert( `Has ganado! - La maquina elige ${jugadaMaquina} y tu elegiste ${jugadaUser} `)
    }else{
        puntajeMaquina +=1;
        alert(`La máquina ha ganado. - La maquina elige ${jugadaMaquina} y tu elegiste ${jugadaUser} `)
    }

}


if(puntajeUser === puntajeMaquina) {
    alert(`Empataron el Torneo puntajes: Jugador ${puntajeUser} - Maquina ${puntajeMaquina}`)
}else if (puntajeUser > puntajeMaquina){
    alert (`Ganaste el Torneo puntajes: Jugador ${puntajeUser} - Maquina ${puntajeMaquina}`)
}else{
    alert(`Perdiste el Torneo puntajes: Jugador ${puntajeUser} - Maquina ${puntajeMaquina}`)
}
