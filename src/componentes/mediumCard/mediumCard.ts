export enum mediumAttribute {
    'img' = 'img',
    'description' = 'description'
}

class mPost extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    static get observedAttributes() {
        return Object.values(mediumAttribute);
    }

    attributeChangedCallback(propName: mediumAttribute, oldValue: string | undefined, newValue: string | undefined) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            const img = this.getAttribute(mediumAttribute.img) || 'Not found';
            const description = this.getAttribute(mediumAttribute.description) || 'Not found';

            this.shadowRoot.innerHTML = `
            <div class="post2">
                <div id="image">
                    <img src="${img}">
                </div>
                <div id="description">
                    <div class="description-text">
                         <p>${description}</p>
                    </div>
                </div>
            </div>
            <style>
            .post2 {
                position: relative; /* Posición relativa para permitir el posicionamiento absoluto de los elementos hijos */
                width: 200px; /* Ancho fijo de la card */
                height: 300px; /* Alto fijo de la card */
                overflow: hidden; /* Ocultar desbordamiento */
                border-radius: 8px; /* Bordes redondeados */
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil */
                margin: 10px; /* Espacio entre cards */
                background-color: #fff; /* Fondo blanco */
            }
            #image {
                position: absolute; /* Posición absoluta para que ocupe toda la card */
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden; /* Ocultar desbordamiento de la imagen */
            }
            #image img {
                width: 100%; /* La imagen ocupa el 100% del contenedor */
                height: 100%; /* La imagen también ocupa el 100% de la altura */
                object-fit: cover; /* Asegura que la imagen cubra el contenedor sin distorsionarse */
            }
            #description {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: rgba(255, 255, 255, 0.2); /* Fondo blanco semitransparente */
                backdrop-filter: blur(5px); /* Efecto de desenfoque en el fondo */
                color: white; /* Color del texto */
                padding: 10px; /* Espacio interno */
                text-align: center;
                border-radius: 0 0 8px 8px; /* Bordes redondeados en la parte inferior */
            }
            .description-text {
                font-size: 9px; /* Tamaño de fuente */
                margin: 0; /* Eliminar margen */
            }
        </style>
            `;
        }
    }
}

customElements.define('medium-component-post', mPost);
export default mPost;
