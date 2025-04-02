const Contact = require('../modals/Contact');

// Handle form submissions
const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, number, subject, message } = req.body;

    // Save form data to the database
    const contact = new Contact({ fullName, email, number, subject, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error submitting form.', error });
  }
};

module.exports = { submitContactForm };
