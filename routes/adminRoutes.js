const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.admin_get);
router.get('/add', adminController.add_item_get);
router.post('/add', adminController.add_item_post);
router.get('/edit/:id', adminController.edit_item_get);
router.post('/edit/:id', adminController.edit_item_post);
router.get('/delete/:id', adminController.delete_item_get);
router.post('/delete/:id', adminController.delete_item_post);
module.exports = router;
