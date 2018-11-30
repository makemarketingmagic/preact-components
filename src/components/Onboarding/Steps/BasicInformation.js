import { h, Component } from 'preact'

export default class BasicInformation extends Component {
    render() {
        return (
            <div>Basic Information</div>
        )
    }
}

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            valid: false,
            complete: false
        }
    }
}