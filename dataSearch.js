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
    console.error.log(weatherResult);
};

$(document).ready(function () {
    $('#addressSearchBtn').on('click', handleAddressSearch);
});