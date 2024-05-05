const dice = (num) => {
    return Math.floor(Math.random() * num) + 1;
}

console.log("d4", dice(4));
console.log("d6", dice(6));
console.log("d8", dice(8));
console.log("d10", dice(10));
console.log("d12", dice(12));
console.log("d16", dice(16));
console.log("d20", dice(20));