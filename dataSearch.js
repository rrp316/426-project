export const handleAddressSearch = async () => {
    //get input from <input>
    let input = $(`#addressSearchInput`).val();

    //parse input for geocoding api
    input = parseInput(input);

    //call geocoding api and get latitude and longitude of city+state
    let geocodeResult = await callGeoCodeAPI(input);
    let latitude = geocodeResult['Latitude'];
    let longitude = geocodeResult['Longitude'];

    //call weather api 
    let weatherResult = await callWeatherAPI(latitude, longitude);
    let temp = weatherResult['temp'];
    temp = (temp * 9 / 5) + 32; //converting from Celsius to Fahrenheit
    temp = Math.round(temp * 100) / 100;
    let description = weatherResult['weather']['description'];
    let wind_spd = weatherResult['wind_spd'];
    wind_spd = wind_spd * 2.237; //converting from m/s to mph
    wind_spd = Math.round(wind_spd * 100) / 100;

    //update data.html
    $("#weatherCurrentConditions").text(description);
    $("#weatherCurrentTemp").text(`Temperature: ${temp} °F`);
    $("#weatherCurrentWindSpeed").text(`Wind speed: ${wind_spd} mph`);
};

$(document).ready(function () {
    $('#addressSearchBtn').on('click', handleAddressSearch);
});