export enum AttributeUsersBanner {
    "message" = "message",
}

class UsersBannerCard extends HTMLElement {
    message?: string;

    static get observedAttributes() {
        return Object.keys(AttributeUsersBanner);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: AttributeUsersBanner, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap'); /* Importa Poppins */
                
                .banner {
                    background-color: #3e3e3e;
                    color: #fff;
                    padding: 10px 20px;
                    border-radius: 10px;
                    text-align: center;
                    font-family: 'Poppins', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                }
            </style>

            <div class="banner">
                ${this.message || 'You may be interested in'}
            </div>
            `;
        }
    }
}

customElements.define('relatedusers-banner', UsersBannerCard);
export default UsersBannerCard;