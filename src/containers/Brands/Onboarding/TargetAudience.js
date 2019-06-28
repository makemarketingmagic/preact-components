import { h, Component } from 'preact'
import RadioButtons from './../../../components/RadioButtons/index';
import Label from './../../../components/Label/index';
import SingleLineTextInput from '../../../components/SingleLineTextInput';
import Helmet from "preact-helmet";

export default class TargetAudience extends Component {
    render() {
        const {
            components: {
                StepContents,
                Explaination,
                StepForm,
                Group,
                IFrameContainer,
                SectionTitle
            },
            data: {
                spannendCommuniceren,
                schrijvenSpannend,
                leukCommuniceren,
                interviewer,
                stijlZakelijkPersoonlijk,
                stijlFormeelInformeel,
                stijlAanhef,
                voorbeeldUrl
            },
            updateField,
            translations,
        } = this.props
        return (
            <StepContents>
                <Helmet title={`${translations.getLL('ONBOARDING', 'Onboarding')} | ${translations.getLL('TARGET_AUDIENCE', 'Target Audience')} | WOO`} />
                <IFrameContainer>
                    <iframe
                        class="embed-responsive-item"
                        src={translations.getLL('ONBOARDING_VIDEO_SRC_TARGET_GROUP', 'https://www.youtube.com/embed/rUaLSEnyMBE?rel=0')}
                        frameborder="0"
                        allowfullscreen
                    />
                </IFrameContainer>
                <Explaination>
                    Explaination here
                </Explaination>
                <StepForm>
                    <SectionTitle>{translations.getLL('COMMUNICATION', 'Communication')}</SectionTitle>
                    <Group>
                        <Label>{translations.getLL("IS_COMMUNICATION_EXCITING", "Vind je het spannend om te gaan communiceren?")}</Label>
                        <RadioButtons
                            onChange={(value) => updateField('audience', 'spannendCommuniceren', value)}
                            options={[
                                { label: translations.getLL('YES', 'Yes'), data: 'ja', selected: spannendCommuniceren === 'ja' },
                                { label: translations.getLL('NO', 'No'), data: 'nee', selected: spannendCommuniceren === 'nee' }
                            ]}
                        />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('IS_GHOSTWRITER_EXCITING', 'Vind je het spannend dat iemand anders jouw teksten gaat schrijven?')}</Label>
                        <RadioButtons
                            onChange={(value) => updateField('audience', 'schrijvenSpannend', value)}
                            options={[
                                { label: translations.getLL('YES', 'Yes'), data: 'ja', selected: schrijvenSpannend === 'ja' },
                                { label: translations.getLL('NO', 'No'), data: 'nee', selected: schrijvenSpannend === 'nee' }
                            ]}
                        />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('IS_CORPORATE_COMMUNICATION_EXCITING', 'Vindt de rest van de organisatie het leuk dat je gaat communiceren?')}</Label>
                        <RadioButtons
                            onChange={(value) => updateField('audience', 'leukCommuniceren', value)}
                            options={[
                                { label: translations.getLL('YES', 'Yes'), data: 'ja', selected: leukCommuniceren === 'ja' },
                                { label: translations.getLL('NO', 'No'), data: 'nee', selected: leukCommuniceren === 'nee' }
                            ]}
                        />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('WHO_ARE_BEING_INTERVIEWED', 'Wie worden er geïnterviewd voor het schrijven van de blogartikelen?')}</Label>
                        <RadioButtons
                            onChange={(value) => updateField('audience', 'interviewer', value)}
                            options={[
                                { label: translations.getLL('ME', 'Myself'), data: 'ikzelf', selected: interviewer === 'ikzelf' },
                                { label: translations.getLL('OTHERS_AS_WELL', 'Others'), data: 'ookanderen', selected: interviewer === 'ookanderen' }
                            ]}
                        />
                    </Group>
                    <SectionTitle>{translations.getLL('PREFERENCES', 'Preferences')}</SectionTitle>
                    <Label>{translations.getLL('WHAT_STYLE_DO_YOU_WANT', 'Which style will you use for communication?')}</Label>
                    <Group>
                        <RadioButtons
                            onChange={(value) => updateField('audience', 'stijlZakelijkPersoonlijk', value)}
                            formStyle={{
                                display: 'flex'
                            }}
                            inputStyle={{
                                marginRight: 16
                            }}
                            options={[
                                { label: translations.getLL('CORPORATE', 'Corporate'), data: 'zakelijk', selected: stijlZakelijkPersoonlijk === 'zakelijk' },
                                { label: translations.getLL('PERSONAL', 'Personal'), data: 'persoonlijk', selected: stijlZakelijkPersoonlijk === 'persoonlijk' }
                            ]}
                        />
                    </Group>
                    <Group>
                        <RadioButtons
                            onChange={(value) => updateField('audience', 'stijlFormeelInformeel', value)}
                            formStyle={{
                                display: 'flex'
                            }}
                            inputStyle={{
                                marginRight: 16
                            }}
                            options={[
                                { label: translations.getLL('FORMAL', 'Formal'), data: 'formeel', selected: stijlFormeelInformeel === 'formeel' },
                                { label: translations.getLL('INFORMAL', 'Informal'), data: 'informeel', selected: stijlFormeelInformeel === 'informeel' }
                            ]}
                        />
                    </Group>
                    <Group>
                        <RadioButtons
                            onChange={(value) => updateField('audience', 'stijlAanhef', value)}
                            formStyle={{
                                display: 'flex'
                            }}
                            inputStyle={{
                                marginRight: 16
                            }}
                            options={[
                                { label: translations.getLL('FORMAL_MANNER_OF_ADDRESSING_SOMEONE', 'U'), data: 'u', selected: stijlAanhef === 'u' },
                                { label: translations.getLL('INFORMAL_MANNER_OF_ADDRESSING_SOMEONE', 'Je'), data: 'je', selected: stijlAanhef === 'je' }
                            ]}
                        />
                    </Group>
                    <Group>
                        <Label>{translations.getLL('EXAMPLES_OF_ARTICLES_YOU_LIKE_COL', 'Voorbeeld van een artikel zoals jij ook zou willen communiceren:')}</Label>
                        <SingleLineTextInput
                            onChange={({ value }) => updateField('audience', 'voorbeeldUrl', value)}
                            value={voorbeeldUrl}
                        />
                    </Group>
                </StepForm>
            </StepContents>
        )
    }
}