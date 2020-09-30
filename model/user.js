const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique:true
    },
    fullname: String,
    email: {
        type: String,
        required: true,
        unique:true
    },
    password: String
});

UserSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            next(err);
        }
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) {
                next(err);
            }
            this.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('user', UserSchema);