const jwt = require("jsonwebtoken");
const {findUserByIdService} = require ("../service/usuario.service");

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).send({ message: "O token não foi informado!"});
    }

    const parts = authHeader.split(" "); //["Bearer, <Token>"]

    if(parts.length !== 2){
        return res.status(401).send({ message:" token invalido!" });
    }
    const [schema, token] = parts;

    if(!/^Bearer$/i.test(schema)){
        return res.status(401).send({ message: "Token malformado!"});
    }
    jwt.verify(token, process.env.SECRET, async (err, decoded) => {
        if(err){
            return res.status(500).send({message: "token invalido"});
        }

        const user = await findUserByIdService(decoded.id);

        if(!user || !user.id ){
            return res.status(401).send({ message: "Token Invalido!"});
        }

        req.userId = decoded.id;

        return next();
    });
};