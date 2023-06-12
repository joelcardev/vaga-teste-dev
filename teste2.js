var { fakeData: data, quantidadeLeitura } = require("./fakeData");

function saveUser(req, res) {
  var name = req.body.name;
  var job = req.body.job;

  if (!name || !job) {
    return res.status(400).json({ erro: "Campos nome ou job são necessários" });
  }

  const newId = data.length + 1;

  var newUser = {
    id: newId,
    name: name,
    job: job,
    permissao: false,
  };

  var newLeitura = {
    id: quantidadeLeitura.length + 1,
    idUsuario: newId,
    quantidade: 0,
  };

  quantidadeLeitura.push(newLeitura);

  data.push(newUser);

  return res.status(200).json({ mensagem: "Usuário salvado com Sucesso!" });
}

module.exports = {
  saveUser,
};
