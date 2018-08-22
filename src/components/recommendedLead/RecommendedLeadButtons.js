import { h } from 'preact';
import style from './style.less';
import { MUIButton } from '../common/MUIComponents';
// eslint-disable-next-line no-unused-vars
import mdl from 'material-design-lite/material';
import TickIcon from '../icons/TickIcon';
import LaterIcon from '../icons/LaterIcon';

export default class RecommendedLeadButtons {
    render() {
        const { nextPage } = this.props
        return (
            <div class={style.buttonsContainer}>
                <MUIButton
                    raised={true}
                    primary={true}
                    onClick={nextPage}
                >
                    <div class={style.buttonContent}>
                        <LaterIcon color={'#EE4055'} />
                        <span>Herinner me later</span>
                    </div>
                </MUIButton>
                <MUIButton
                    raised={true}
                    colored={true}
                    accent={true}
                >
                    <div class={style.buttonContent}>
                        <TickIcon />
                        <span>Contact opgenomen</span>
                    </div>
                </MUIButton>
            </div>
        )
    }
}