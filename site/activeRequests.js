//TO-DO: fill out the axios request to retrieve active requests
async function getActiveRequests() {
    const activeRequests = await axios({
        method: 'get',
        url: '',
    });
    return activeRequests;
}

export const handleAddRequestToMyJobs = async function () {
    /** TO-DO:
    * Raj if you can just fill out the below request with whatever
    * data you need, I can then figure out how to get that data from
    * the DOM. 
    */
    const result = await axios({
        method: 'post',
        url: '',
    });

    //location.reload();
};

document.body.onload = async function () {
    let activeRequests = await getActiveRequests();

    //then Josh can add it to the DOM
}