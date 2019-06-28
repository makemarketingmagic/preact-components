import { h, Component } from 'preact'
import styled from 'styled-components';
import { colors } from '../../components/common/scMixins';
import Button from '../../components/Button';
import Label from '../../components/Label';
import SingleLineTextInput from '../../components/SingleLineTextInput';
import Dropdown from '../../components/Dropdown';
import DatePicker from './../../components/DatePicker/index';
import DragDropZone from './../../components/DragDropZone/index';
import { Modal } from '../../components/Modal';
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css';

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
    margin-bottom: 16px;
`, Group = styled.div`
    margin: 19px 0;

    & > label {
        margin-bottom: 12px;
        display: block;
    }

`, CropContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 60vh;
    display: flex;
    justify-content: center;
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
            new_password2: '',
            imageSelected: false,
            crop: {},
            originalLanguage: ''
        }
    }

    componentDidMount() {
        this.initialise()
    }

    initialise = async () => {
        let user = await this.getUserDetails(),
            languages = await this.getLanguages(user.language)
        this.setState({ ...user, languages, originalLanguage: user.language })
    }

    getUserDetails = async () => {
        const { events: { getUserDetails } } = this.props
        let result
        if (getUserDetails) {
            result = await getUserDetails()

        }
        return result
    }

    getLanguages = async (language) => {
        const { events: { getLanguages } } = this.props
        let result
        if (getLanguages) {
            result = await getLanguages()
            result = result.map((val) => {
                val.selected = val.data === language
                val.value = val.data
                return val
            })
        }
        return result
    }

    savePassword = async () => {
        const { events: { savePassword } } = this.props,
            { new_password } = this.state
        let result
        if (savePassword) {
            result = await savePassword(new_password)
            await this.initialise()
        }
        return result
    }

    saveProfile = async () => {
        const { events: { saveProfile } } = this.props,
            { originalLanguage } = this.state
        let result,
            user = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                company: this.state.company,
                email: this.state.email,
                id: this.state.id,
                birthdate: this.state.birthdate,
                language: this.state.language
            }
        if (saveProfile) {
            result = await saveProfile(user)
            if (user.language !== originalLanguage) {
                window.location.reload()
            } else {
                this.initialise()
            }
        }
        return result
    }

    uploadPhoto = async (photo) => {
        const { events: { uploadPhoto } } = this.props
        let result
        if (uploadPhoto) {
            result = await uploadPhoto(photo)
            await this.initialise()
        }
        return result
    }

    onDrop = ([file]) => {
        this.setState({ imageSelected: file })
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

    getCroppedImg = (img, pixelCrop, fileName) => {
        return new Promise((resolve, reject) => {
            let image = new Image()
            image.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = pixelCrop.width;
                canvas.height = pixelCrop.height;
                const ctx = canvas.getContext('2d');

                ctx.drawImage(
                    image,
                    pixelCrop.x,
                    pixelCrop.y,
                    pixelCrop.width,
                    pixelCrop.height,
                    0,
                    0,
                    pixelCrop.width,
                    pixelCrop.height
                );

                // As Base64 string
                const base64Image = canvas.toDataURL('image/jpeg');
                resolve(base64Image)
                // As a blob
                // canvas.toBlob(blob => {
                //     blob.name = fileName;
                //     resolve(blob);
                // }, 'image/jpeg');
            }
            image.src = img
        });
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
                <Modal
                    onDialogClose={() => {
                        this.setState({ imageSelected: false, crop: null })
                    }}
                    open={this.state.imageSelected}
                    title={translations.getLL('CROP_PROFILE_PHOTO', 'Crop Profile Photo')}
                    buttons={[
                        {
                            text: translations.getLL('UPLOAD_IMAGE', 'Upload Image'),
                            onClick: async () => {
                                const { pixelCrop, imageSelected } = this.state
                                let cropped = await this.getCroppedImg(URL.createObjectURL(imageSelected), pixelCrop, 'profile.jpeg')
                                this.setState({ imageSelected: false, crop: null })
                                await this.uploadPhoto(cropped)
                            }
                        },
                        {
                            text: translations.getLL('CANCEL', 'Cancel'),
                            onClick: () => {
                                this.setState({ imageSelected: false, crop: null })
                            }
                        }
                    ]}
                >
                    {this.state.imageSelected &&
                        <CropContainer>
                            <ReactCrop
                                src={URL.createObjectURL(this.state.imageSelected)}
                                crop={{ ...this.state.crop, aspect: 1 }}
                                onChange={(crop, pixelCrop) => this.setState({ crop, pixelCrop })}
                                keepSelection={true}
                                style={{ height: '100%' }}
                            />
                        </CropContainer>}
                </Modal>
                <LeftSide>
                    <ImageContainer>
                        <ProfileImage src={this.state.image} />
                    </ImageContainer>
                    <DragDropZone
                        multiple={false}
                        onDrop={this.onDrop}
                        style={{}}
                        activeStyle={{}}
                        rejectStyle={{}}
                        accept={'image/*'}
                    >
                        <Button secondary={true}>{translations.getLL('UPLOAD_NEW_IMAGE', 'Upload new image')}</Button>
                    </DragDropZone>
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
                            <Button disabled={lockdown} onClick={() => { this.saveProfile() }} secondary={true}>{translations.getLL('SAVE_CHANGES', 'Save changes')}</Button>
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
                        <Button secondary={true} onClick={() => { this.savePassword() }} disabled={lockdown} >{translations.getLL('SAVE_NEW_PASSWORD', 'Save new password')}</Button>
                    </ProfileForm>
                </RightSide>
            </Container>
        )
    }
}