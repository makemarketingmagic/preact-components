import { h, Component } from 'preact';
import styles from './styles.less'
import SingleLineTextInput from '../SingleLineTextInput';
import MultiLineTextInput from '../MultiLineTextInput';
import Dropdown from './../Dropdown/index';
import RadioButtons from '../RadioButtons';
import Checkboxes from '../Checkboxes';
import Button from '../Button';
import LaterIcon from './../icons/LaterIcon';
import TickIcon from './../icons/TickIcon';

export default class InputsDemo extends Component {
    render() {
        return (
            <div class={styles.columns}>
                <div class={styles.title}>Inputs</div>
                <div class={styles.column}>
                    <div class={styles.subTitle}>Text Boxes</div>
                    <SingleLineTextInput placeholder='Single Line Text Input' />
                    <SingleLineTextInput placeholder='Text Input with Email Validation' validation='email' />
                    <SingleLineTextInput placeholder='Text Input with Phone Validation and Icon' validation='phone-nl' showIcon={true} />
                    <MultiLineTextInput placeholder='Auto Expanding Multiline Text Input' />
                    <div class={styles.divider} />
                </div>
                <div class={styles.column}>
                    <div class={styles.subTitle}>Selectors</div>
                    <Dropdown placeholder='Dropdown with Placeholder' options={[
                        { value: 0, text: 'Option 1' },
                        { value: 1, text: 'Option 2' },
                        { value: 2, text: 'Option 3' }
                    ]} />
                    <div class={styles.dividerSmall} />
                    <RadioButtons options={[
                        { label: 'Radio Button 1', data: 0 },
                        { label: 'Radio Button 2', data: 1 },
                        { label: 'Radio Button 3', data: 2 }
                    ]} />
                    <div class={styles.dividerSmall} />
                    <Checkboxes options={[
                        { label: 'Checkbox 1', data: 0 },
                        { label: 'Checkbox 2', data: 1 },
                        { label: 'Checkbox 3', data: 2 }
                    ]} />
                </div>
                <div class={styles.column}>
                    <div class={styles.subTitle}>Buttons</div>
                    <div><Button>Primary Button</Button></div>
                    <div><Button secondary>Secondary Button</Button></div>
                    <div><Button disabled>Disabled Button</Button></div>
                    <div><Button Icon={TickIcon} iconLeft={true}>Button with Icon</Button></div>
                    <div><Button disabled Icon={LaterIcon} iconRight={true}>Button with Icon on Right</Button></div>
                </div>
            </div>
        )
    }
}