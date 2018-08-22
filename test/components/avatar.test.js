import { h } from 'preact';
import render from 'preact-render-to-string';
import Avatar from '../../src/components/Avatar';

describe('Avatar', () => {
    it('should render', () => {
        const element = render(<Avatar
            imageUrl='test.png'
            name='Test Name'
            color='orange'
        />)
        expect(element).toMatchSnapshot()
    })
})