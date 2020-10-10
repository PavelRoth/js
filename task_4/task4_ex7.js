let arr = [' hello darkness   my old   friend ', ' i\'ve come to   talk  with   you again    ']
Array.from(arr)

let trueArr = arr.map(function (x) {
    return x.toString().replace(/ +/g, ' ').trim()
})

console.log(trueArr) 