const Categoria = require("../model/Categoria");

const findAllCategoriaService = (limit, offset) => {
    return Categoria.find().limit(limit).skip(offset);
};

const findByIdCategoriaService = (id) => {
    return Categoria.findById(id);
};

const createCategoriaService = (body) => {
    return Categoria.create(body);
};

const updateCategoriaService = (id, body) => {
    return Categoria.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeCategoriaService = (id) => {
    return Categoria.findByIdAndRemove(id);
};

module.exports = {
    findAllCategoriaService,
    findByIdCategoriaService,
    createCategoriaService,
    updateCategoriaService,
    removeCategoriaService
}