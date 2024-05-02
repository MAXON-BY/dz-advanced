const objs = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 1, name: "Вася"},
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
