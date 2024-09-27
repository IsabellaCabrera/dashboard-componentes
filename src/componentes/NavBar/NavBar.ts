export enum Attribute {
    "image" = "image",
    "foryou" = "foryou",
    "following" = "following"
}

class NavBar extends HTMLElement {
    image?: string;
    foryou?: string;
    following?: string;

    static get observedAttributes() {
        return Object.keys(Attribute);
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');

                nav {
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: #f5f5;
                    padding: 10px;
                }
                #logo {
                    margin-right: 20px;
                }
                #for-you {
                    display: flex;
                    flex-direction: column;
                    margin-right: 20px;
                    position: relative;
                }
                #for-you span {
                    font-size: 18px;
                    font-family: 'Poppins', sans-serif; /* Aplicamos la tipografía Poppins */
                    font-weight: 700; /* Bold */
                }
                #for-you::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: yellow;
                }
                #following {
                    font-size: 18px;
                    font-family: 'Poppins', sans-serif; 
                    font-weight: 700; 
                }
            </style>
            <nav>
                <div id="logo">
                    <img src="${this.image || ''}" alt="Logo" width="80px">
                </div>
                <div id="for-you">
                    <span>${this.foryou || 'For You'}</span>
                </div>
                <div id="following">
                    <span>${this.following || 'Following'}</span>
                </div>
            </nav>
            `;
        }
    }
}

customElements.define('nav-bar', NavBar);
export default NavBar;