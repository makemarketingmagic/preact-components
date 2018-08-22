import { h, Component } from 'preact';
import Label from './../Label/index';
import Value from './../Value/index';

export default class LabelValue extends Component {
    render() {
        const { flipped, labelText, valueText } = this.props;
        let elements = [
            <Label>{labelText}</Label>,
            <Value>{valueText}</Value>
        ]
        elements = flipped ? elements.reverse() : elements
        return (
            <div>
                {elements.map((element) => (
                    element
                ))}
            </div>
        )
    }
}

