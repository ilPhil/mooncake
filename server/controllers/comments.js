'use strict';

const Comment = require('../models/comment.js');

exports._getAll = async (req, res) => {
  try {
    const myComment = await Comment.find();
    res
			.status(200)
			.send(myComment);

  } catch (err) {

    console.error(err);
    res
			.status(500)
			.send('error', {error: err});
  }
}

exports._get = async (req, res) => {
	console.log("funziono", req.params.urlContent);
	//console.log(req.params.url);
  try {
    const myComment = await Comment.find({"url":encodeURIComponent(req.params.urlContent)});
    res
			.status(200)
			.send(myComment);

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
    let commentPost = await Comment.create(req.body);
    res
			.status(201)
			.send()
  } catch (err) {
    res
			.status(500)
			.send(err);
  }
};
