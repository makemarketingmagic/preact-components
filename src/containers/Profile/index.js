import { h, Component } from 'preact'
import styled from 'styled-components';
import { colors } from '../../components/common/scMixins';
import Button from '../../components/Button';
import Label from '../../components/Label';
import SingleLineTextInput from '../../components/SingleLineTextInput';
import Dropdown from '../../components/Dropdown';
import DatePicker from './../../components/DatePicker/index';


const Container = styled.div`
    display: flex;
    flex-direction: row;
`, LeftSide = styled.div`
    flex: 0.25;
    margin-right: 32px;
`, ImageContainer = styled.div`
    background-color: rgba(136, 165, 173, 0.2);
    mix-blend-mode: normal;
    width: 256px;
    height: 256px;
    position: relative;
    margin-bottom: 32px;
    &::after {
        content: '';
        height: 256px;
        width: 256px;
        position: absolute;
        left: 0;
        background-color: rgba(136, 165, 173, 0.2);
        mix-blend-mode: normal;
    }
`, ProfileImage = styled.img`
    max-height: 256px;
    max-width: 256px;
`, RightSide = styled.div`
    flex: 1;
    margin-left: 32px;
`, Title = styled.div`
    font-family: 'Varela Round';
    font-style: normal;
    font-weight: normal;
    line-height: 32px;
    font-size: 24px;

    color: ${colors.text};
`, ProfileForm = styled.form`

`, Group = styled.div`
    margin: 19px 0;
`
export default class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lockdown: false,
            first_name: '',
            last_name: '',
            picture: '',
            company: '',
            email: '',
            birthdate: new Date().toISOString().split('T')[0],
            languages: [{ text: 'English', value: 'en_GB' }],
            old_password: '',
            new_password: '',
            new_password2: ''
        }
    }

    componentDidMount() {
        let { user } = this.props,
            languages = Object.entries(this.props.languages).map(([key, value]) => {
                return { value: key, text: value, selected: key === user.language }
            })
        this.setState({ ...user, languages })
    }

    saveChanges = async () => {
        const { events: { saveChanges } } = this.props,
            {
                first_name,
                last_name,
                company,
                email,
                birthdate,
                languages
            } = this.state,
            language = languages.reduce((acc, val) => val.selected ? val.value : '', '')
        this.setState({ lockdown: true })
        let result = await saveChanges({
            first_name,
            last_name,
            company,
            email,
            birthdate,
            language
        })
        if (result) {

        }
        this.setState({ lockdown: true })
    }

    onChange = (field, value) => {
        let update = {}
        update[field] = value
        this.setState(update)
    }

    render() {
        let { translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { lockdown } = this.state
        translations.getLL = (label, fallback, values = []) => {
            let string = translations.getTranslation(label, fallback)
            const re = /(%v\d*)/ig
            let isString = true
            let result = []
            string = string.split(re)
            for (var i = 0; i < string.length; i++) {
                let stringFragment = string[i]
                let match = (/%v(\d*)/ig).exec(stringFragment)
                if (match) {
                    let index = parseInt(match[1])
                    if (values[index - 1].nodeName) {
                        isString = false
                    }
                    result.push(values[index - 1])
                } else {
                    result.push(stringFragment)
                }
            }
            return isString ? result.join('') : result
        }
        return (
            <Container>
                <LeftSide>
                    <ImageContainer>
                        <ProfileImage src={this.state.image} />
                    </ImageContainer>
                    <Button secondary={true}>{translations.getLL('UPLOAD_NEW_IMAGE', 'Upload new image')}</Button>
                </LeftSide>
                <RightSide>
                    <Title>{translations.getLL('PROFILE', 'Profile')}</Title>
                    <ProfileForm>
                        <Group>
                            <Label>{translations.getLL('FIRST_NAME', 'First Name')}</Label>
                            <SingleLineTextInput disabled={lockdown} value={this.state.first_name} onChange={({ value }) => { this.onChange('first_name', value) }} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('LAST_NAME', 'Last Name')}</Label>
                            <SingleLineTextInput disabled={lockdown} value={this.state.last_name} onChange={({ value }) => { this.onChange('last_name', value) }} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('EMAIL_ADDRESS', 'Email Address')}</Label>
                            <SingleLineTextInput disabled={true} value={this.state.email} onChange={({ value }) => { this.onChange('email', value) }} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('COMPANY', 'Company')}</Label>
                            <SingleLineTextInput disabled={true} value={this.state.company} onChange={({ value }) => { this.onChange('company', value) }} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('DATE_OF_BIRTH', 'Date of Birth')}</Label>
                            <DatePicker disabled={lockdown} value={this.state.birthdate} onChange={({ value }) => { this.onChange('birthdate', value) }} />
                            {/* <DatePicker value={this.state.birthdate} onChange={({ value }) => { this.onChange('birthdate', value) }} /> */}
                        </Group>
                        <Group>
                            <Label>{translations.getLL('LANGUAGE', 'Language')}</Label>
                            <Dropdown disabled={lockdown} options={this.state.languages} onChange={({ value }) => { this.onChange('language', value) }} />
                        </Group>
                        <Group>
                            <Button disabled={lockdown} onClick={() => { this.saveChanges() }} secondary={true}>{translations.getLL('SAVE_CHANGES', 'Save changes')}</Button>
                        </Group>
                    </ProfileForm>
                    <Title>{translations.getLL('PASSWORD', 'Password')}</Title>
                    <ProfileForm>
                        <Group>
                            <Label>{translations.getLL('CURRENT_PASSWORD', 'Current Password')}</Label>
                            <SingleLineTextInput disabled={lockdown} type='password' value={this.state.old_password} onChange={({ value }) => { this.onChange('old_password', value) }} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('NEW_PASSWORD', 'New Password')}</Label>
                            <SingleLineTextInput disabled={lockdown} type='password' value={this.state.new_password} onChange={({ value }) => { this.onChange('new_password', value) }} validation={'password'} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('REPEAT_NEW_PASSWORD', 'Repeat New Password')}</Label>
                            <SingleLineTextInput disabled={lockdown} type='password' value={this.state.new_password2} onChange={({ value }) => { this.onChange('new_password2', value) }} validation={'password'} />
                        </Group>
                        <Button secondary={true} disabled={lockdown} >{translations.getLL('SAVE_NEW_PASSWORD', 'Save new password')}</Button>
                    </ProfileForm>
                </RightSide>
            </Container>
        )
    }
}