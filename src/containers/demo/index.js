import { h, Component } from 'preact'
import Annotator from '../../components/Annotator';

export default class Demo extends Component {
    onDrop(acceptedFiles, rejectedFiles) {
        console.log('Accepted files: ', acceptedFiles);
        console.log('Rejected files: ', rejectedFiles);
    }

    render() {
        return (
            <div id="demo" style={{ width: '75%', margin: 'auto' }}>
                <Annotator readOnly={false} />
            </div>
        )
    }
}