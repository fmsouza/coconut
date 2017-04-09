import React from 'react';
import { observer, inject } from 'mobx-react';
import { NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import * as Action from 'common/actions';

@inject('text', 'user')
@observer
export class ProfileMenu extends React.Component {

    renderLoginButton() {
        const { text } = this.props;
        return (
            <LinkContainer to={{ pathname: '/login' }}>
                <NavItem>{text.get('actions.login')}</NavItem>
            </LinkContainer>
        );
    }

    renderProfileMenu() {
        const { text, user } = this.props;
        return (
            <NavDropdown eventKey={1} title={user.data.name} id="profilemenu-dropdown">
                <MenuItem divider />
                <MenuItem eventKey={1.1} onClick={Action.logoff}>{text.get('actions.logoff')}</MenuItem>
            </NavDropdown>
        );
    }

    render() {
        return this.props.user.data ? this.renderProfileMenu() : this.renderLoginButton();
    }
}