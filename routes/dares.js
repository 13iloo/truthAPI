const express = require('express');
const router = express.Router();
const { getDares, addDare, deleteDare } = require('../controllers/dareController');

router.route('/').get(getDares).post(addDare);
router.route('/:id').delete(deleteDare);

module.exports = router;
