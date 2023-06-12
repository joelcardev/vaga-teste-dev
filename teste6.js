const { buscarUserPorId } = require("./ServiceUser");


// Nesse metodo ele usa idPermissão para verificar se o user é permitido 
// fazer ações no banco como atualizar e excluir, o usuario tem em seu model a varivel permissao
// se permissao for true ele pode seguir com ação caso contrario é encerrada.

// É uma forma simples de verificar permissoes, existem umas mais complexas
/// mas tentei ser objetivo nisso.
// poderia usar um sistema de senha, qualquer que tivesse senha de adm poderia fazer a ação.
// existem muitas formas, so saiba que poderia achar outras.

function verificarPermissao(req, res, next) {

  var permissao = req.body.idPermissao;

  const encontrarUserPermissao = buscarUserPorId(permissao);

  if (!encontrarUserPermissao) {
    return res.status(404).json({ erro: "id permissão não encontrado" });
  }

  if (encontrarUserPermissao.permissao != true) {
    return res
      .status(403)
      .json({ erro: "Sem permissão para fazer essa ação." });
  }

  next();
}

module.exports = {
  verificarPermissao,
};
