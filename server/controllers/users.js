'use strict'

const User = require('../models/user.js');

exports._get = async (req, res) => {
  try {
    const myUser= await User.find();
    res
			.status(200)
			.send(myUser);

  } catch (err) {

    console.error(err);
    res
			.status(500)
			.send('error', {error: err});
  }
}

exports._post = async (req, res) => {
  console.log(req.body);
  try {
    let userPost = await User.create(req.body);
    res
			.status(201)
			.send()
  } catch (err) {
    res
			.status(500)
			.send('error',{error: err});
  }
};
