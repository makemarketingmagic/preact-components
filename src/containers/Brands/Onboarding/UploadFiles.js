import { h, Component } from 'preact'
import styled from 'styled-components'
import Label from '../../../components/Label';
import DragDropZone from './../../../components/DragDropZone/index';
import Helmet from "preact-helmet";

export default class UploadFiles extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false,
            fileName: '',
            size: 0,
            files: [],
            emailDatabase: null,
            socialSharing: null
        }
    }

    renderFileDetails(size) {
        const suffixes = ['B', 'KB', 'MB', 'GB']
        let factor = 1,
            tempSize = size
        while (tempSize > 1000) {
            tempSize = tempSize / 1000
            factor += 1
        }

        tempSize = Math.round(tempSize * 10) / 10

        return `${tempSize} ${suffixes[factor - 1]}`
    }

    renderInfoOrFileDetails(file) {
        return file ? file.filename ?
            `${file.filename} already uploaded` :
            `${file.name} selected, ${this.renderFileDetails(file.size)}` :
            'Click here to select a file or drag and drop it in the area'
    }

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
                socialSharing,
                emailDatabase
            },
            updateField,
            translations
        } = this.props
        return (
            <StepContents>
                <Helmet title={`${translations.getLL('ONBOARDING', 'Onboarding')} | ${translations.getLL('UPLOAD_FILES', 'Upload Files')} | WOO`} />
                <IFrameContainer>
                    <iframe class="embed-responsive-item" src={translations.getLL('ONBOARDING_VIDEO_SRC_FILES', 'https://www.youtube.com/embed/XhEp4EH10lI?rel=0')}
                        frameborder="0" allowfullscreen></iframe>
                </IFrameContainer>

                <Explaination></Explaination>

                <StepForm>
                    <SectionTitle>{translations.getLL('SELECT_EMAIL_DATABASE_FILE', '1. Select the email database file')}</SectionTitle>
                    <Group>
                        <Label>{translations.getLL('SELECT_YOUR_LIST_WITH_CONTACTS_FOR_MAILING_COL', 'Select your list with contacts we can mail. These persons must have approved to get mailed:')}</Label>
                        <DragDropZone onDrop={([file]) => updateField('files', 'emailDatabase', file)} multiple={false}>
                            <span style={{ flex: 1, textAlign: 'center' }}>{this.renderInfoOrFileDetails(emailDatabase)}</span>
                        </DragDropZone>
                    </Group>
                    <SectionTitle>{translations.getLL('KEY_PLAYER_LIST', '2. Key player list')}</SectionTitle>
                    <Group>
                        <Label>{translations.getLL('SELECT_YOUR_LIST_WITH_CONTACTS_FOR_SHARING', 'Select your list with contacts we can ask to share your AHAs in their social media network')}</Label>
                        <DragDropZone onDrop={([file]) => updateField('files', 'socialSharing', file)} multiple={false}>
                            <span style={{ flex: 1, textAlign: 'center' }}>{this.renderInfoOrFileDetails(socialSharing)}</span>
                        </DragDropZone>
                    </Group>
                </StepForm>
            </StepContents>
        )
    }
}