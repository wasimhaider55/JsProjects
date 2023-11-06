
const addBtn = document.getElementById("addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener(
    "click",
    function () {
        addNote();
    }
)


const addNote  = ()  => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML =  `
            <div class="tools">
                <i class="save fas fa-save"></i>
                <i class="trash fas fa-trash"></i>
            </div>
            <textarea></textarea>
        `;

        note.querySelector(".trash").addEventListener(
            "click",
            function () {
                note.remove();
            }

        )

        note.querySelector(".save").addEventListener(
            "click",
            function() {
                saveNotes();
            }
        )
        
       main.appendChild(note);

}