const { Router } = require('express');

const routerCountries = require ('./countries');
const countriesId = require ('./countriesId');


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/', routerCountries)
router.use('/', countriesId)


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
