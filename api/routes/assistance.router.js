const express = require('express');
const AssistancesService = require('../services/assistance.service');

const router = express.Router();
const service = new AssistancesService();

router.get('/',async (req,res,next)=>{
  try {
    const assistance = await service.find();
    res.json(assistance);
  } catch (error) {
    next(error);
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

router.post('/',async (req,res,next)=>{
  try {
    const body = req.body;
    const newAssistance = await service.create(body);
    res.status(201).json(newAssistance);
  } catch (error) {
    next(error);
  }
});
router.post('/import', (req,res,next)=>{
  try {
    const body = req.body;
    const newImport = service.import(body);
    res.status(200).json(newImport);
  } catch (error) {
    next(error);
  }
});
router.patch('/:idEmployee/:date',async (req,res,next)=>{
  try {
    const{ idEmployee, date } = req.params;
    const body = req.body;

    const assistance = await service.update(idEmployee,date,body);

    res.json(assistance);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
