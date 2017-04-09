import React from 'react';
import { observer, inject } from 'mobx-react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { changeLanguage } from 'common/actions';

@inject('text')
@observer
export class NavMenu extends React.Component {

    state = { lang: 'en-US' };

    toggleLanguage() {
        let { lang } = this.state;
        lang = (lang !== 'en-US') ? 'en-US' : 'pt-BR';
        this.setState({ lang });
        changeLanguage(lang);
    }

    render() {
        const { pullRight, text } = this.props;
        return (
            <Nav pullRight={pullRight}>
                <NavItem onClick={() => this.toggleLanguage()}>
                    {text.get('header.navmenu.link.toggleLanguage')}
                </NavItem>
                <LinkContainer to={{ pathname: '/login' }}>
                    <NavItem>{text.get('header.navmenu.link.login')}</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}
