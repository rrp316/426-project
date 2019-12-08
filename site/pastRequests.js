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
    console.log(pastRequests);
    /*for (let i in activeRequests) {
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
    }*/
}