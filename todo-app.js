import { LitElement, html } from 'https://unpkg.com/lit-element?module';

class TodoApp extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    console.log('Lit Element works');
  }

  render() {
    return html `
    <h1>Todo app with Lit Element and Lit HTML</h1>
    `
  }
}

customElements.define('todo-app', TodoApp);
