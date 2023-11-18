const Usuario = require("../model/Usuario");


const findUserByIdService = (id) => {
    return Usuario.findById(id);
};

const findAllUserService = () => {
    return Usuario.find();
};

const createUserService = (body) => {
    return Usuario.create(body);
}

const updateUserService = (id, body) => {
    return Usuario.findByIdAndUpdate(id, body, { returnDocument: "after" });
};

const removeUserService = (id) => {
    return Usuario.findByIdAndDelete(id);
};

const addUserAddressService = (id, endereco) => {
   return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $push: {
                enderecos: endereco
            }
        },
        {
            new:true,
            rawResult: true,
        }
    );
};

const removeUserAddressService = (id, addressId) => {
    return Usuario.findOneAndUpdate(
        {
            _id: id
        },
        {
            $pull: {
                enderecos: {
                    _id: addressId
                },
            }
        },
        {
            new:true,
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