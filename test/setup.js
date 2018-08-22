import 'regenerator-runtime/runtime';
import chai from 'chai';
import assertJsx, { options } from 'preact-jsx-chai';
import { cleanup } from 'preact-testing-library';
// when checking VDOM assertions, don't compare functions, just nodes and attributes:
options.functions = false;

// activate the JSX assertion extension:
chai.use(assertJsx);

afterEach(function () { cleanup() })

global.sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
