import React from 'react';
import { observer, inject } from 'mobx-react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './styles.css';

@inject('text')
@observer
export class Settings extends React.Component {

    render() {
        const { text, children } = this.props;
        return (
            <div className="settings">
                <h1>{text.get('views.settings.title')}</h1>
                <hr />
                <div className="content">
                    <Nav bsStyle="pills" stacked>
                        <LinkContainer to="/settings/general">
                            <NavItem eventKey="general">{text.get('views.settings.nav.general')}</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/settings/language">
                            <NavItem eventKey="language">{text.get('views.settings.nav.language')}</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/settings/about">
                            <NavItem eventKey="about">{text.get('views.settings.nav.about')}</NavItem>
                        </LinkContainer>
                    </Nav>
                    <div>{children}</div>
                </div>
            </div>
        );
    }
}
