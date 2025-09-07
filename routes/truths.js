const express = require('express');
const router = express.Router();
const { getTruths, addTruth, deleteTruth } = require('../controllers/truthController');

router.route('/').get(getTruths).post(addTruth);
router.route('/:id').delete(deleteTruth);

module.exports = router;
