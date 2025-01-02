(async function () {
    response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Wembley,au&APPID=b6629ac4d76f7b97acd5b7745d577038&units=metric")
    test = await response.json()
    console.log("Temp:", test.main.temp)
    console.log("Humidity:", test.main.humidity)
    console.log("Wind Speed:", test.wind.speed)
})();