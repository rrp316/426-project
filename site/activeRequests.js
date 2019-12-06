//TO-DO: fill out the axios request to retrieve active requests

async function getActiveRequests() {
    const activeRequests = await axios({
        method: 'get',
        url: '',
    });
    return activeRequests;
}

document.body.onload = async function () {
    let activeRequests = await getActiveRequests();

    //then Josh can add it to the DOM
}