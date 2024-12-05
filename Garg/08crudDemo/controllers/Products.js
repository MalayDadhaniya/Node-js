const getUser = async (req, res) => {
  res.send("User Names");
};

const createUser = async (req, res) => {
  res.send("+++ Create New User");
};

module.exports = { getUser, createUser };
