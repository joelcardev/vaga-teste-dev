var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");
const { verificarPermissao } = require("./teste6");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`
  Para um melhor experiêcia use postman ou outra aplicação para testar apis.</br>
  get user/id </br>
  get users/ </br>
  post users/salvar </br>
  delete users/delete </br>
  put users/update </br>
  `);
});

app.get("/users/:id", teste1.getUserById);
app.get("/users", teste1.getAllUsers);
app.post("/users/salvar", teste2.saveUser);
app.delete("/users/deletar", verificarPermissao, teste3.deletarUser);
app.put("/users/update", verificarPermissao, teste4.atualizarDados);
app.get("/users/access/:id", teste5.verificarQuantidadeLeituraUsers);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});

// Usei o res.status pra retornar os codigos como 200, 400, 404 e etc, cada um tem uma funcao sobre 
// retorno de resultados.

// NAO USEI MUITOS COMENTARIOS porque acredito que o codigo ta limpo, e os nomes dizem exatamente
// cada funcao faz.

/// USEI Service para não duplicar codigo pois usaria muito a parte de buscar o usuario, ai coloquei
// logo no service, e muitos backend usam essa terminologia pra quando se refere a fazer
//  ações com o banco.

/// Eu poderia ter colocado todos as funcoes em uma unica pagina, pois normalmente é assim
// mas achei melhor dessa forma pra separar os testes. mas o certo seria um file so pra user, e se 
// tiver outras rotas, como questAo de token faria em file separado.

// usei nao gosto de usar muito query em url, prefiro usar Body pra levar dados para uma requisição


/// Talvez meu defeito aqui seja a questão de as vezes mistura ingles e pt,
// mas saiba que estou melhorando.


// eu gosto muito de criar funcoes e partir em pedaços muitas funcoes grandes.


/// peço perdao ate por nao alterar tanta coisa, mas acredito que o essencial foi feito.


// Por fim, eu sei que as coisas que fiz são simples e basicas, mas tenho potencia 
// pra fazer muito mais, provalmente vao ter pessoas que vao fazer a mesma coisa que eu
// e ate mais, mas acredito que meu potencia é enorme pra fazer coisas extraordinarias.
