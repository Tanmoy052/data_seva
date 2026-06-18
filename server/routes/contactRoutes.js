const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitContact } = require('../controllers/contactController');

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('message', 'Message is required').not().isEmpty(),
  ],
  submitContact
);

module.exports = router;
