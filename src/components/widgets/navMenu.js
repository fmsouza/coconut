import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { incrementCounter, resetCounter } from 'common/actions';
import Text from 'common/strings';

export class NavMenu extends React.Component {

    render() {
        const { pullRight } = this.props;
        const { increment, reset, login } = Text.header.navmenu.link;
        return (
            <Nav pullRight={pullRight}>
                <NavItem onClick={incrementCounter}>{increment}</NavItem>
                <NavItem onClick={resetCounter}>{reset}</NavItem>
                <LinkContainer to={{ pathname: '/login' }}>
                    <NavItem>{login}</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}
