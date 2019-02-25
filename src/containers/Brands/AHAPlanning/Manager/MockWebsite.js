import { h } from 'preact'
import styled from 'styled-components'

const Container = styled.div`
    max-height: 90vh;
    overflow-y: scroll;
`, Nav = styled.nav`
    background-color: #f8f8f8;
    border-color: #e7e7e7;
    display: flex;
    flex-direction: row;
`, Header = styled.div`
    width: 100px;
    margin: 0 16px;
`, NavItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-right: 16px;
`, NavItem = styled.div`
    padding: 15px;
`, ImageContainer = styled.div`
    display: flex;
    padding: 10px;
`, HeaderImg = styled.img`
    width: 100%;
`, Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`, Title = styled.div`
    text-align: center;
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 10px;
`

export default function MockWebsite(props) {
    const { translations, brandLogo, ahaForm } = props
    return (
        <Container>
            <Nav>
                <Header>
                    <HeaderImg src={brandLogo} />
                </Header>
                <NavItems>
                    <NavItem><a href="">{translations.getLL('HOME', 'Home')}</a></NavItem>
                    <NavItem><a href="">{translations.getLL('SERVICES', 'Services')}</a></NavItem>
                    <NavItem><a href="">{translations.getLL('ABOUT', 'About')}</a></NavItem>
                    <NavItem><a href="">{translations.getLL('BLOG', 'Blog')}</a></NavItem>
                    <NavItem><a href="">{translations.getLL('CONTACT', 'Contact')}</a></NavItem>
                </NavItems>
            </Nav>
            <Content>
                <Title>{ahaForm.aha_form_entrys_paginatitel}</Title>
                <ImageContainer>
                    <HeaderImg src={ahaForm.aha_form_entrys_lpbeeld} />
                </ImageContainer>
                <p>
                    <div dangerouslySetInnerHTML={{ __html: ahaForm.aha_form_entrys_lpbodytekst }}></div>
                </p>
            </Content>
        </Container>
    )
}