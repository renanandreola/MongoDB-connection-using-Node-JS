
const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/User');
const router = express.Router();
const bodyParser = require('body-parser');

router.post('/', async (req, res) => {
    const{ firstName, lastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    userModel.save();
    res.json(userModel);
});


module.exports = router;
