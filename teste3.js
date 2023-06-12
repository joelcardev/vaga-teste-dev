const { buscarUserPorId, deletarPorId } = require("./ServiceUser");


function deletarUser(req, res) {
  var id = req.body.idUserDeletar;
  const userEncontrado = buscarUserPorId(id);

  if (!userEncontrado) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  deletarPorId(userEncontrado.id)
  

  return res.status(200).json({ mensagem: "Sucesso ao deletar!" });
}
module.exports = {
  deletarUser,
};
