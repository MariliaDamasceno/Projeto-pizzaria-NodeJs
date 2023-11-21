const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const paginacao = require("../middleware/paginacao.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria, validaIdParams } = require("../middleware/validacao.middleware");

router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoriaController);
router.get("/findById/:id", authMiddleware, validaIdParams, categoriaController.findByIdCategoriaController);

router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);

router.put("/update/:id", authMiddleware, validaIdParams, validaCategoria, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, validaIdParams, categoriaController.removeCategoriaController);

module.exports = router;