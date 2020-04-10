import { LitElement, html } from 'https://unpkg.com/lit-element?module';

const author = 'open-wc.org';
const homepage = 'https://open-wc.org';
const footerTemplate = html`<footer>Made with 💗 by <a href="${homepage}">${author}</a></footer>`;

class TodoApp extends LitElement {
  static get properties() {
    return {
      todos: { type: Array }
    }
  }

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

    <input id="addTodoInput" placeholder="Add todo..."/>
    <button @click="${this._addTodo}">Add</button>

    <ol>
      ${this.todos.map(todo => html`
        <li>
          <input type="checkbox"
          .checked=${todo.finished}
          @change=${e => this._changeTodoFinished(e, todo)}
        />
        ${todo.text}
        <button @click=${() => this._removeTodo(todo)}>❌</button></li>
      `)}
    </ol>
    ${footerTemplate}
    `
  }

  _addTodo() {
    const input = this.shadowRoot.getElementById('addTodoInput');
    const text = input.value;
    input.value = '';

    this.todos = [
      ...this.todos,
      { text, finished: false }
    ];
  };

  _removeTodo(item) {
    this.todos = this.todos.filter(e => e !== item);
  };

  _changeTodoFinished(e, updatedTodo) {
    const finished = e.target.checked;
    this.todos = this.todos.map(todo => {
      if (todo !== updatedTodo) {
        return todo;
      } else {
        return { ...updatedTodo, finished }
      }
    });
  };
}

customElements.define('todo-app', TodoApp);
