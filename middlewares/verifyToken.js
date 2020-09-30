const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    const authHeaders = req.headers['authorization'];
    if (typeof authHeaders !== 'undefined') {
        const bearer = authHeaders.split(' ');
        const token = bearer[1];
        req.token = token;
        jwt.verify(req.token, 'thisismysecretkey', (err, data) => {
            if (err) {
                res.sendStatus(403);
            } else {
                next();
            }
        });
    } else {
        res.sendStatus(403);
    }
}