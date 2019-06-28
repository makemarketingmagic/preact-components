import { h, Component } from 'preact';
import ExpandableSection from '../ExpandableSection';
import Markdown from 'preact-markdown';
import Button from './../Button/index';
import NavigateIcon from './../icons/NavigateIcon';
import LaterIcon from './../icons/LaterIcon';
import ArrowRightIcon from './../icons/ArrowRight';
import TickIcon from './../icons/TickIcon';
import InfoIcon from './../icons/InfoIcon';

export const components = {
    Link: ({ text, href }) => {
        const handleClick = () => {
            window.open(href, '_BLANK')
        }
        return (
            <Button onClick={handleClick} iconLeft={true} Icon={ArrowRightIcon}>{text}</Button>
        )
    },
    Test: ({ text }) => {
        const handleClick = () => {

        }

        return (
            <Button secondary={true} onClick={handleClick} iconLeft={true} Icon={InfoIcon}>{text}</Button>
        )
    },
    Complete: ({ text }) => {
        const handleClick = () => {

        }

        return (
            <Button onClick={handleClick} iconLeft={true} Icon={TickIcon}>{text}</Button>
        )
    }
}

export default class ExpandableMarkdownSection extends Component {
    render() {
        const { title, content } = this.props
        return (
            <ExpandableSection title={title}>
                <Markdown markdown={content} markupOpts={{
                    components,
                    allowEvents: true
                }} />
            </ExpandableSection>
        )
    }
}