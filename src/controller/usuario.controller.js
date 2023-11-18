const userService = require("../service/usuario.service");


const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado" });
        }

        return res.status(200).send(user);

    } catch (err) {
        if (err.name === "CastError" && err.kind === "ObjectId") {
            console.log(err.name === "CastError" && err.kind === "ObjectId");
            return res.status(400).send("ID informado está incorreto, tente novamente");
        }

        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
};


const findAllUserController = async (req, res) => {
    try {
        res.status(200).send(await userService.findAllUserService());
    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
};

const createUserController = async (req, res) => {
    try {

        console.log("Request Body:", req.body);

        const body = req.body;
        if (!body || !body.nome) {
            return res.status(400).send({ message: "O campo nome precisa ser preenchido" })
        }

        return res.status(201).send(await userService.createUserService(body));

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
};

const updateUserController = async (req, res) => {
    try {
        const body = req.body;

        if (!body.nome) {
            return res.satus(400).send({ message: "O campo nome precisa ser preenchido" })
        }

        return res.send(await userService.updateUserService(req.params.id, body))

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
};

const removeUserController = async (req, res) => {
    try {

        const deletedUser = await userService.removeUserService(req.params.id);

        console.log(deletedUser);

        if (deletedUser == null) {
            return res.status(404).send("Usuario não encontrado, tente novemente");
        } else {
            return res.status(200).send("Usuario deletado com sucesso!");
        }

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
}

const addUserAddressController = async (req, res) => {
    try {
        const endereco = await userService.addUserAddressService(req.params.id, req.body);

        console.log("Returned Address:", endereco);

        if (endereco) {
            return res.status(200).send({ message: "Endereço adicionado com sucesso" });
        } else {
            return res.status(400).send({ message: "Falha ao adicionar endereço" });
        }
    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
};




const removeUserAddressController = async (req, res) => {
    try {
        const endereco = await userService.removeUserAddressService(req.body.id, req.body.addressId);
        let found = false;

        console.log("Modified Document:", endereco);

        if (endereco.value && Array.isArray(endereco.value.enderecos)) {
            endereco.value.enderecos.map((valor, chave) => {
                if (valor._id == req.body.addressId) {
                    found = true;
                }
            });
        }
        if (found) {
            res.status(404).send({ message: "Endereço não encontrado" });
        } else {
            res.status(200).send({ messagem: "Endereço removido com sucesso!" });
        }
    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
};




const addUserFavProduct = async (req, res) => {
    try {



    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
}

const removeUserFavProduct = async (req, res) => {
    try {

    } catch (err) {
        console.log(`Erro: ${err.message}`);
        return res.status(500).send("Erro inesperado, tente novamente mais tarde");
    }
}

module.exports = {
    findUserByIdController,
    findAllUserController,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressController,
    addUserFavProduct,
    removeUserFavProduct

}