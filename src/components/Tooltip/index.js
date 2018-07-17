import { h, Component } from 'preact';
import style from './Tooltip.less';
import classNames from 'classnames';
import CrossIcon from '../icons/CrossIcon';

export default class Tooltip extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }

    toggleTooltip = () => {
        this.setState({ visible: !this.state.visible })
    }


    render() {
        const { name, position, message, color, closable = true } = this.props;
        return (
            <div class={classNames(style.tooltipContainer, 'notranslate', this.state.visible ? style.tooltipContainerOpen : style.tooltipContainerClosed)}>
                <div class={style.tooltip}>
                    <div class={style.tooltipContents}>
                        <div>
                            <div class={style.tooltipName}>{name}</div>
                            <div className={classNames(style.tooltipPosition, style[`tooltipPosition--${color}`])}>{position}</div>
                            <div class={style.tooltipMessage}>{message}</div>
                        </div>
                        {closable && <div onClick={this.toggleTooltip} class={style.closeButton}>
                            <CrossIcon className={style[`crossIcon--${color}`]} />
                        </div>}
                    </div>
                </div>
            </div>
        )
    }
}