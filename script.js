const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5932bcc57emsh6fdf369313166dep183faajsn12d1c5beaa71',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getweather = async (city) => {
    try {

        const response = await fetch(url + city, options);
        const result = await response.json();
        console.log(result);
        cityName.innerHTML = city
        temp.innerHTML = result.temp
        humidity.innerHTML = result.humidity
        windspeed.innerHTML = result.wind_speed

        sunrise.innerHTML = result.sunrise
        sunset.innerHTML = result.sunset
        wind_degrees.innerHTML = result.wind_degrees
    } catch (error) {
        console.error(error);
    }
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)

})
getweather('Delhi')