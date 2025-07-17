const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
getNotes().forEach((note) => {
  const noteEl = createNoteEl(note.id, note.content);
  container.insertBefore(noteEl, btn);
});
function deleteNote(id, element) {
  const notes = getNotes().filter((note)=>note.id !== id);
  saveNote(notes);
  container.removeChild(element);

}
function updateNote(id, content) {
  const allNotes = getNotes()
  const target = allNotes.filter((note)=>note.id === id)[0];
  target.content = content;
  saveNote(allNotes);
}
function createNoteEl(id, content) {
  const element = document.createElement("textarea");
  element.classList.add("note");
  element.placeholder = "Empty Note";
  element.value = content;
  element.addEventListener("dblclick", () => {   
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(id, element);
    }
  });
  element.addEventListener("input", () => {
    updateNote(id, element.value);
  });  
  return element;
}
function saveNote(notes) {
  localStorage.setItem("nota-app", JSON.stringify(notes));
}
function getNotes() {
  return JSON.parse(localStorage.getItem("nota-app") || "[]");
}
function addNote() {
  const notes = getNotes();
  const noteObj = {
    id: Math.floor(Math.random() * 100000),
    content: "",
  };
  const noteEl = createNoteEl(noteObj.id, noteObj.content);
  container.insertBefore(noteEl, btn);
  notes.push(noteObj);
  saveNote(notes);
}
btn.addEventListener("click", addNote);
