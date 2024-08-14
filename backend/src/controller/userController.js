const userService = require("../services/userService");

const getUser = async (req, res) => {
  const { tipoDocumento, documento } = req.params;
  try {
    const user = await userService.getUser(tipoDocumento, documento);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    res.status(500).send("Server error");
  }
};

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

module.exports = {
  getUser,
  createUser,
};
