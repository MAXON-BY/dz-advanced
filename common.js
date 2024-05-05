const currencies = [
    {name: "USD", icon: "$", kurs: 3.23},
    {name: "EUR", icon: "€", kurs: 3.48},
    {name: "RUB", icon: "₽", kurs: 3.49*100},
]

function getKantor(sum, currency) {
    const actualCirrency = currencies.find(curr => curr.name === currency);

    if(!actualCirrency){
        return `Хера ты хочешь от меня? Не знаю такой валюты ${currency}` 
    }

    return `${setFixedSum(sum / actualCirrency.kurs)} ${actualCirrency.icon}`
}

function setFixedSum(sum){
    return sum.toFixed(2)
}

console.log(getKantor(40, "EUR"))