class EditAlunoView {
  constructor(form, materias) {
    this.form = form;
    this.container = form.querySelector("[data-edit-notas]");
    this.materias = materias;
  }
  render(aluno) {
    const html = this.materias
      .map((materia) => {
        return `
        <div class="row" data-materia="${materia}">
          <div class="input-field col s4">
            <input id="materia_${materia}" type="text" class="validate" disabled value="${materia}" />
          </div>
          <div class="input-field col s2">
            <input id="nota_${materia}_0" type="number" class="validate" data-trimestre="0"min="0" max="10" value ="${aluno.notas[materia]?.[0]}" />
          </div>
          <div class="input-field col s2">
             <input id="nota_${materia}_1" type="number" class="validate" data-trimestre="1" min="0" max="10" value ="${aluno.notas[materia]?.[1]}"/>
          </div>
          <div class="input-field col s2">
             <input id="nota_${materia}_2" type="number" class="validate" data-trimestre="2" min="0" max="10" value ="${aluno.notas[materia]?.[2]}" />
          </div>
          <div class="input-field col s2">
            <input id="nota_${materia}_3" type="number" class="validate" data-trimestre="3" min="0" max="10" value ="${aluno.notas[materia]?.[3]}" />
          </div>
        </div>
      `;
      })
      .join("");
    this.container.innerHTML = html;
  }
}
