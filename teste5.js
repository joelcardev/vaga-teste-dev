const { buscarUserPorId } = require("./ServiceUser");
var { quantidadeLeitura } = require("./fakeData");

function verificarQuantidadeLeituraUsers(req, res) {

  var id = req.params.id;
  
  const userEncontrado = buscarUserPorId(id)

  if (!userEncontrado) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  var vezesLido = quantidadeLeitura.find(
    (quantidade) => quantidade.idUsuario ==
     userEncontrado.id
  );

  return res
    .status(200)
    .json(
      `Usuário ${userEncontrado.name} foi lido ${vezesLido.quantidade} vezes.`
    );
}
module.exports = {
  verificarQuantidadeLeituraUsers,
};
