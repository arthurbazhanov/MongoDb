'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/example')
    .then(() => console.log('MongoDb has started'))
    .catch(e =>console.log(e));

require('./user.model');

const User = mongoose.model('users');

const user = new User({
    name: 'User',
    age: 30,
    isMarried: false,
    phones: [12345679]
});

User.find({name: 'User'})
    .limit(2)
    .then(users => {
        console.log(JSON.stringify(users, null ,2));
        const u = users[0];

        User.find({_id: u._id}).remove()
            .then(() => console.log('remove!!'))
    });
