import { h, Component } from 'preact';
import style from './Papers.less'
import classNames from 'classnames';
export default class Papers extends Component {
    constructor(props) {
        super(props)
        this.pageRefs = []
        this.state = {
            currentPage: 0,
            totalPages: 0
        }
    }

    componentDidMount() {
        const { pages = [] } = this.props,
            papers = pages.length >= 2 ? 2 : pages.length - 1
        this.setState({ papers, totalPages: this.props.pages.length })
    }

    nextPage = () => {
        const { pages } = this.props,
            nextPage = this.state.currentPage + 1 > pages.length ? 0 : this.state.currentPage + 1
        this.setState({ currentPage: nextPage })
    }

    render() {
        const { pages } = this.props
        return (
            <div style={{
                overflow: 'hidden',
                paddingBottom: 16
            }}>
                <div style={{
                    position: 'relative'
                }}>
                    {pages.map(({ component: Component, props }, key) => {
                        const classes = []
                        if (key === this.state.currentPage) {
                            classes.push(style.papers)
                        } else if (key > this.state.currentPage) {
                            classes.push(style.papersBack)
                        } else {
                            classes.push(style.papersDismissed)
                        }
                        if (this.state.currentPage + 1 === key) {
                            classes.push(style['paperLevel-1'])
                        } else if (this.state.currentPage + 2 === key) {
                            classes.push(style['paperLevel-2'])
                        }
                        return (
                            <div
                                ref={(ref) => this.pageRefs[key] = ref}
                                class={classNames(...classes)}
                                style={{ zIndex: this.state.totalPages - key }}
                            >
                                <div class={style.container}>
                                    <Component nextPage={this.nextPage} {...props} />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}