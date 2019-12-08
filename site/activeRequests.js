async function getActiveRequests() {
    const activeRequests = await axios({
        method: 'get',
        url: 'http://localhost:3000/public/requests',
    });

    return activeRequests;
}

export const handleAddRequestToMyJobs = async function (event) {
    let resourceName = event.currentTarget.id;
    let userName = localStorage.getItem('un');
    console.log(`resourceName: ${resourceName}`);
    console.log(`userName: ${userName}`);
    let jwt = localStorage.getItem('jwt');
    let firstName = $(`#${resourceName}_firstName`).text();
    let lastName = $(`#${resourceName}_lastName`).text();
    let address = $(`#${resourceName}_address`).text();
    let city = $(`#${resourceName}_city`).text();
    let state = $(`#${resourceName}_state`).text();
    let zip = $(`#${resourceName}_zip`).text();
    let description = $(`#${resourceName}_description`).text();
    /*console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(zip);
    console.log(description);*/


    await axios({
        method: 'POST',
        url: `http://localhost:3000/user/${userName}/requests/${resourceName}`,
        data: {
            data: {
                'firstName': firstName,
                'lastName': lastName,
                'address': address,
                'city': city,
                'state': state,
                'zip': zip,
                'description': description

            },
            type: "merge"
        },
        headers: { Authorization: `Bearer ${jwt}` }
    });

    await axios.delete(`http://localhost:3000/public/requests/${resourceName}`);

    window.location.href = "myJobs.html";
};

document.body.onload = async function () {
    let activeRequests = await getActiveRequests();
    activeRequests = activeRequests.data.result;

    for (let i in activeRequests) {
        $('#activeRequestsParentDiv').append(`
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        <p><span id="${i}_firstName">${activeRequests[i]['firstName']}</span> <span id="${i}_lastName">${activeRequests[i]['lastName']}</span></p>
                        <p><span id="${i}_address">${activeRequests[i]['address']}</span> <span id="${i}_city">${activeRequests[i]['city']}</span></p>
                        <p><span id="${i}_state">${activeRequests[i]['state']}</span> <span id="${i}_zip">${activeRequests[i]['zip']}</span></p>
                        <p>Description: <span id="${i}_description">${activeRequests[i]['description']}</span></p>
                    </div>
                </div>
                <button class="addToMyJobsBtn button is-link" id="${i}">Add to My Jobs</button>
                <br />
                <br />
            </div>
            <br />`);
    }

    $('.addToMyJobsBtn').on('click', handleAddRequestToMyJobs);
}