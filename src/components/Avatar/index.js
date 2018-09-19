import { h, Component } from 'preact'
import styled from 'styled-components'
import { media, colors } from '../common/scMixins'

const AvatarContainer = styled.div`
    height: 128px;
    width: 128px;
    border: 16px transparent solid;
    overflow: hidden;
    border-radius: 50%;
    border-color: ${(props) => {
        return colors[props.color];
    }};
    ${media.mobile('margin-bottom: 8px;')}
`,
    Image = styled.img`
    height: 100%;
    width: 100%;
`
export default class Avatar extends Component {
    render() {
        const { imageUrl, name, color } = this.props
        return (
            <AvatarContainer color={color}>
                <Image src={imageUrl} alt={name} />
            </AvatarContainer>
        )
    }
}