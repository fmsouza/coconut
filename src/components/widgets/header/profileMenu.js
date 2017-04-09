import React from 'react';
import { observer, inject } from 'mobx-react';
import { NavDropdown, MenuItem, NavItem, Glyphicon } from 'react-bootstrap';
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
                <MenuItem eventKey={1.1}>
                    <Glyphicon glyph="cog" />&nbsp;
                    {text.get('widgets.profileMenu.settings')}
                </MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.2} onClick={Action.logoff}>
                    <Glyphicon glyph="log-out" />&nbsp;
                    {text.get('actions.logoff')}
                </MenuItem>
            </NavDropdown>
        );
    }

    render() {
        return this.props.user.data ? this.renderProfileMenu() : this.renderLoginButton();
    }
}