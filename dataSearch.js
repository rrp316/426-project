export const handleAddressSearch = async () => {
    //get input from <input>
    let input = $(`#addressSearchInput`).val();

    //parse input for geocoding api
    input = parseInput(input);

    //call geocoding api and get latitude and longitude of city+state
    let geocodeResult = await callGeoCodeAPI(input);
    let latitude = geocodeResult['Latitude'];
    let longitude = geocodeResult['Longitude'];
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);

    //call weather api 
    let weatherResult = await callWeatherAPI(latitude, longitude);
    let temp = weatherResult['temp'];
    temp = (temp * 9 / 5) + 32; //converting from Celsius to Fahrenheit
    let description = weatherResult['weather']['description'];
    let wind_spd = weatherResult['wind_spd'];
    wind_spd = wind_spd * 2.237; //converting from m/s to mph
    wind_spd.toFixed(2); //rounding to 2 decimal places
    console.log(`temp: ${temp}`);
    console.log(`description: ${description}`);
    console.log(`wind_spd: ${wind_spd}`);
};

$(document).ready(function () {
    $('#addressSearchBtn').on('click', handleAddressSearch);
});