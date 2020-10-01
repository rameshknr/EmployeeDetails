const express = require('express');
const router = express.Router();
const controller = require('../api/index');
const verifyToken = require('../middlewares/verifyToken')
const apiAdapter = require('../gateway/apiAdapter')

const BASE_URL = 'http://localhost:8009'
const api = apiAdapter(BASE_URL)

router.post('/register', controller.RegisterUser);
router.post('/login', controller.LoginUser);
router.get('/isAuthenticated',verifyToken, controller.isAuthenticated);

module.exports = router;