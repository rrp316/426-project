//TO-DO: fill out the axios request to retrieve past requests
async function getPastRequests() {
    const pastRequests = await axios({
        method: 'get',
        url: '',
    });
    return pastRequests;
}

document.body.onload = async function () {
    let pastRequests = await getPastRequests();

    //then Josh can add it to the DOM
}