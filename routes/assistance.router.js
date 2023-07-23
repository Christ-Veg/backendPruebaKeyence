const express = require('express');
const AssistancesService = require('../services/assistance.service');

const router = express.Router();
const service = new AssistancesService();

router.get('/',async (req,res)=>{
  try {
    const assistance = await service.find();
    res.json(assistance);
  } catch (error) {
    res.status().json({
      message: error.message
    });
  }

});
router.get('/:idEmployee',async (req,res,next)=>{
  try {
    const{ idEmployee } = req.params;
    const assistance = await service.findOne(idEmployee);
    res.json(assistance);
  } catch (error) {
    next(error);
  }
});

router.post('/',async (req,res)=>{
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  });
});
router.put('/:idEmployee',async (req,res)=>{
  const{ idEmployee } = req.params;
  const body = req.body;
  res.json({
    message: 'Updated',
    data: body,
    idEmployee,
  });
});
module.exports = router;
