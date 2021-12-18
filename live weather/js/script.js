fetch('http://api.openweathermap.org/data/2.5/weather?q=Kramatorsk&appid=8b065149c56c557330ad8f63308c625d')
    .then(function(resp){
        return resp.json()
    })
    .then(function (data) {
        console.log(data);
        document.querySelector('.country').innerHTML = 'Country: ' + data.sys.country
        document.querySelector('.cityName').innerHTML = 'City name: ' + data.name
        document.querySelector('.temperature').innerHTML = 'Temperature: ' + Math.floor((data.main.temp - 273))+ '&deg'
        document.querySelector('.feelsLike').innerHTML = 'Feels like: ' + Math.floor((data.main.feels_like - 273))+ '&deg'
        document.querySelector('.wind').innerHTML = 'Wind: ' +   data.wind.speed + ' м/с'
    })
    .catch(function() {

    });
