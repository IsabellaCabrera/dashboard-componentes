export enum littleAttribute {
    'img'='img'
}

class lPost extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttribute(){
        return Object.values(littleAttribute);
    }

    attributeChangedCallback(propName: littleAttribute, oldValue: string | undefined,newValue: string | undefined) {
        if(oldValue !== newValue){
            this.render();
        }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const img = this.getAttribute(littleAttribute.img) || 'No image';

            this.shadowRoot.innerHTML = `
            <div class="post3">
            <div id="image">
             <img src="${img}">
            </div>
            </div>
            
            <style>
            .post3 {
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
            
            </style>
            `;
        }
    }
}
customElements.define('little-component-post',lPost);
export default lPost;