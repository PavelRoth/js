function makeProfileTimer() {
    let a = performance.now()
    return function () {
        let b = performance.now()
        return (b - a)
    }
}

let timer = makeProfileTimer()
alert('Замеряем время работы этого alert');  //некий код, время выполнения которого мы хотим измерить с высокой точностью
alert(timer()); //alert должен вывести время в микросекундах от выполнения makeProfileTimer до момента вызова timer(), 
                // т. е. измерить время выполнения alert