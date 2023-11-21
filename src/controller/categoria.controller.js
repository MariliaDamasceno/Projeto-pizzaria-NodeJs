const categoriaService = require("../service/categoria.service");

const findAllCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findAllCategoriaService(req.query.limit, req.query.offset));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const findByIdCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.findByIdCategoriaService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const createCategoriaController = async (req, res) => {
    try {
        res.status(201).send(await categoriaService.createCategoriaService(req.body));

    }
    catch (err) {
        console.log(`erro: ${err.message} erro create categoriaController! `);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const updateCategoriaController = async (req, res) => {
    try {
        console.log("categoria atualizada com sucesso!");
        res.status(200).send(await categoriaService.updateCategoriaService(req.params.id, req.body));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

const removeCategoriaController = async (req, res) => {
    try {
        res.status(200).send(await categoriaService.removeCategoriaService(req.params.id));
    }
    catch (err) {
        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado, tente novamente!` });
    }
};

module.exports = {
    findAllCategoriaController,
    findByIdCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    removeCategoriaController
}