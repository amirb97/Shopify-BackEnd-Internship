const router = require('express').Router();
const itemRoutes = require('./item-route');

router.use('/items', itemRoutes);

module.exports = router;
