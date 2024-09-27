export enum Attribute1 {
    "button1" = "button1",
    "answer"  = "answer",
    "findout" = "findout",
    "button2" = "button2",
    "image"   = "image",
}

class moodBanner extends HTMLElement {
    button1?: string;
    answer?: string;
    findout?: string;
    button2?: string;
    image?: string;

    static get observedAttributes() {
        return Object.keys(Attribute1);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute1, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap'); /* Importando Poppins */
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }

    body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c2c2c; /* Fondo similar al diseño */
    }

    .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #3e3e3e; /* Fondo del contenedor general */
    padding: 20px;
    border-radius: 15px;
    max-width: 1100px;
    width: 100%;
    gap: 30px;
    }

    .text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff; /* Color de texto blanco */
    max-width: 50%;
    }

    /* Botón Daily Tracker: Poppins SemiBold */
    .tracker-btn {
    background-color: #d1e1f0; /* Color del botón Daily Tracker */
    color: #5a5a5a;
    font-family: 'Poppins', sans-serif;
    font-weight: 600; /* Poppins SemiBold */
    border: none;
    border-radius: 20px;
    padding: 8px 20px;
    font-size: 14px;
    margin-bottom: 10px;
    }

    /* Answer daily questions: Poppins Medium */
    .text-content p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500; /* Poppins Medium */
    font-size: 18px;
    margin: 10px 0;
    }

    /* Find out today's mood: Poppins SemiBold */
    .text-content h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600; /* Poppins SemiBold */
    font-size: 36px;
    margin-bottom: 20px;
    }

    /* Botón Answer Now: Poppins Bold */
    .answer-btn {
    background-color: #f1c40f; /* Color del botón Answer Now */
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 700; /* Poppins Bold */
    border: none;
    border-radius: 10px;
    padding: 12px 20px;
    font-size: 16px;
    }

    .image-container {
    max-width: 50%;
    }

    .image-container img {
    max-width: 100%;
    border-radius: 15px; /* Esquinas redondeadas para la imagen */
    }
    </style>

    <section class="container">
        <div class="text-content">
            <button class="tracker-btn">${this.button1 || 'Daily tracker'}</button>
            <p>${this.answer || 'Answer daily questions'}</p>
            <h2>${this.findout || "Find out today's mood"}</h2>
            <button class="answer-btn">${this.button2 || 'Answer now'}</button>
        </div>
        <div class="image-container">
            <img src="${this.image || ''}" alt="Mood banner image">
        </div>
    </section>
            `;
        }
    }
}

customElements.define('mood-banner', moodBanner);
export default moodBanner;
