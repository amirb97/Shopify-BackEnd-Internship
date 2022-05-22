const { Item } = require('../models');

const itemController = {
    // get all items
    getAllItems(req, res) {
        Item.find({})
        .select('-__V')
        .sort({ _id: -1 })
        .then(dbItemData => res.json(dbItemData))
        .catch(err => res.status(400).json(err));
    },

    // get one item by id
    getItemById({ params }, res) {
        Item.findOne({ _id: params.id })
          .select('-__V')
          .then(dbItemData => {
              if (!dbItemData) {
                  res.status(404).json({ message: 'No item found with this id' });
                  return;
              }
              res.json(dbItemData);
          })
          .catch(err => res.status(400).json(err));
    },

    // create an item
    createItem({ params, body }, res)  {
        Item.create(body)
          .then(dbItemData => res.json(dbItemData))
          .catch(err => res.json(err));
    },

    // update a item by id
    updateItem({ params, body }, res) {
        Item.findOneAndUpdate(
            { _id: params.id },
            { 
                itemName: body.itemName,
                quantity: body.quantity
            },
            { new: true, runValidators: true })
          .then(dbItemData => {
              if (!dbItemData) {
                  res.status(404).json({ message: 'No item found with this id' })
                  return;
              }
              res.json(dbItemData);
          })
          .catch(err => res.status(400).json(err));
    },

    // delete a item by id
    deleteItem({ params }, res) {
        Item.findByIdAndDelete({ _id: params.id })
          .then( dbItemData => {
            if (!dbItemData) {
                res.status(404).json({ message: 'No item found with this id' })
                return;
            }
            res.json(dbItemData);
          })
          .catch(err => res.status(400).json(err));
    }
}

module.exports = itemController;
