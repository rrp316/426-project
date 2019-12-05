const statesMap = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American+Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District+Of+Columbia",
    "FM": "Federated+States+Of+Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New+Hampshire",
    "NJ": "New+Jersey",
    "NM": "New+Mexico",
    "NY": "New+York",
    "NC": "North+Carolina",
    "ND": "North+Dakota",
    "MP": "Northern+Mariana+Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto+Rico",
    "RI": "Rhode+Island",
    "SC": "South+Carolina",
    "SD": "South+Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin+Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West+Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}


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

async function callWeatherAPI(latitude, longitude) {
    let u = `https://api.weatherbit.io/v2.0/current?key=2d45382b691e43a1b23c460134417d3c&lat=${latitude}&lon=${longitude}`;
    let result = await axios({
        method: 'get',
        url: u,
    });

    result = result['data']['data'][0];
    return result;
}

//s is of the form: Chapel+Hill+North+Carolina
//or: Raleigh+NC+USA
function spellOutFullStateName(s) {
    var firstIndex = -1;
    var firstIndexSet = false;
    var secondIndex = -1;

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c.charCodeAt(0) == 43) {
            if (!firstIndexSet) {
                firstIndex = i;
                firstIndexSet = true;
            } else {
                secondIndex = i;
                break;
            }
        }
    }

    let state = s.substring(firstIndex + 1, secondIndex);

    if (state.length > 2) {
        return s;
    } else {
        return s.substring(0, firstIndex + 1) + statesMap[state];
    }
};

//expects input like: Chapel+Hill+North+Carolina
async function callNewsAPI(s) {
    const apiKey = '71ea46e41b244d18bf28feb232a6a2b2';
    const searchtext = spellOutFullStateName(s);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    let result = await axios({
        method: 'get',
        url: `https://newsapi.org/v2/everything?q=${searchtext}&from=${yyyy}-${mm}-${dd}&sortBy=popularity&apiKey=${apiKey}`,
    });

    result = result['data']['articles'];
    return result;
}
