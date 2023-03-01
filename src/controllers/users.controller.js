const userModel = require("../models/models");

const getUsers= async (request, response) => {
    const users = await userModel.find({/*uname:"wilber"*/});
    try {
      response.json({
          msg:"qwerty",
          users:users
      });
    } catch (error) {
      response.status(500).send(error);
    }
  }

const addUsers=  async (req, res) => {
    const user = new userModel(req.body);
    try {
      await user.save();
      res.send({
          msg:"qwerty",
          user:user
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }

module.exports={
    getUsers,
    addUsers
}