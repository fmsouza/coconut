import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ProfileMenu } from './profileMenu';

@inject('text')
@observer
export class Header extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <nav>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">{text.get('widgets.header.brand.title')}</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <LinkContainer to={{ pathname: '/dashboard' }}>
                            <NavItem>{text.get('views.dashboard.title')}</NavItem>
                        </LinkContainer>
                        <ProfileMenu />
                    </Nav>
                </Navbar>
            </nav>
        );
    }
}
