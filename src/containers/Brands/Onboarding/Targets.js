import { h, Component } from 'preact'
import Label from './../../../components/Label/index';
import SingleLineTextInput from './../../../components/SingleLineTextInput/index';

export default class Targets extends Component {
    render() {
        const {
            components: {
                StepContents,
                Explaination,
                StepForm,
                Group,
                IFrameContainer
            },
            translations,
            clients,
            futureClients,
            offers,
            conversations,
            inDatabase,
            updateField
        } = this.props
        return (
            <StepContents>
                <IFrameContainer>
                    <iframe width="504" height="284" src={translations.getLL('ONBOARDING_VIDEO_SRC_GOALS', 'https://www.youtube.com/embed/2vtO__uWTtw')} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IFrameContainer>
                <Explaination>
                    SOME TEXT HERE
                        </Explaination>
                <StepForm>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_CLIENTS', 'How many clients do you currently have?')}</Label>
                        <SingleLineTextInput value={clients} onChange={({ value }) => updateField('targets', 'clients', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_CLIENTS_FUTURE', 'How many clients would you like to add in the next 12 months?')}</Label>
                        <SingleLineTextInput value={futureClients} onChange={({ value }) => updateField('targets', 'futureClients', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_OFFERS', 'How many offers do you have to submit for this?')}</Label>
                        <SingleLineTextInput value={offers} onChange={({ value }) => updateField('targets', 'offers', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_CONVERSATIONS', 'How many conversations should you have to be able to submit an offer?')}</Label>
                        <SingleLineTextInput value={conversations} onChange={({ value }) => updateField('targets', 'conversations', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_IN_DATABASE', 'How many addresses are there in your email database?')}</Label>
                        <SingleLineTextInput value={inDatabase} onChange={({ value }) => updateField('targets', 'inDatabase', value)} />
                    </Group>
                </StepForm>
            </StepContents>
        )
    }
}