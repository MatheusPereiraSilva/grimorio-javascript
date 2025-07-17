const $cep = document.querySelector("#inputCEP");

async function obterEndereco(cep) {
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  const resposta = await fetch(url);
  if(!resposta.ok) throw Error ("CEP inválido")
  try {
    const json = await resposta.json()
    return json
  } catch (error) {
    throw Error("Algo deu errado no servidor");
  }
}
function mostrarEndereco({ logradouro, bairro, localidade, uf }) {
  document.querySelector("#inputLogradouro").value = logradouro;
  document.querySelector("#inputBairro").value = bairro;
  document.querySelector("#inputCidade").value = localidade;
  document.querySelector("#inputEstado").value = uf;
}
function mostrarErro(erro) {
  document.querySelector("#bs-feedback .content").textContent = erro;
  document.querySelector("#bs-feedback").style.transform = "translateY(0)";
}
function esconderErro() {
  document.querySelector("#bs-feedback").removeAttribute("style");
}
document
  .querySelector("#bs-feedback .close")
  .addEventListener("click", function () {
    esconderErro();
  });
$cep.addEventListener("input", function () {
  let cep = this.value;
  cep = cep.replace("-", "");
  if (cep.length === 8) {
    const promise = obterEndereco(cep)
      .then((dado) => {
        if (dado.erro) throw Error("CEP inexistente");
        mostrarEndereco(dado);
      })
      .catch((err) => {
        mostrarErro(err.message);
      });
  }
});
