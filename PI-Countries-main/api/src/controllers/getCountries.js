const axios = require('axios');
const { Country } = require('../db.js');


module.exports = async () => {
    try {
        const getApi = await axios.get('https://restcountries.com/v3/all');
        const allCountries = getApi.data;
        allCountries.map(async country => {
           const mario =  await Country.create({
                name: country.name.common,
                flags: country.flags[0],
                capital: country.capital ? country.capital[0] : 'No capital',
                subregion: country.subregion,
                area: country.area,
                population: country.population,
                continents: country.continents[0],
            
            })
        })
        console.log('traigo todos los paises')
    } 
    catch (error) {
        console.log(error);
    }
};
