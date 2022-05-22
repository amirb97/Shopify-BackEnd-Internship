const router = require('express').Router();
const {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
} = require('../../controllers/item-controller');

router.route('/').get(getAllItems).post(createItem);

router.route('/:id').get(getItemById).put(updateItem).delete(deleteItem);

module.exports = router;
