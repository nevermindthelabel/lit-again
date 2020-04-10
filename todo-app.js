import { LitElement } from 'https://unpkg.com/lit-element?module';

class TodoApp extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    console.log('Lit Element works');
  }
}

customElements.define('todo-app', TodoApp);
