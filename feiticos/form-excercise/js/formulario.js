(function () {
  "use strict";

  const txtTitulo = document.getElementById("txtTitulo");
  const btn = document.getElementById("btn");
  const formCadastro = document.querySelector(".formCadastro");
  const txtDescricao = document.querySelector("#txtDescricao");
  const contadorContainer = document.querySelector("#contador");
  const resta = contadorContainer.getElementsByTagName("span")[0];
  const maxima = txtDescricao.maxLength;
  const chkAceito = document.getElementById("chkAceito");
  const feedbackMessage = document.querySelector("#feedbackMessage");
  const feedbackMessageCloseBtn =
    feedbackMessage.getElementsByTagName("button")[0];
  mostrarNumero(maxima);

  // btn.addEventListener("click", function (e) {});
  formCadastro.addEventListener("submit", function (e) {
    console.log(txtTitulo.value);
    if (!txtTitulo.value) {
      showFeedback("Preencha todos os campos", function () {
        txtTitulo.focus();
      });
      e.preventDefault();
    }
  });

  contadorContainer.removeAttribute("style");
  //contadorContainer.style.display = 'block';

  function checkLength(e) {
    let numeroLetrasDigitadas = this.value.length;
    let caractersRestantes = parseInt(maxima) - parseInt(numeroLetrasDigitadas);
    mostrarNumero(caractersRestantes);
  }

  function mostrarNumero(n) {
    resta.textContent = n;
  }

  txtDescricao.addEventListener("input", checkLength);

  function showFeedback(msg, cb) {
    // feedbackMessage.setAttribute('class', 'show');
    // feedbackMessage.textContent = msg
    feedbackMessage.classList.add("show");
    feedbackMessage.getElementsByTagName("p")[0].textContent = msg;
    feedbackMessageCloseBtn.focus();

    function hideErrorMessage() {
      feedbackMessage.classList.remove("show");
      feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage);
      feedbackMessageCloseBtn.removeEventListener("keyup", pressedKeyBoardOnBtn);

      if (typeof cb === "function") {
        cb();
      }
    }
    function pressedKeyBoardOnBtn(e) {
      if (e.keyCode === 27){
        hideErrorMessage()
      }
    }
    feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage);
    feedbackMessageCloseBtn.addEventListener("keyup", pressedKeyBoardOnBtn);
  }

  btn.disabled = true;
  chkAceito.addEventListener("change", function (e) {
    btn.disabled = !this.checked;
  });
})();
