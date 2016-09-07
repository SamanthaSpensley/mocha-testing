var express = require('express');
var router = express.Router();


//middleware to validate the route inputs
router.post('/:math', (req, res, next) => {
  if(!req.body.num1 && !req.body.num2) {
    return res.status(432).json({message: 'No data, fool'})
  }
  next();
});


//routes for the calculator
router.post('/add', (req, res, next) => {
  res.json({result: req.body.num1 + req.body.num2})
});
router.post('/subtract', (req, res, next) => {
  res.json({result: req.body.num1 - req.body.num2})
})
router.post('/multiply', (req, res, next) => {
  res.json({result: req.body.num1 * req.body.num2})
})
router.post('/divide', (req, res, next) => {
  res.json({result: req.body.num1 / req.body.num2})
})
router.post('/concat', (req, res, next) => {
  res.json({result: Number(req.body.num1 + req.body.num2)})
})

module.exports = router;
