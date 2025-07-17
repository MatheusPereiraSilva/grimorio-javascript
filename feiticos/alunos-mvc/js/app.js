// const alunos = [
//   {
//     _id: 0,
//     nome: "chico melato",
//     notas: {
//       Português: [1, 1, 2, 2],
//       Matemática: [2, 2, 2, 2],
//       História: [6, 2, 5, 10],
//       Ciências: [3, 3, 3, 3],
//     },
//   },
//   {
//     _id: 1,
//     nome: "talita lima",
//     notas: {
//       Português: [10, 4, 7, 4],
//       Matemática: [4, 4, 5, 5],
//       História: [5, 5, 6, 6],
//       Ciências: [7, 7, 8, 9],
//     },
//   },
// ];

const alunosService = new AlunosService();

const alunosView = new AlunosView(
  document.querySelector("[data-table-alunos]"),
  new MateriasService().materias
);

const alunosController = new AlunosController(alunosService, alunosView);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.querySelector("#first_name").value;
  alunosController.add({ nome });
});
document.querySelector("#search_name").addEventListener("input", function () {
  const name = this.value;
  sessionStorage.setItem("search", name);
  if (name.length > 2 || name.length === 0) {
    alunosController.search(name);
  }
});
const inputEvent = new Event("input");
// const inputEvent_IE = document.createEvent("Event")
// inputEvent_IE.initEvent("input", true, true);

if (sessionStorage.getItem("search")) {
  document.querySelector("#search_name").value =
    sessionStorage.getItem("search");
  document.querySelector("#search_name").dispatchEvent(inputEvent);
  // document.querySelector("#search_name").dispatchEvent(inputEvent_IE);
}
