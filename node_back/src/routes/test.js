const express = require('express');
const router = express.Router();

const users = require('../data/users.json');


router.get('/', function (req, res, next) {
	console.log('왜???');
	res.json({ user: users[0] });
});

module.exports = router;