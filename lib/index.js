'use strict';

require('babel-polyfill');

var _preact = require('preact');

require('./style');

// import 'isomorphic-fetch';
require('preact/devtools'); // turn this on if you want to enable React DevTools!

var root = void 0;
function init() {
    var App = require('./containers/demo').default;
    root = (0, _preact.render)((0, _preact.h)(App, null), document.body, root);
}

// in development, set up HMR:
if (module.hot) {
    module.hot.accept('./containers/demo', function () {
        return requestAnimationFrame(init);
    });
}

init();