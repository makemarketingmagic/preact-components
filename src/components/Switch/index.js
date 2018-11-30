import { h, Component } from 'preact';
import styled from 'styled-components';
import { colors } from '../common/scMixins';

const Container = styled.div`
    margin-top: -20px;
`

const Checkbox = styled.input`
	height: 0;
	width: 0;
    visibility: hidden;
`
const Label = styled.label`
	cursor: pointer;
	text-indent: -9999px;
	width: 48px;
	height: 32px;
	background: ${colors.grey};
	display: block;
	border-radius: 16px;
    position: relative;
    transition: 0.3s;
    &:after {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        width: 28px;
        height: 28px;
        background: #fff;
        border-radius: 14px;
        transition: 0.3s;
    }

${Checkbox}:checked + & {
	background: ${colors.red};
}

${Checkbox}:checked + &:after {
	left: calc(100% - 2px);
	transform: translateX(-100%);
}

&:active:after {
	width: 36px;
}
`

export default class Switch extends Component {
    render() {
        const { title = 'test', onChange, value } = this.props
        return (
            <Container>
                <Checkbox checked={value} onChange={onChange} type="checkbox" id={title}>
                </Checkbox>
                <Label htmlFor={title}>{title}</Label>
            </Container>
        )
    }
}
