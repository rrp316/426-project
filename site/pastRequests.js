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
    pastRequests = pastRequests['data']['result'];
    console.log(pastRequests);

    for (let i in pastRequests) {
        $('#pastRequestsParentDiv').append(`
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <p><span id="${i}_firstName">${pastRequests[i]['firstName']}</span> <span id="${i}_lastName">${pastRequests[i]['lastName']}</span></p>
                        <p><span id="${i}_address">${pastRequests[i]['address']}</span> <span id="${i}_city">${pastRequests[i]['city']}</span></p>
                        <p><span id="${i}_state">${pastRequests[i]['state']}</span> <span id="${i}_zip">${pastRequests[i]['zip']}</span></p>
                        <p>Description: <span id="${i}_description">${pastRequests[i]['description']}</span></p>
                    </div>
                </div>
                <button class="addToMyJobsBtn button is-link" id="${i}">Add to My Jobs</button>
                <br />
                <br />
            </div>
            <br />`);
    }
}