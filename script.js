// Custom Button Component
class MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
          <style>
              button {
                  padding: 10px;
                  cursor: pointer;
                  font-size: 16px;
              }
          </style>
          <button>Click me!</button>
      `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', () => {
      alert('Button clicked!');
    });
  }
}

// Custom Blogs Component
class MyBlogs extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.theme = this.getAttribute('theme') || 'primary';

    this.shadowRoot.innerHTML = `
          <style>
              :host {
                  display: block;
                  margin-top: 20px;
              }
              h2 {
                  color: ${this.theme === 'primary' ? '#3498db' : '#e74c3c'};
              }
              p {
                  color: ${this.theme === 'primary' ? '#2c3e50' : '#7f8c8d'};
              }
          </style>
          <div>
              <slot></slot>
          </div>
      `;
  }
}

// Define the custom elements
customElements.define('my-button', MyButton);
customElements.define('my-blogs', MyBlogs);
