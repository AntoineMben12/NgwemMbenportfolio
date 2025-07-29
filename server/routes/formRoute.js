const express = require('express');
const router = express.Router();
const Form = require('../models/Form');

// Route to handle form submission
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newForm = new Form({ name, email, message });
    await newForm.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit form' });
  }
});


// Optional: GET route to fetch all submissions (for admin/testing)
router.get('/', async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch forms' });
  }
});

module.exports = router;