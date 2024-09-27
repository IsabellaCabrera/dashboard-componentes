export enum userinfoAtributte {
    'title' = 'title',
    'description' = 'description',
  };
  
  class uInfoPost extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    static get observedAttributes() {
      return Object.values(userinfoAtributte);
    }
  
    attributeChangedCallback(propName: userinfoAtributte, oldValue: string | undefined, newValue: string | undefined) {
      if (oldValue !== newValue) {
        this.render();
      }
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      if (this.shadowRoot) {
        const title = this.getAttribute(userinfoAtributte.title) || 'No title';
        const description = this.getAttribute(userinfoAtributte.description) || 'No description';
  
        this.shadowRoot.innerHTML = `
          
  
          <div class="card">
            <div class="date">${title}</div>
            <div class="username-container">${description}</div>
          </div>

          <style>
                    .card {
           width: 300px;
              height: 400px;
            background: #f9f9f9;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            font-family: 'Arial', sans-serif;
            }

            .date {
            font-size: 20px;
            font-weight: bold;
            color: #333;
            margin-bottom: 15px;
            }

            .username-container {
            font-size: 16px;
            color: #666;
            line-height: 1.6;
            }

      </style>
        `;
      }
    }
  }
  
  customElements.define('trending-info-card', uInfoPost);
  export default uInfoPost;
  