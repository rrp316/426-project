async function callWeatherAPI(latitude, longitude) {
    let u = `https://api.darksky.net/forecast/71cea83be9deb275e13b11f1723a505a/${latitude},${longitude}`;
    let result = await axios({
        method: 'get',
        url: u,
        mode: 'no-cors',
    });

    return result;
}