const registerUser = async (req, res) => {
  const { name, email, password, pic } = req.body;
  res.json({ name, email, password });
};

module.exports = { registerUser };
