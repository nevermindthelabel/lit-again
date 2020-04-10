import { LitElement, html } from 'https://unpkg.com/lit-element?module';

const author = 'open-wc.org';
const homepage = 'https://open-wc.org';
const footerTemplate = html`<footer>Made with 💗 by <a href="${homepage}">${author}</a></footer>`;

class TodoApp extends LitElement {
  constructor() {
    super();
    this.todos = [
      { text: 'Do thing 1', finished: true },
      { text: 'Do thing 2', finished: false },
      { text: 'Do thing 3', finished: false }
    ];
  }

  render() {
    return html`
    <h1>Todo app with Lit Element and Lit HTML</h1>

    <ol>
      ${this.todos.map(todo => html`
        <li>${todo.text}  (${todo.finished ? 'Completed' : 'Not Completed'})</li>
      `)}
    </ol>
    ${footerTemplate}
    `
  }
}

customElements.define('todo-app', TodoApp);
