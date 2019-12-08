//TO-DO: fill out the axios request to retrieve active requests
async function getActiveRequests() {
    const activeRequests = await axios({
        method: 'get',
        url: 'http://localhost:3000/public/requests',
    });
    //again you'll need to get it from activerequests.data.result
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

    //then Josh can add it to the DOM
}