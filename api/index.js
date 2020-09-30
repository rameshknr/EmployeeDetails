const UserModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const RegisterUser = (req, res) => {
    let user = new UserModel();
    user.username = req.body.username;
    user.fullname = req.body.fullname;
    user.email = req.body.email;
    user.password = req.body.password;
    user.save((err, doc) => {
        if (err) {
            res.send({ error: err });
        } else {
            res.send(doc);
        }
    });
}

const LoginUser = (req, res) => {
    UserModel.findOne({ username: req.body.username }, (err, doc) => {
        if (err) {
            res.send({ error: err });
        }
        else if (doc) {
            let result = bcrypt.compareSync(req.body.password, doc.password);
            if (result) {
                jwt.sign({ user: doc }, 'thisismysecretkey', (err, token) => {
                    if (err) {
                        res.send(err);
                    }
                    res.send({ token: token});
                });
            } else {
                res.send({ message: 'Invalid password' });
            }
        }else{
            res.send({ message: 'Invalid username' });   
        }
    });
}
const isAuthenticated= (req, res) =>{
    res.send({ isAuthenticated: true });
}
module.exports = {
    RegisterUser,
    LoginUser,
    isAuthenticated
}