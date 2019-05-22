const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

// Bring working hours model
const WorkingHours = require('../../models/WorkingHours');

// @route GET api/workinghours
// @desc  GET all Working hours
// @acess Public
router.get('/', (req, res) => {
  WorkingHours.find()
    .then(items => res.json(items))
});

// @route POST api/workinghours
// @desc  POST Working Hours
// @acess Private
router.post('/', auth, (req, res) => {
  const newEntry = WorkingHours({
    hours: req.body.hours,
    description: req.body.description,
    day: req.body.day,
  });

  newEntry.save()
    .then(item => res.json(item));
});

// @route DELETE api/workinghours/:id
// @desc  DELETE Working Hours
// @acess Private
router.delete('/:id', auth, (req, res) => {
  WorkingHours.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ "Message": "Working day deleted." })))
    .catch(err => res.status(404).json({ "Message ": " Working day not found." }))
});

module.exports = router;