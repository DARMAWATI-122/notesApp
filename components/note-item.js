class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return ['title', 'body'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title' || name === 'body') {
            this.render();
        }
    }

    render() {
        const title = this.getAttribute('title') || 'No Title';
        const body = this.getAttribute('body') || 'No Content';

        this.shadowRoot.innerHTML = `
            <div>
                <h2>${title}</h2>
                <p>${body}</p>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);
