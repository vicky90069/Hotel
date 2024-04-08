const express = require('express');
const router =express.Router();
const menuItem =require('../models/MenuItem');


router.post('/',async(req,res)=>{
    try{
      const data =req.body;
  
      const newMenu=new menu(data);
  
      const response= await newMenu.save();
      console.log('data menu');
      res.status(200).json(response);
  
  
  
    }
    catch(err){
      console.log(err);
      res.status(500).json({error: "internal ser error"});
  
    }
  });
  
  router.get('/', async(req,res)=>{
    try{
      const data = await menuItem.find();
  console.log('data fatch menu');
  res.status(200).json(data);
    }
  
    catch(err){
      console.error(err)
      res.status(500).json({error:'internal error'});
  
    }
  });

  module.exports=router;