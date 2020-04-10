import { LitElement, html } from 'https://unpkg.com/lit-element?module';

const author = 'open-wc.org';
const footerTemplate = html `<footer>Made with 💗 by <a href="https://open-wc.org">${author}</a></footer>`;

class TodoApp extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    console.log('Lit Element works');
  }

  render() {
    return html `
    <h1>Todo app with Lit Element and Lit HTML</h1>
    ${footerTemplate}
    `
  }
}

customElements.define('todo-app', TodoApp);
