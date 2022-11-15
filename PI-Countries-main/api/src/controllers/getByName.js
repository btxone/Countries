const axios = require('axios');



module.exports = async (name) => {

    try {
        const getApi = await axios.get(`https://restcountries.com/v3/name/${name}`);
        const country = getApi.data;
        return country;
    } 
    catch (error) {
        console.log(error);
    }
}


