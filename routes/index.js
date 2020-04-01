const express=require('express');

const passport=require('passport');

const router=express.Router();
const register_patient_controller=require('../controllers/register_patient_controller');
const patient_controller=require('../controllers/patient_controller');

router.use('/docters',require('./docter'));
router.use('/patients',require('./patient'));

// using jwt authentication for authentication
router.post('/register_patient',passport.authenticate('jwt', {session: false}),register_patient_controller.register);
router.get('/reports/:status',passport.authenticate('jwt', {session: false}),patient_controller.status);

module.exports=router;