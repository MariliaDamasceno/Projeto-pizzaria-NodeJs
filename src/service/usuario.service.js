const Usuario = require("../model/usuario");

const findAllUserService = (limit, offset) => {
    return Usuario.find().limit(limit).skip(offset);
};

const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const createUserService = (body) => {
    return Usuario.create(body);
};

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeUserService = (id) => {
    return Usuario.findByIdAndRemove(id);
};

const addUserAddressService = (id, endereco) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $push: {
                enderecos: endereco,
            }
        },
        {
            rawResult: true,
        }
    );
};

const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id,
        },
        {
            $pull: {
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            rawResult: true,
        }
    );
};

const addUserFavProductService = (id, produto) => {

};

const removeFavProductService = (produto) => {

}
module.exports = {
    findUserByIdService,
    findAllUserService,
    createUserService,
    updateUserService,
    removeUserService,
    addUserAddressService,
    removeUserAddressService,
    addUserFavProductService,
    removeFavProductService
}