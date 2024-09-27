

export enum bigAttribute {
    'img' = 'img',
    'title' = 'title',
    'bodytext' = 'bodytext'
}

class Post extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'})
    }

    static get observedAttributes(){
        return Object.values(bigAttribute);
    }
    attributeChangedCallback(propName: bigAttribute, oldValue: string | undefined, newValue: string |undefined){
        if(oldValue !==newValue){
            this.render();
        }
    }
    connectedCallback(){
        this.render();
        

    }
    render(){
        if(this.shadowRoot){
         const img = this.getAttribute(bigAttribute.img) || 'not found';
         const title = this.getAttribute(bigAttribute.title) || 'not found';
         const bodytext = this.getAttribute(bigAttribute.bodytext) || 'not found';

         const followButton = document.createElement('message-button')

         this.shadowRoot.innerHTML= `
         <link rel="stylesheet" href="../src/components/card/cardStyle.css">

         <div class="post">
            <div id="image">
                <img src="${img}">
            </div>
            <div id="info-container">
                    <div class = "title">
                        <h1>${title}</h1>
                </div>
                    <div class="info">
                        <p> ${bodytext}</p>
                </div>
            
            
            </div>

         </div>

                <style>
                .post {
                    display: flex;
                    align-items: center;
                    background-color: #f8f3ec;
                    border-radius: 20px;
                    font-family: 'Arial', sans-serif;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    width: 600px;
                    height: 300px;
                     margin: 10px; /* Espacio entre cards */

                    
                }

                #image {
                    flex: 1;
                    
                }

                #image img {
                overflow: hidden; /* Ocultar desbordamiento de la imagen */

                    object-fit: cover;
                    width: 300px;
                    height: 300px; /* La imagen también ocupa el 100% de la altura */
                }

                #info-container {
                    
                    padding-left: 20px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start; 
                }

                .title {
                    margin: 0;
                    font-size: 15px;
                    color: #A35C28;
                    text-align: center;

                }

                .info {
                     padding: 10px; /* Espacio interno */

                    margin-top: 10px;
                    font-size: 10px;
                    color: #5a5a5a;
                    
                }
            </style>
         `
         this.shadowRoot.querySelector('#button-container')?.appendChild(followButton);
        }
    }
}
customElements.define('component-post',Post);
export default Post;