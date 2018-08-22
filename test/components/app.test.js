import { h, render } from 'preact';
import { expect } from 'chai';

import Demo from '../../src/containers/demo';

describe('Demo', () => {
    let scratch;

    beforeAll(() => {
        scratch = document.createElement('div');
        (document.body || document.documentElement).appendChild(scratch);
    });

    beforeEach(() => {
        scratch.innerHTML = '';
    });

    afterAll(() => {
        scratch.parentNode.removeChild(scratch);
        scratch = null;
    });


    it('should render the homepage', () => {
        render(<Demo />, scratch);

        expect(scratch.innerHTML).to.contain('<div id="demo">');
    });
});
