var persons = [{
	name: 'Vasyan', age: 21
}, {
	name: 'Kolyan', age: 22
}, {
	name: 'Mashka', age: 17
}];

persons.sort(function(a, b){ /* по возрасту */
    return a.age-b.age
})



persons.sort(function(a, b){
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase() /* по алфавиту */
    if (nameA < nameB)
    return -1
    if (nameA > nameB)
    return 1
    return 0 
})
