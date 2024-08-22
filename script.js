// Fetch and display notes if needed
async function loadNotes() {
    const response = await fetch('data/notes.json');
    const notes = await response.json();

    const notesList = document.querySelector('#notes-list');
    notes.forEach(note => {
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('title', note.title);
        noteItem.setAttribute('body', note.body);
        notesList.appendChild(noteItem);
    });
}

document.addEventListener('DOMContentLoaded', loadNotes);
