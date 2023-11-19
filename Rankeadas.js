saldoDeVitorias = calculoDeSaldo (310, 200)

function calculoDeSaldo(vitoria, derrotas){
    let resultado
    resultado = vitoria - derrotas
    return resultado
}

nivelDoHeroi(saldoDeVitorias)

function nivelDoHeroi(vitoriasGerais){
    let xp = vitoriasGerais
    // O motivo do sinal de = é para não ter burracos onde não há nível
    if (xp <= 10) {
        console.log(`O Herói tem saldo de ${saldoDeVitorias} vitórias está no nível de Ferro`)
    }else if((xp>=11)&&(xp<=20)){
        console.log(`O Herói tem saldo de ${saldoDeVitorias} vitórias está no nível de Bronze`)
    }else if((xp>=21)&&(xp<=50)){
        console.log(`O Herói tem saldo de ${saldoDeVitorias} vitórias está no nível de Prata`)
    }else if((xp>=51)&&(xp<=80)){
        console.log(`O Herói tem saldo de ${saldoDeVitorias} vitórias está no nível de Ouro`)
    }else if((xp>=81)&&(xp<=90)){
        console.log(`O Herói tem saldo de ${saldoDeVitorias} vitórias está no nível de Diamante`)
    }else if((xp>=91)&&(xp<=100)){
        console.log(`O Heróitem saldo de ${saldoDeVitorias} vitórias está no nível de Lendário`)
    }else if(xp>=101){
        console.log(`O Herói tem saldo de ${saldoDeVitorias} vitórias está no nível de Imortal`)
    }
}
//Acho que é isso