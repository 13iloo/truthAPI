const Truth = require('../models/truthModel');

// @desc    Get all truths
// @route   GET /api/truths
// @access  Public
const getTruths = async (req, res) => {
  try {
    const truths = await Truth.find();
    res.json(truths);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Add a new truth
// @route   POST /api/truths
// @access  Public
const addTruth = async (req, res) => {
  try {
    const { text, category } = req.body;
    const newTruth = new Truth({
      text,
      category
    });
    const truth = await newTruth.save();
    res.json(truth);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @desc    Delete a truth
// @route   DELETE /api/truths/:id
// @access  Public
const deleteTruth = async (req, res) => {
  try {
    await Truth.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Truth removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getTruths,
  addTruth,
  deleteTruth
};
