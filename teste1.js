const { buscarUserPorId, buscarTodosUsers } = require("./ServiceUser");
var { quantidadeLeitura } = require("./fakeData");

// troquei para id pois nomes são muito genericos pois existem diversas pessoas com
// os mesmos nomes, muitos joão, carlos, etc.
// id seria algo unico para cada user, mas poderia ser cpf pois tb é exclusivo.
const getUserById = (req, res, next) => {

  var id = req.params.id;
  const userEncontrado = buscarUserPorId(id);

  if (!userEncontrado) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  adicionarUsuarioLido(userEncontrado.id);

  return res.status(200).json(userEncontrado);
};



function adicionarUsuarioLido(id) {
  const userQuantidade = quantidadeLeitura.find((user) => user.id == id);
  if (userQuantidade) {
    let adicionarLeitura = userQuantidade.quantidade + 1;
    userQuantidade.quantidade = adicionarLeitura;
    return;
  }
}

const getAllUsers = (req, res, next) => {
  let data = buscarTodosUsers();
  return res.status(200).json(data);
};

module.exports = {
  getUserById,
  getAllUsers,
};
