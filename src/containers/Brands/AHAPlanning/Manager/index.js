import { h, Component } from 'preact'
import styled from 'styled-components'
import Annotator from '../../../../components/Annotator';

export default class AHAManager extends Component {
    constructor(props) {
        super(props)
        this.state = {
            highlights: []
        }
    }

    addHighlight = (highlight) => {
        let highlights = this.state.highlights
        let i = highlights.push(highlight)
        this.setState({ highlights })
        return i
    }

    updateHighlight = (comment, i) => {
        let highlights = [...this.state.highlights]
        highlights[i].comment = comment
        this.setState({ highlights })
    }

    deleteHighlight = (i) => {
        let highlights = [...this.state.highlights]
        highlights.splice(i, 1)
        this.setState({ highlights })
    }

    render() {
        const { highlights } = this.state
        return (
            <div>
                <Annotator highlights={highlights} addHighlight={this.addHighlight} />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <Annotator readOnly={false} highlights={highlights} addHighlight={this.addHighlight} deleteHighlight={this.deleteHighlight} updateHighlight={this.updateHighlight} />
            </div>
        )
    }
}