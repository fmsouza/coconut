import React from 'react';
import { observer, inject } from 'mobx-react';
import { Nav, NavItem } from 'react-bootstrap';
import { changeLanguage } from 'common/actions';
import { ProfileMenu } from './profileMenu';

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
                    {text.get('actions.toggleLanguage')}
                </NavItem>
                <ProfileMenu />
            </Nav>
        );
    }
}
