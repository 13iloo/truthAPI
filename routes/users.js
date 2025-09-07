const express = require('express');
const router = express.Router();
const { getUsers, addUser, deleteUser, updateUser } = require('../controllers/userController');

router.route('/').get(getUsers).post(addUser);
router.route('/:id').delete(deleteUser).put(updateUser);

module.exports = router;
