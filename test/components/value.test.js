import { h } from 'preact';
import render from 'preact-render-to-string'
import Value from './../../src/components/Value';

describe('Value', () => {
    it('should show the value passed to it', () => {
        const value = render(<Value>Hello World</Value>)
        expect(value).toMatchSnapshot()
    });
})