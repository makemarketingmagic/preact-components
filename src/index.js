// import 'promise-polyfill';
// import 'isomorphic-fetch';
import { h, render } from 'preact';
import './style';


let root;
function init() {
	let App = require('./components/recommendedLead').default;
	root = render(<App />, document.body, root);
}

// in development, set up HMR:
if (module.hot) {
	require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/recommendedLead', () => requestAnimationFrame(init));
}

init();
