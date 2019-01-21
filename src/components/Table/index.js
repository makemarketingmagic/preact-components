import { h, Component } from 'preact'
import styled from 'styled-components'
import { colors } from '../common/scMixins';
import SortAscIcon from './../icons/SortAscIcon';
import SortDescIcon from './../icons/SortDescIcon';

const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.headers.map((val) => 'auto').join(' ')};
    width: 100%;
`, HeaderRow = styled.div`
    
    
`, HeaderCell = styled.div`
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    font-size: 14px;
    border-bottom:  ${props => props.ordered ? `2px solid ${colors.red}` : '1px solid rgba(32, 32, 32, 0.1)'};
    padding-bottom: 7px;
    color: #323232;
    display: flex;
    align-items: center;
`, StyledCell = styled.div`
    height: 48px;
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);
    font-style: normal;
    font-weight: normal;
    line-height: 18px;
    font-size: 14px;
    display: flex;
    align-items: center;

    color: #888888;

    background-color: ${props => props.selected ? '#F2F8FA' : '#fff'};
`, SortIcon = styled.img`
    margin-left: 4px;
    transition: all 250ms ease-in-out;
    display: inline-block;
    width: 8px;
    height: 8px;
    transform: ${props => props.direction ? 'rotate(180deg)' : 'rotate(0deg)'};
`, ExpandableContainer = styled.div`
    grid-column: 1 / 7;
    background-color: ${props => props.selected ? '#F2F8FA' : '#fff'};
`

export default class Table extends Component {
    render() {
        const {
            events: {
                setOrderBy
            },
            orderBy, direction, data, headers, renderers, hasExpandingSection = false, ExpandingSection = null, selected = false, onSelect = null
        } = this.props,
            headersArray = Object.entries(headers)
        return (
            <Grid headers={headersArray}>
                {headersArray.map(([value, key]) => {
                    return (
                        <Heading
                            onClick={() => setOrderBy(key, orderBy !== key ? true : !direction)}
                            text={value}
                            field={key}
                            ordered={orderBy === key}
                            direction={direction}
                        />
                    )
                })}
                {data.map((val) => {
                    return [headersArray.map(([value, key]) => {
                        return (
                            <StyledCell
                                selected={selected === val.id}
                                onClick={() => {
                                    onSelect && onSelect(val.id)
                                }}
                            >{renderers[key] ? renderers[key](val[key]) : val[key]}</StyledCell>
                        )
                    }),
                    (hasExpandingSection && ExpandingSection && selected === val.id) ?
                        (<ExpandableContainer selected={selected === val.id}><ExpandingSection data={val} {...this.props.expandingSectionProps} /></ExpandableContainer>) :
                        null]
                })}
            </Grid>
        )
    }
}

const SORT_DIRECTION = {
    ASC: true,
    DESC: false
}

export {
    SORT_DIRECTION
}

class Heading extends Component {
    render() {
        const { text, onClick, ordered = false, direction = false } = this.props
        return (
            <HeaderCell ordered={ordered} onClick={onClick}>
                {text}
                {ordered ? <SortIcon direction={direction} src={require('../icons/SortIcon.svg')} ></SortIcon> : null}
            </HeaderCell>
        )
    }
}