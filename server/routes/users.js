const express=require('express');
const router=express.Router();
const usersController = require('../controller/users');
const verify=require('../utils/verify');

router.get('/',verify.verifyAdmin,usersController.getAll);
router.get('/:id',verify.verifyUser,usersController.getbyId);
router.put('/:id',verify.verifyUser,usersController.updateUser);
router.delete('/:id',verify.verifyUser,usersController.deleteUser);

module.exports = router;