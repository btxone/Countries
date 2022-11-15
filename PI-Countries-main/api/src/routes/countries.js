const {Router} = require('express');
const getByName = require('../controllers/getByName.js');
const {Country, Activity} = require('../db.js');

const router = Router();


router.get('/countries', async (req, res) =>{
    const {name} = req.query;
    try{
        if(!name){
        const allCountries = await Country.findAll({
            include: Activity
        });
        res.send(allCountries);
    }else{
        const country = await getByName(name);
        res.send(country);
    }

    }catch (error){
    console.log(error);
}
});




module.exports = router;