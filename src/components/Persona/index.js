import { h, Component } from 'preact';
import Avatar from '../Avatar';
import Tooltip from '../Tooltip';
import styled from 'styled-components';
import { media } from '../common/scMixins';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 64px;
    ${media.mobile`
        padding: 0 32px;
        flex-direction: column;
        align-items: center;
    `}
`
export default class Persona extends Component {
    render() {
        const { name, position, message, color, imageUrl } = this.props
        return (
            <Container>
                <Avatar
                    imageUrl={imageUrl}
                    name={name}
                    color={color}
                />
                <Tooltip
                    name={name}
                    position={position}
                    message={message}
                    color={color}
                />
            </Container>
        )
    }
}
