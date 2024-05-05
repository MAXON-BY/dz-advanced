const objs = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 1, name: "Игар"},
    {id: 2, name: "Петя"},
]

// без SET
let newObj = []
objs.map(obj => {
    if(!newObj){
        newObj.push(obj)
    }

    if(!newObj.find(n => n.id === obj.id && n.name === obj.name)) {
        newObj.push(obj)
    }
})

console.log("noSET", newObj)


// c использованием SET
const uniqueize = () => {
    if(!objs){
        return
    }

    const stringArr = objs.map(el => JSON.stringify(el))
    const uniqStringArr = Array.from(new Set(stringArr));
    return uniqStringArr.map(item => JSON.parse(item));
  }

 console.log("withSET", uniqueize())