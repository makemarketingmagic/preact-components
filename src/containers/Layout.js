import { h, Component } from 'preact'
import styled from 'styled-components'
import Navigation from './../components/Navigation/index';

const Container = styled.div`
    max-width: 1200px;
    width: 90%;
    margin: 64px auto;
    background-color: white;
`, data = {
        tabs: [
            {
                text: 'Sales Opportunities',
                url: '/sales-opportunities'
            },
            {
                text: 'AHA Planning',
                url: '/aha-planning'
            },
            {
                text: 'Reports',
                url: '/reports'
            },
            {
                text: 'Notes',
                url: '/notes'
            },
            {
                text: 'Files',
                url: '/files'
            },
            {
                text: 'Onboarding',
                url: '/onboarding'
            },
            {
                text: 'Info',
                url: '/'
            }
        ]
    }

export default class Layout extends Component {
    render() {
        const { Component, componentProps } = this.props
        return (
            <div>
                <Navigation tabs={data.tabs} />
                <Container>
                    <Component {...componentProps} />
                </Container>
            </div>
        )
    }
}