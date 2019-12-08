//TO-DO: fill out the axios request to retrieve past requests
async function getPastRequests() {
    let jwt = localStorage.getItem('jwt');
    const pastRequests = await axios({
        method: 'get',
        url: `http://localhost:3000/private/log`,
        headers: { Authorization: `Bearer ${jwt}` }
    });
    return pastRequests;
}

document.body.onload = async function () {
    let pastRequests = await getPastRequests();

    //then Josh can add it to the DOM
}