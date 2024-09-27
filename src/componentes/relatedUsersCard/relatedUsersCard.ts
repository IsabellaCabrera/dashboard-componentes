export enum relatedUsers {
    "message" = "message",
    "image1" = "image1",
      "username1" = "username1",
    }
    
    class relatedUsersCard extends HTMLElement {
      
      
    
      static get observedAttributes() {
        return Object.values(relatedUsers);
      }
    
      constructor() {
        super();
        this.attachShadow({ mode: 'open' });
      }
    
      connectedCallback() {
        this.render();
      }
    
      attributeChangedCallback(propName: relatedUsers, oldValue: string | undefined, newValue: string | undefined) {
        if(oldValue !== newValue){
        this.render();}
      }
    
      render() {
        if (this.shadowRoot) {
          const image1 = this.getAttribute(relatedUsers.image1);
          const username1 = this.getAttribute(relatedUsers.username1);
  
          this.shadowRoot.innerHTML =
           `
    
              <div class="container">
            
              <div class="user-box">
                <img class="user-image" src="${image1 || 'default_image1.png'}" alt="User 1 Image">
                <h3 class="user-text">${username1 || 'Username 1'}</h3>
              </div>
    
          `;
        }
      }
  
    }
    
    
    customElements.define('related-user', relatedUsersCard);
    export default relatedUsersCard;
    