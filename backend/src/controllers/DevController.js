const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    const loggedDev = await Dev.findById(user);

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ],
    });

    return res.json(users);
  },
  async store(req, res) {
    const { username } = req.body;

    const userExists = await Dev.findOne({ user: username }); //Verificando se apenas tem 1 user
    if (userExists) {
      return res.json(userExists);
    }
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
    );

    const { name, bio, avatar_url: avatar } = response.data;
    //avatar_url: avatar esta informand que o avatar_url
    //é do git hub e que eu estou declarando que internamente o nome é avatar

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return res.json(dev);
  },
};
