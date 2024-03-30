const express = require('express');
const router = express.Router();
const ComplaintController = require('../controllers/ComplaintController');

router.get('/get-complaint',ComplaintController.index);
router.post('/add-complaint',ComplaintController.create);
router.put('/update-complaint/:id',ComplaintController.update);
router.get('/show/:id',ComplaintController.show);
router.put('/delete/:id',ComplaintController.destroy);

module.exports = router;