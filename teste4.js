const { buscarUserPorId } = require("./ServiceUser");

function atualizarDados(req, res) {
  var id = req.body.id;

  const userToUpdate = buscarUserPorId(id);

  if (!userToUpdate) {
    return res.status(404).json({ erro: "Usuário não encontrado" });
  }

  if (req.body.name == "" && req.body.job == "") {
    return res.status(400).json({ erro: "Nome ou Job não podem ser vazios." });
  }

  if (req.body.name != "") {
    userToUpdate.name = req.body.name;
  }

  if (req.body.job != "") {
    userToUpdate.job = req.body.job;
  }

  res.status(200).json(userToUpdate);
}

// O req.body.name != "" usei ele caso somente o nome fosse atualizado,
// ai o job nao seria e nao precisaria fazer nada com ele.

module.exports = {
  atualizarDados,
};
