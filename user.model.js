const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   name: {
       type: String,
       required: true
   },
    age: {
       type: Number,
        min:18,
        max:90,
        default: 20
    },
    isMarried: {
       type: Boolean,
        default: false
    },
    phones: {
       type: [Number],
        default: []
    }
});

mongoose.model('users', UserSchema );