const key = "Sw4AQmKQPfAYxl0xZNKPHmW6LADQkBdI";

const getWeather = async (id) => {
    const base = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    console.log(data);
}

const getCity = async (city) => {
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
};
// getCity("Milton Keynes")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));
getWeather("324866");