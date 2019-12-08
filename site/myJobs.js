//TO-DO: fill out the axios request to retrieve my jobs
async function getMyJobs() {
    let userName = localStorage.getItem('un');
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
    /** TO-DO:
    * same thing Raj, if you can just fill out the below request with whatever
    * data you need, I can then figure out how to get that data from
    * the DOM. 
    */

    // I'm guessing the idea is this should end up back in active requests?
    let resourceName;
    let jwt = localStorage.getItem('jwt');
    let userName = localStorage.getItem('un');
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
    {data: null}, 
    {headers: { Authorization: `Bearer ${jwt}` }});

};

export const handleMarkRequestAsCompleted = async function () {
    /** TO-DO:
    * same thing Raj
    */

    // so i'm guessing this should end up in past requests
    let resourceName;
    let userName = localStorage.getItem('un');
    let jwt = localStorage.getItem('jwt');
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
    {data: null}, 
    {headers: { Authorization: `Bearer ${jwt}` }});
};

document.body.onload = async function () {
    let jobs = await getMyJobs();

    //then Josh can add it to the DOM
}