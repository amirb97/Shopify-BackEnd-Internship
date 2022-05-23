const router = require('express').Router();
const sequelize = require('../config/connection');
const { Item } = require('../models');

router.get('/', (req, res) => {
    Item.findAll({
        attributes: [
          'itemName',
          'quantity'
        ]
      })
      .then(dbPostData => {
        const inventory = dbPostData.map(item =>  item.get({ plain: true }));
        res.render('homepage', {
           inventory});
      })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
});

module.exports = router;
