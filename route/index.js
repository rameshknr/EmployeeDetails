const express = require('express');
const router = express.Router();
const controller = require('../api/index');
const verifyToken = require('../middlewares/verifyToken')

router.post('/register', controller.RegisterUser);
router.post('/login', controller.LoginUser);
router.get('/isAuthenticated',verifyToken, controller.isAuthenticated);

module.exports = router;