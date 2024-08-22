class NoteForm extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <form id="note-form">
                <input type="text" id="title" placeholder="Title" required>
                <textarea id="body" placeholder="Note content" required></textarea>
                <button type="submit">Add Note</button>
            </form>
        `;
        this.querySelector('#note-form').addEventListener('submit', this.handleSubmit.bind(this));
    }

    async handleSubmit(event) {
        event.preventDefault();
        const title = this.querySelector('#title').value;
        const body = this.querySelector('#body').value;

        // Create a new note item element
        const noteItem = document.createElement('note-item');
        noteItem.setAttribute('title', title);
        noteItem.setAttribute('body', body);

        // Append to the notes list
        document.querySelector('#notes-list').appendChild(noteItem);

        // Clear form
        this.querySelector('#note-form').reset();
    }
}

customElements.define('note-form', NoteForm);
