import { html, LitElement } from 'https://unpkg.com/lit-element?module';
import './todoList.js';

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
    const completedCount = this.todos.filter(e => e.finished).length;
    const uncompletedCount = this.todos.length - completedCount;

    return html`
    <h1>Todo app with Lit Element and Lit HTML</h1>

    <input id="addTodoInput" placeholder="Add todo..."/>
    <button @click="${this._addTodo}">Add</button>

    <todo-list
      .todos=${this.todos}
      @change-todo-finished="${this._changeTodoFinished}"
      @remove-todo="${this._removeTodo}"
    ></todo-list>

    <div><h3>Completed todos: ${completedCount}</h3></div>
    <div><h3>Uncompleted Todos: ${uncompletedCount}</h3></div>
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
