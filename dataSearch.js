export const handleAddressSearch = async () => {
    let input = $(`#addressSearchInput`).val();
    input = parseInput(input);
    let result = await callGeoCodeAPI(input);
    let latitude = result['Latitude'];
    let longitude = result['Longitude'];
    console.log(`Latitude: ${latitude}`);
    console.log(`Longitude: ${longitude}`);
};

$(document).ready(function () {
    $('#addressSearchBtn').on('click', handleAddressSearch);
});