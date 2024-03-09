const tituloSimples = document.createElement("h1");
tituloSimples.innerText = "Título Simples";
document.body.appendChild(tituloSimples);

const produto = document.createElement("div");
produto.id = "produto";

const nomeProduto = document.createElement("h2");
nomeProduto.innerText = "Nome do Produto";

const descricaoProduto = document.createElement("p");
descricaoProduto.innerText =
  "Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

const precoProduto = document.createElement("p");
precoProduto.innerText = "Preço: R$ 99,99";

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);

document.body.appendChild(produto);
