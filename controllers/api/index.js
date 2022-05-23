const router = require('express').Router();

const itemRoutes = require('./item-routes.js');

router.use('/items', itemRoutes);

module.exports = router;
