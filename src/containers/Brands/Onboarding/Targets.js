import { h, Component } from 'preact'
import Label from './../../../components/Label/index';
import SingleLineTextInput from './../../../components/SingleLineTextInput/index';
import Helmet from "preact-helmet";

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
            data: {
                klanten,
                gewensteKlanten,
                offertes,
                gesprekken,
                inDatabase
            },
            updateField
        } = this.props
        return (
            <StepContents>
                <Helmet title={`${translations.getLL('ONBOARDING', 'Onboarding')} | ${translations.getLL('TARGETS', 'Targets')} | WOO`} />
                <IFrameContainer>
                    <iframe src={translations.getLL('ONBOARDING_VIDEO_SRC_GOALS', 'https://www.youtube.com/embed/2vtO__uWTtw')} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </IFrameContainer>
                <Explaination>
                    SOME TEXT HERE
                        </Explaination>
                <StepForm>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_CLIENTS', 'How many clients do you currently have?')}</Label>
                        <SingleLineTextInput value={klanten} onChange={({ value }) => updateField('goals', 'klanten', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_CLIENTS_FUTURE', 'How many clients would you like to add in the next 12 months?')}</Label>
                        <SingleLineTextInput value={gewensteKlanten} onChange={({ value }) => updateField('goals', 'gewensteKlanten', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_OFFERS', 'How many offers do you have to submit for this?')}</Label>
                        <SingleLineTextInput value={offertes} onChange={({ value }) => updateField('goals', 'offertes', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_CONVERSATIONS', 'How many conversations should you have to be able to submit an offer?')}</Label>
                        <SingleLineTextInput value={gesprekken} onChange={({ value }) => updateField('goals', 'gesprekken', value)} />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('HOW_MANY_IN_DATABASE', 'How many addresses are there in your email database?')}</Label>
                        <SingleLineTextInput value={inDatabase} onChange={({ value }) => updateField('goals', 'inDatabase', value)} />
                    </Group>
                </StepForm>
            </StepContents>
        )
    }
}