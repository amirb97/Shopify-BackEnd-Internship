const router = require('express').Router();
const { Item } = require('../../models');

// GET /api/items

router.get('/', (req, res) => {
    Item.findAll({})
    .then(dbInventoryData => res.json(dbInventoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

// GET /api/items/1

router.get('/:id', (req,res) => {
    Item.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbInventoryData => {
        if (!dbInventoryData) {
            res.status(404).json({ message: 'no image found with this id'});
            return;
        }
        res.json(dbInventoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



// POST /api/items
router.post('/', (req, res) => {
    Item.create({
        itemName: req.body.name,
        quantity: req.body.quantity
    })
    .then(dbInventoryData => res.json(dbInventoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//  PUT /api/items/1
router.put('/:id', (req, res) => {
    Item.update(
        {
            itemName: req.body.itemName,
            quantity: req.body.quantity
        },
        {
            where:{
                id: req.params.id
            }
        }
    )
    .then(dpInventoryData => res.json(dpInventoryData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// DELETE /api/items/1
router.delete('/:id', (req, res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbInventoryData => {
        if (!dbInventoryData) {
            res.status(404).json({ message: 'no item found with this id'});
            return;
        }
        res.json(dbInventoryData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;

