const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const alert = document.querySelector(".alert");
const copy = document.querySelector(".copy");

function createPassword() {
  const char =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=[]{}:;";
  const passwordLength = 16;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNum = Math.floor(Math.random() * char.length);
    password += char.substring(randomNum, randomNum + 1);
  }
  input.value = password;
}

function copyPassword() {
  input.select();
  input.setSelectionRange(0, 999);
  navigator.clipboard.writeText(input.value);
  alert.classList.add("active");
  alert.innerText = "Password Copied Successfully!"
  setTimeout(()=>alert.classList.remove("active"),3000)
}

copy.addEventListener("click", copyPassword);
btn.addEventListener("click", createPassword);
