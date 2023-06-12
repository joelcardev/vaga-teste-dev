var { fakeData: data, quantidadeLeitura } = require("./fakeData");

function buscarUserPorId(id) {
  return data.find((user) => user.id == id);
}

function buscarTodosUsers(id) {
  return data;
}

function deletarPorId(id) {
  const posicao = data.findIndex((user) => user.id == id);
  data.splice(posicao, 1);
  deletarQuantidadeLeitura(id);
}

function deletarQuantidadeLeitura(id) {
  const posicao = quantidadeLeitura.findIndex((user) => user.idUsuario == id);
  quantidadeLeitura.splice(posicao, 1);
}

module.exports = { buscarUserPorId, buscarTodosUsers, deletarPorId };
