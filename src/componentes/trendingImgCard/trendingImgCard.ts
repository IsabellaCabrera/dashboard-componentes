
export enum userAtributte {
      'username' = 'username',
      'date' = 'date',
      'image' = 'image'
};

class upost extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
    }

    static get observedAttribute(){
        return Object.values(userAtributte);
    }

    attributeChangedCallback(propName: userAtributte, oldValue: string | undefined,newValue: string | undefined) {
        if(oldValue !== newValue){
            this.render();
        }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const username = this.getAttribute(userAtributte.username) || 'No username';
            const date = this.getAttribute(userAtributte.date) || 'No date';
            const image = this.getAttribute(userAtributte.image) || 'No iamge';

            this.shadowRoot.innerHTML = `
            <div class= "card">
            <div class="username-container">
            <div class="Username">
                <h2>"${username}"</h2>
            </div>
            </div>
            <div class="date-container">
            <div class="date">
                <h2>"${date}"</h2>
            </div>
            </div>
            <div id="image">
                <img src="${image}">
            </div>

            </div>

            <style>
              .card {
              position: relative;
              width: 300px;
              height: 400px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              border-radius: 10px;
            }

            #image {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }

            #image img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }

            .username-container, .date-container {
              position: absolute;
              padding: 5px 15px;
              color: white;
              background: rgba(255, 255, 255, 0.3); /* Efecto vidrio */
              backdrop-filter: blur(10px); /* Desenfoque para el efecto vidrio */
              border-radius: 10px;
            }

            .username-container {
              bottom: 10px; /* Separado de la parte inferior */
              left: 10px; /* Posicionado en la esquina inferior izquierda */
            }

            .date-container {
              top: 10px; /* Separado de la parte superior */
              left: 10px; /* Posicionado en la esquina superior izquierda */
            }

            h2 {
              margin: 0;
              font-size: 16px;
            }

            
            </style>            `
        }
    }

}
customElements.define('trending-img-card',upost);
export default upost;