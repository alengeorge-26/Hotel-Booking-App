const express=require('express');
const router=express.Router();
const RoomsController = require('../controller/rooms');
const verify = require('../utils/verify');

router.get('/',verify.verifyUser,RoomsController.getAll);
router.get('/:roomId',verify.verifyUser,RoomsController.getbyId);
router.post('/:hotelid',verify.verifyAdmin,RoomsController.createRoom);
router.put('/:roomId',verify.verifyAdmin,RoomsController.updatebyId);
router.delete('/:roomId',verify.verifyAdmin,RoomsController.deletebyId);

module.exports = router;