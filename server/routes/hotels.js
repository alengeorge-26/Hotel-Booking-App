const express=require('express');
const router=express.Router();
const hotelsController = require('../controller/hotels');
const verify = require('../utils/verify');

router.get('/',verify.verifyUser,hotelsController.getAll);
router.get('/:id',verify.verifyUser,hotelsController.getbyId);
router.post('/',verify.verifyAdmin,hotelsController.createHotel);
router.put('/:id',verify.verifyAdmin,hotelsController.updateHotel);
router.delete('/:id',verify.verifyAdmin,hotelsController.deletebyId);

module.exports = router;