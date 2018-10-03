import { h } from 'preact';
import styled from 'styled-components';
import { MUIButton } from '../common/MUIComponents';
// eslint-disable-next-line no-unused-vars
import mdl from 'material-design-lite/material';
import TickIcon from '../icons/TickIcon';
import LaterIcon from '../icons/LaterIcon';
import { media } from '../common/scMixins';

const ButtonsContainer = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
        margin: 0 4px;
    }
    
    ${media.mobile`
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
        margin-right: 8px;
    }
`

export default class RecommendedLeadButtons {
    render() {
        const { cardId, nextPage, remindMe, done, translations } = this.props
        return (
            <ButtonsContainer>
                <MUIButton
                    raised={true}
                    primary={true}
                    onClick={() => {
                        remindMe(cardId);
                        nextPage();
                    }}
                >
                    <ButtonContent>
                        <LaterIcon color={'#EE4055'} />
                        <span>{translations.REMIND_ME}</span>
                    </ButtonContent>
                </MUIButton>
                <MUIButton
                    raised={true}
                    colored={true}
                    accent={true}
                    onClick={() => {
                        done(cardId);
                        nextPage();
                    }}
                >
                    <ButtonContent>
                        <TickIcon />
                        <span>{translations.CONTACTED}</span>
                    </ButtonContent>
                </MUIButton>
            </ButtonsContainer>
        )
    }
}