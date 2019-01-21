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
                        (<ExpandableContainer selected={selected === val.id}><ExpandingSection data={val} events={{
                            getData: () => {
                                return { "visits": [{ "id": "29b853b797a8a6f733cf8d76324f4da3f9d37c08", "totalVisits": "0", "visitDate": "1547895600", "pagetitle": null, "sourceGa": "google", "hostnameGa": "www.makemarketingmagic.com", "mediumGa": "organic", "sessionsGa": "1", "timeOnPageGa": "0.0", "label": "-1", "cocl": "341538610000", "pageTitleGa": "Meer volgers op je LinkedIn bedrijfspagina? Zo doe je dat! - Make Marketing Magic", "status": "-1", "pathGa": "\/blog\/meer-volgers-op-je-linkedin-bedrijfspagina-zo-doe-je-dat" }, { "id": "710c69abf9848887e91c373b29f34cf169847c57", "totalVisits": "0", "visitDate": "1547820000", "pagetitle": null, "sourceGa": "(direct)", "hostnameGa": "www.makemarketingmagic.com", "mediumGa": "(none)", "sessionsGa": "1", "timeOnPageGa": "40.0", "label": "-1", "cocl": "341538610000", "pageTitleGa": "Make Marketing Magic: Meetbare marketing, meer verkoop", "status": "-1", "pathGa": "\/" }, { "id": "ca3ef78b27314839a8b95ca455a5253da96890e1", "totalVisits": "0", "visitDate": "1547820000", "pagetitle": null, "sourceGa": "(direct)", "hostnameGa": "www.makemarketingmagic.com", "mediumGa": "(none)", "sessionsGa": "0", "timeOnPageGa": "0.0", "label": "-1", "cocl": "341538610000", "pageTitleGa": "Aanbod van onze marketing managers & specialisten", "status": "-1", "pathGa": "\/ons-aanbod" }, { "id": "cb4d693ba97b3f8ab6085cb08b0904093935e21b", "totalVisits": "0", "visitDate": "1541512800", "pagetitle": null, "sourceGa": "google", "hostnameGa": "www.makemarketingmagic.com", "mediumGa": "organic", "sessionsGa": "1", "timeOnPageGa": "20.0", "label": "-1", "cocl": "341538610000", "pageTitleGa": "Make Marketing Magic: Meetbare marketing, meer verkoop", "status": "-1", "pathGa": "\/" }, { "id": "547c1f61a3837415d212c027d8124a03c12e2b80", "totalVisits": "0", "visitDate": "1541512800", "pagetitle": null, "sourceGa": "google", "hostnameGa": "www.makemarketingmagic.com", "mediumGa": "organic", "sessionsGa": "0", "timeOnPageGa": "0.0", "label": "-1", "cocl": "341538610000", "pageTitleGa": "Professionele & effectieve marketing | over Make Marketing Magic", "status": "-1", "pathGa": "\/ons-verhaal" }], "contacts": ["simsek.zulfikar@kpmg.nl"], "result": "success" }
                            }
                        }} /></ExpandableContainer>) :
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