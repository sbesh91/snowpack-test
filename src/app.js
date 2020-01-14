// Import your web-ready dependencies
import { h, Component, render } from '/web_modules/preact.js';
import htm from '/web_modules/htm.js';

const html = htm.bind(h);
// Create your app
const app = html`
  <div>
    hello world
  </div>
`;
// Inject your application into the an element with the id `app`.
render(app, document.getElementById('app'));