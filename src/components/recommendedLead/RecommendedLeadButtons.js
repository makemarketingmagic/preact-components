import { h } from 'preact';
import styled from 'styled-components';
import { MUIButton } from '../common/MUIComponents';
// eslint-disable-next-line no-unused-vars
import mdl from 'material-design-lite/material';
import TickIcon from '../icons/TickIcon';
import LaterIcon from '../icons/LaterIcon';
import scMixins from '../common/scMixins';

const ButtonsContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
        margin: 0 4px;
    }
    
    ${scMixins.media.mobile`
        margin-top: 16px;
        flex-direction: column;
        button {
            margin: 4px auto;
        }
    `}
`

const ButtonContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    svg {
        margin-right;
    }
`

export default class RecommendedLeadButtons {
    render() {
        const { nextPage } = this.props
        return (
            <ButtonsContainer>
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
            </ButtonsContainer>
        )
    }
}