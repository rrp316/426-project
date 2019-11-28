//given an input string like: Chapel Hill, North Carolina
//output it as: Chapel+Hill+North+Carolina
function parseInput(s) {
    let words = [];
    let currentWord = [];
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c != ' ' && c != ',') {
            currentWord.push(c);
        } else if (currentWord.length != 0) {
            let string = currentWord.join("");
            words.push(string);
            currentWord = [];
        }
    }

    if (currentWord.length != 0) {
        let string = currentWord.join("");
        words.push(string);
    }

    let result = '';
    words.forEach(e => {
        result += e;
        result += '+';
    });
    result = result.substring(0, result.length - 1);

    return result;
};

//expects input like: Chapel+Hill+North+Carolina
async function callGeoCodeAPI(s) {
    const app_id = '3boscW8lytN3EJTQTIBS';
    const app_code = 'r9Lizz8pwlpdqNNBgVnAfA';
    const searchtext = s;
    let result = await axios({
        method: 'get',
        url: `https://geocoder.api.here.com/6.2/geocode.json?app_id=${app_id}&app_code=${app_code}&searchtext=${searchtext}`,
    });

    result = result['data']['Response']['View'][0]['Result'][0]['Location'];
    return result;
}

async function callTrafficAPI(bottomRight_lat, bottomRight_long, topLeft_lat, topLeft_long) {
    const key = 'QCmzZj8Y6Zcewop11j5TW2yCffuV7IaY';
    let result = await axios({
        method: 'get',
        url: `http://www.mapquestapi.com/traffic/v2/incidents?key=${key}&boundingBox=${topLeft_lat},${topLeft_long},${bottomRight_lat},${bottomRight_long}`,
    });

    return result['data']['incidents'];
}