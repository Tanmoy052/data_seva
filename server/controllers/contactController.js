const Contact = require("../models/Contact");
const { validationResult } = require("express-validator");

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, email, message } = req.body;

    // Save to database
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      data: contact,
      message: "Message saved successfully!",
    });
  } catch (error) {
    console.error("Contact Submission Error:", error);
    res.status(500).json({
      success: false,
      message: "Server Error. Please try again later.",
    });
  }
};
