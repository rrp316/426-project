export const handleAddressSearch = async () => {
    //get input from <input>
    let input = $(`#addressSearchInput`).val();

    //parse input for geocoding api
    input = parseInput(input);

    //call geocoding api and get latitude and longitude of city+state
    let geocodeResult = await callGeoCodeAPI(input);
    let latitude = geocodeResult['DisplayPosition']['Latitude'];
    let longitude = geocodeResult['DisplayPosition']['Longitude'];

    //call weather api 
    let weatherResult = await callWeatherAPI(latitude, longitude);
    let temp = weatherResult['temp'];
    temp = (temp * 9 / 5) + 32; //converting from Celsius to Fahrenheit
    temp = Math.round(temp * 100) / 100;
    let description = weatherResult['weather']['description'];
    let wind_spd = weatherResult['wind_spd'];
    wind_spd = wind_spd * 2.237; //converting from m/s to mph
    wind_spd = Math.round(wind_spd * 100) / 100;

    //get bounded box from geoCodeResult
    let bottomRight_lat = geocodeResult['MapView']['BottomRight']['Latitude'];
    let bottomRight_long = geocodeResult['MapView']['BottomRight']['Longitude'];
    let topLeft_lat = geocodeResult['MapView']['TopLeft']['Latitude'];
    let topLeft_long = geocodeResult['MapView']['TopLeft']['Longitude'];

    //call traffic api
    let trafficResultArr = await callTrafficAPI(bottomRight_lat, bottomRight_long, topLeft_lat, topLeft_long);
    //sorting traffic results for most severe incidents first
    trafficResultArr.sort(function (a, b) {
        return b['severity'] - a['severity'];
    })

    let incidentCount = 5;
    if (trafficResultArr.length < incidentCount) {
        incidentCount = trafficResultArr.length;
    }

    //update data.html

    //first clear old traffic list data
    $("#trafficList").empty()
    //then add in traffic data
    for (let i = 0; i < incidentCount; i++) {
        $("#trafficList").append(`<li>${trafficResultArr[i]['shortDesc']}</li>`);
    }
    $("#weatherCurrentConditions").text(description);
    $("#weatherCurrentTemp").text(`Temperature: ${temp} °F`);
    $("#weatherCurrentWindSpeed").text(`Wind speed: ${wind_spd} mph`);
};

$(document).ready(function () {
    $('#addressSearchBtn').on('click', handleAddressSearch);
});