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
    return Usuario.findByIdAndDelete(id);
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

const removeUserAddressService = async (id, addressId) => {
    try {
        const usuario = await Usuario.findById(
            id,
            { $pull: { enderecos: { _id: addressId } } },
            { new: true }
        );

        if (!usuario) {
            throw new Error("Usuário não encontrado");
        }

        console.log('Usuário após remoção:', usuario);

        return usuario;
    } catch (error) {
        console.error(`Erro no serviço removeUserAddressService: ${error.message}`);
        throw error;
    }
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