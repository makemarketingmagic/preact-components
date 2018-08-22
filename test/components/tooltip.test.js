import { h } from 'preact';
import render from 'preact-render-to-string';
import { render as mock, fireEvent, debounceRenderingOff, wait } from 'preact-testing-library'
import Tooltip from './../../src/components/Tooltip/index';
import 'jest-dom/extend-expect'

describe('Tooltip', () => {
    it('should render container', () => {
        const tooltip = render(<Tooltip
            name='Test Name'
            position='Test Position'
            message='Test Message'
            color='orange'
        />)

        expect(tooltip).toMatchSnapshot()
    });

    it('should collapse on click', async () => {
        debounceRenderingOff()
        const tooltip = mock(<Tooltip
            name='Test Name'
            position='Test Position'
            message='Test Message'
            color='orange'
        />)
        fireEvent(
            tooltip.container.querySelector('.closeButton'),
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
        )
        await wait(() => (expect(tooltip.getByText('Test Name')).not.toBeVisible()), {
            timeout: 2500
        })
        expect(tooltip.getByText('Test Name')).not.toBeVisible()
    })
})