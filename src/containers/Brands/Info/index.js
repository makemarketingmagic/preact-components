import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../../../components/common/scMixins';
import Button from './../../../components/Button/index';
import Label from '../../../components/Label';
import SingleLineTextInput from '../../../components/SingleLineTextInput';
import DragDropZone from './../../../components/DragDropZone/index';
import Helmet from "preact-helmet";

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
    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        content: '';
        height: 256px;
        width: 256px;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(136, 165, 173, 0.2);
        mix-blend-mode: normal;
    }
`, BrandImage = styled.img`
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
`, InfoForm = styled.form`

`, Group = styled.div`
    margin: 19px 0;
`
export default class Info extends Component {
    constructor(props) {
        super(props)
        this.state = {
            info: {},
            contacts: [],
            journalist: {},
            advertisingManager: {}
        }
    }

    componentDidMount() {
        let { brandInfo, journalist, advertisingManager } = this.props
        this.setState({ ...brandInfo, journalist, advertisingManager })
    }

    onDrop = (files) => {
        const { uploadFile } = this.props
        uploadFile && uploadFile(files)
    }

    render() {
        let { getLanguage, translations = { getTranslation: (label, fallback) => fallback } } = this.props
        const { info, contacts, journalist, advertisingManager } = this.state
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
                    <Helmet title={`${translations.getLL('INFO', 'Info')} | WOO`} />
                    <ImageContainer>
                        <div><BrandImage src={this.state.info.brand_logo_image} /></div>
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
                    <Title>{translations.getLL('CONTACTS', 'Contacts')}</Title>
                    {contacts.map((val) =>
                        (
                            <InfoForm>
                                <Group>
                                    <Label>{translations.getLL('NAME', 'Name')}</Label>
                                    <SingleLineTextInput disabled={true} value={val.first_name + ' ' + val.last_name} />
                                </Group>
                                <Group>
                                    <Label>{translations.getLL('PHONE', 'Phone')}</Label>
                                    <SingleLineTextInput disabled={true} value={val.mobile || ''} />
                                </Group>
                                <Group>
                                    <Label>{translations.getLL('EMAIL_ADDRESS', 'Email Address')}</Label>
                                    <SingleLineTextInput disabled={true} value={val.email} />
                                </Group>
                            </InfoForm>
                        )
                    )}
                    <Title>{translations.getLL('MARKETING_TEAM', 'Marketing Team')}</Title>
                    <InfoForm>
                        <Group>
                            <Label>{translations.getLL('MARKETING_MANAGER', 'Marketing Manager')}</Label>
                            <SingleLineTextInput disabled={true} value={info.marketingmanager || ''} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('JOURNALIST', 'Journalist')}</Label>
                            <SingleLineTextInput
                                disabled={true}
                                value={journalist.first_name ? journalist.first_name + ' ' + journalist.last_name : ''} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('ADVERTSING_MANAGER', 'Advertising Manager')}</Label>
                            <SingleLineTextInput
                                disabled={true}
                                value={advertisingManager.first_name ? advertisingManager.first_name + ' ' + advertisingManager.last_name : ''} />
                        </Group>
                    </InfoForm>
                    <Title>{translations.getLL('CONTACT_INFORMATION', 'Contact Information')}</Title>
                    <InfoForm>
                        <Group>
                            <Label>{translations.getLL('BRAND_NAME', 'Brand Name')}</Label>
                            <SingleLineTextInput disabled={true} value={info.brand_name} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('PHONE', 'Phone')}</Label>
                            <SingleLineTextInput disabled={true} value={info.phone} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('EMAIL_ADDRESS', 'Email Address')}</Label>
                            <SingleLineTextInput disabled={true} value={''} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('STREET', 'Street')}</Label>
                            <SingleLineTextInput disabled={true} value={info.billing_street} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('POSTAL_CODE', 'Postal Code')}</Label>
                            <SingleLineTextInput disabled={true} value={info.billing_code} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('CITY', 'City')}</Label>
                            <SingleLineTextInput disabled={true} value={info.billing_city} />
                        </Group>
                        <Group>
                            <Label>{translations.getLL('LANGUAGE', 'Language')}</Label>
                            <SingleLineTextInput disabled={true} value={getLanguage()} />
                        </Group>

                    </InfoForm>
                </RightSide>
            </Container>
        )
    }
}