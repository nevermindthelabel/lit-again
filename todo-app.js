import { LitElement, html } from 'https://unpkg.com/lit-element?module';

const author = 'open-wc.org';
const homepage = 'https://open-wc.org';
const footerTemplate = html`<footer>Made with 💗 by <a href="${homepage}">${author}</a></footer>`;

class TodoApp extends LitElement {
  constructor() {
    super();
    this.todos = [
      'Do thing 1',
      'Do thing 2',
      'Do thing 3'
    ];
  }

  render() {
    return html`
    <h1>Todo app with Lit Element and Lit HTML</h1>

    <ol>
      ${this.todos.map(todo => html`
        <li>${todo}</li>
      `)}
    </ol>
    ${this.todos}
    ${footerTemplate}
    `
  }
}

customElements.define('todo-app', TodoApp);
