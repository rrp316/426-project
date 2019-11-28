async function callWeatherAPI(latitude, longitude) {
    let u = `https://api.weatherbit.io/v2.0/current?key=2d45382b691e43a1b23c460134417d3c&lat=${latitude}&lon=${longitude}`;
    let result = await axios({
        method: 'get',
        url: u,
    });

    result = result['data']['data'][0];
    return result;
}