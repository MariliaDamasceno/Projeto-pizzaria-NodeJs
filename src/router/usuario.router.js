const express = require ("express");
const router = express.Router();
const UsuarioController = require ("../controller/usuario.controller")

const authMiddleware = require ("../middleware/auth.middleware")

//rotas get
router.get('/findById/:id', authMiddleware, UsuarioController.findUserByIdController);
router.get('/findAll', UsuarioController.findAllUserController);

//rotas post
router.post('/create', UsuarioController.createUserController);
router.post('/addAddress/:id',authMiddleware, UsuarioController.addUserAddressController);
router.post('/favProduct/:id', UsuarioController.addUserFavProduct);


//rotas put
router.put('/update/:id', authMiddleware, UsuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', authMiddleware, UsuarioController.removeUserController);
router.delete('/removeAddress/:id',authMiddleware, UsuarioController.removeUserAddressController);
router.delete('/removeFavProduct',authMiddleware, UsuarioController.removeUserFavProduct);


module.exports = router;