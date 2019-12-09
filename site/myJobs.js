async function getMyJobs() {
    let userName = localStorage.getItem('un');
    let jwt = localStorage.getItem('jwt');
    const jobs = await axios({
        method: 'get',
        url: `http://localhost:3000/user/${userName}/requests`,
        headers: { Authorization: `Bearer ${jwt}` }
    });
    return jobs;
}

// remove the request because the technician says they cannot do it, 
// not because they finished it
export const handleRemoveRequestFromMyJobs = async function () {
    // this should end up back in active requests
    let resourceName = event.currentTarget.id;
    let jwt = localStorage.getItem('jwt');
    let userName = localStorage.getItem('un');
    let firstName = $(`#${resourceName}_firstName`).text();
    let lastName = $(`#${resourceName}_lastName`).text();
    let address = $(`#${resourceName}_address`).text();
    let city = $(`#${resourceName}_city`).text();
    let state = $(`#${resourceName}_state`).text();
    let zip = $(`#${resourceName}_zip`).text();
    let description = $(`#${resourceName}_description`).text();
    console.log(resourceName);
    console.log(userName);
    console.log(jwt);
    console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(zip);
    console.log(description);

    const result = await axios({
        method: 'POST',
        url: `http://localhost:3000/public/requests/${resourceName}`,
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
        }
    });

    await axios.delete(`http://localhost:3000/user/${userName}/requests/${resourceName}`,
        { data: null },
        { headers: { Authorization: `Bearer ${jwt}` } });
};

export const handleMarkRequestAsCompleted = async function () {
    // this should end up in past requests
    let resourceName = event.currentTarget.id;
    let userName = localStorage.getItem('un');
    let jwt = localStorage.getItem('jwt');
    let firstName = $(`#${resourceName}_firstName`).text();
    let lastName = $(`#${resourceName}_lastName`).text();
    let address = $(`#${resourceName}_address`).text();
    let city = $(`#${resourceName}_city`).text();
    let state = $(`#${resourceName}_state`).text();
    let zip = $(`#${resourceName}_zip`).text();
    let description = $(`#${resourceName}_description`).text();
    console.log(resourceName);
    console.log(userName);
    console.log(jwt);
    console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(city);
    console.log(state);
    console.log(zip);
    console.log(description);

    const result = await axios({
        method: 'POST',
        url: `http://localhost:3000/private/log/${resourceName}`,
        data: {
            data: {
                'firstName': firstName,
                'lastName': lastName,
                'address': address,
                'city': city,
                'state': state,
                'zip': zip,
                'description': description,
                'completedBy': userName

            }
        },
        headers: { Authorization: `Bearer ${jwt}` }
    });

    await axios.delete(`http://localhost:3000/user/${userName}/requests/${resourceName}`,
        { data: null },
        { headers: { Authorization: `Bearer ${jwt}` } });
};

document.body.onload = async function () {
    let jobs = await getMyJobs();
    jobs = jobs['data']['result'];

    for (let i in jobs) {
        $('#jobsParentDiv').append(`
             <div class="card">
                 <div class="card-content">
                     <div class="content">
                         <p><span id="${i}_firstName">${jobs[i][0]['firstName']}</span> <span id="${i}_lastName">${jobs[i][0]['lastName']}</span></p>
                         <p><span id="${i}_address">${jobs[i][0]['address']}</span> <span id="${i}_city">${jobs[i][0]['city']}</span></p>
                         <p><span id="${i}_state">${jobs[i][0]['state']}</span> <span id="${i}_zip">${jobs[i][0]['zip']}</span></p>
                         <p>Description: <span id="${i}_description">${jobs[i][0]['description']}</span></p>
                     </div>
                 </div>
                 <button class="markCompletedBtn button is-link" id="${i}">Mark Completed</button>
                 <br />
                 <br />
                 <button class="cannotCompleteBtn button is-danger" id="${i}">I won't be able to complete this job.</button>
                 <br />
                 <br />
             </div>
             <br />`);
    }

    $('.markCompletedBtn').on('click', handleMarkRequestAsCompleted);
    $('.cannotCompleteBtn').on('click', handleRemoveRequestFromMyJobs);
}