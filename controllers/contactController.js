const Message = require('../models/Message');

exports.submitMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(200).json({ msg: 'Message sent successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to send message' });
  }
};
