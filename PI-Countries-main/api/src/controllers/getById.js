const axios = require('axios');

module.exports = async (code) => {
    try {
        const getApi = await axios.get(`https://restcountries.com/v3/alpha/${code}`);
        const allCountries = getApi.data;
        return allCountries;
    } 
    catch (error) {
        console.log(error);
    }
}
