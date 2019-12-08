async function getActiveRequests() {
    const activeRequests = await axios({
        method: 'get',
        url: 'http://localhost:3000/public/requests',
    });

    return activeRequests;
}

export const handleAddRequestToMyJobs = async function () {
    /** TO-DO:
    * Raj if you can just fill out the below request with whatever
    * data you need, I can then figure out how to get that data from
    * the DOM. 
    */
    let resourceName;
    let userName = localStorage.getItem('un');
    let jwt = localStorage.getItem('jwt');
    const result = await axios({
        method: 'POST',
        url: `http://localhost:3000/account/${userName}/${resourceName}`,
        data: {
            data: {
                'firstName': firstName,
                'lastName': lastName,
                'address': address,
                'city': city,
                'state': state,
                'zip': zip,
                'description': description

            }
        },
        headers: { Authorization: `Bearer ${jwt}` }
    });

    await axios.delete(`http://localhost:3000/public/requests/${resourceName}`);
    //let me know if this delete works I haven't tested it

    //location.reload();
};

document.body.onload = async function () {
    let activeRequests = await getActiveRequests();
    activeRequests = activeRequests.data.result;

    for (let i in activeRequests) {
        $('#activeRequestsParentDiv').append(`
            <div class="card">
                <div class="card-content">
                    <div class="content">
                        ${activeRequests[i]['address']} ${activeRequests[i]['city']}
                        <br />
                        ${activeRequests[i]['state']} ${activeRequests[i]['zip']}
                    </div>
                </div>
            </div>
            <br />`);
    }
}