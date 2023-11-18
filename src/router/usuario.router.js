const express = require ("express");
const router = express.Router();
const UsuarioController = require ("../controller/usuario.controller")

const authMiddleware = require ("../middleware/auth.middleware")

//rotas get
router.get('/findById/:id', authMiddleware, UsuarioController.findUserByIdController);
router.get('/findAll', UsuarioController.findAllUserController);

//rotas post
router.post('/create', UsuarioController.createUserController);
router.post('/addAddress/:id', UsuarioController.addUserAddressController);
router.post('/favProduct/:id', UsuarioController.addUserFavProduct);


//rotas put
router.put('/update/:id', UsuarioController.updateUserController);

//rotas delete
router.delete('/remove/:id', UsuarioController.removeUserController);
router.delete('/removeAddress', UsuarioController.removeUserAddressController);
router.delete('/removeFavProduct', UsuarioController.removeUserFavProduct);


module.exports = router;