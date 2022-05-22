const router = require('express').Router();
const itemRoutes = require('./item-route');

router.use('/item', itemRoutes);

module.exports = router;
