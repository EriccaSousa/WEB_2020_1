var express = require('express');
var router = express.Router();
var DisciplinaService = require('../services/DisciplinaService');

router.post('/register', function (req, res, next) {
  DisciplinaService.register(req, res);
});

router.get('/list', function (req, res, next) {
  DisciplinaService.list(req, res);
});

module.exports = router;