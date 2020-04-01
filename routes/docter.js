const express=require('express');

const router=express.Router();
const docters_controller=require('../controllers/docters_controller');

router.post('/register',docters_controller.register);
router.post('/login',docters_controller.login);

module.exports=router;