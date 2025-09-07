const Dare = require('../models/dareModel');

// @desc    Get all dares
// @route   GET /api/dares
// @access  Public
const getDares = async (req, res) => {
  try {
    const dares = await Dare.find();
    res.json(dares);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Add a new dare
// @route   POST /api/dares
// @access  Public
const addDare = async (req, res) => {
  try {
    const { text, category } = req.body;
    const newDare = new Dare({
      text,
      category
    });
    const dare = await newDare.save();
    res.json(dare);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a dare
// @route   DELETE /api/dares/:id
// @access  Public
const deleteDare = async (req, res) => {
  try {
    await Dare.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Dare removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getDares,
  addDare,
  deleteDare
};
