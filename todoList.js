import { html, LitElement } from 'https://unpkg.com/lit-element?module';

class TodoList extends LitElement {
  static get properties() {
    return {
      todos: { type: Array }
    }
  }
  render() {
    if (!this.todos) {
      return html``;
    }

    return html`
      <ol>
        ${this.todos.map(todo => html`
          <li>
            <input
              type="checkbox"
              .checked="${todo.finished}"
              @change="${e => this._changeTodoFinished(e, todo)}"
            />
            ${todo.text}
            <button @click="${() => this._removeTodo(todo)}">❌</button>
          </li>
        `)}
      </ol>
    `;
  }
  _changeTodoFinished(e, updatedTodo) {
    const eventDetails = { updatedTodo, finished: e.target.checked };
    this.dispatchEvent(new CustomEvent('change-todo-finished', { detail: eventDetails }));
  }
  _removeTodo(item) {
    this.dispatchEvent(new CustomEvent('remove-todo', { detail: item }));
  }
}

customElements.define('todo-list', TodoList);
