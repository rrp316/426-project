//TO-DO: fill out the axios request to retrieve my jobs
async function getMyJobs() {
    const jobs = await axios({
        method: 'get',
        url: '',
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
    const result = await axios({
        method: 'post',
        url: '',
    });
};

export const handleMarkRequestAsCompleted = async function () {
    /** TO-DO:
    * same thing Raj
    */

    // so i'm guessing this should end up in past requests
    const result = await axios({
        method: 'post',
        url: '',
    });
};

document.body.onload = async function () {
    let jobs = await getMyJobs();

    //then Josh can add it to the DOM
}