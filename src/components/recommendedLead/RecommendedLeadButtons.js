import { h } from 'preact';
import style from './style.less';
import { Button } from '../common/MUIComponents';
import mdl from 'material-design-lite/material';
import TickIcon from '../icons/TickIcon';
import LaterIcon from '../icons/LaterIcon';

export default () => {
    return (
        <div class={style.buttonsContainer}>
            <Button
                raised={true}
                primary={true}
            >
                <div class={style.buttonContent}>
                    <LaterIcon color={'#EE4055'} />
                    <span>Herinner me later</span>
                </div>
            </Button>
            <Button
                raised={true}
                colored={true}
                accent={true}
            >
                <div class={style.buttonContent}>
                    <TickIcon />
                    <span>Contact opgenomen</span>
                </div>
            </Button>
        </div>
    )
}