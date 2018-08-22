import { h } from 'preact';
import render from 'preact-render-to-string';
import Button from '../../src/components/Button';
import TickIcon from './../../src/components/icons/TickIcon';

describe('Button', () => {
    it('should render', () => {
        const element = render(<Button>Hello World</Button>)
        expect(element).toMatchSnapshot()
    });

    it('should render secondary', () => {
        const element = render(<Button secondary>Hello World</Button>)
        expect(element).toMatchSnapshot()
    });

    it('should render disabled', () => {
        const element = render(<Button disabled>Hello World</Button>)
        expect(element).toMatchSnapshot()
    });

    it('should render with Icon on the left', () => {
        const element = render(<Button Icon={TickIcon} iconLeft>Hello World</Button>)
        expect(element).toMatchSnapshot()
    })

    it('should render with Icon on the right', () => {
        const element = render(<Button Icon={TickIcon} iconRight>Hello World</Button>)
        expect(element).toMatchSnapshot()
    })
})