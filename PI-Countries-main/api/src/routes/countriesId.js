const {Router} = require('express');

const router = Router();

const getById = require('../controllers/getById.js');


router.get('/countries/:id', async (req, res) =>{
    const {id} = req.params;
    try{
        const country = await getById(id);
        res.send(country);
    }catch (error){
    console.log(error);
}

});


module.exports = router;