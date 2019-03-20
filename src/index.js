import 'babel-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './style';

require('preact/devtools');   // turn this on if you want to enable React DevTools!

let root;
function init() {
    let App = require('./containers/demo').default;
    root = render(<App />, document.body, root);
}

// in development, set up HMR:
if (module.hot) {
    module.hot.accept('./containers/demo', () => requestAnimationFrame(init));
}

init();
