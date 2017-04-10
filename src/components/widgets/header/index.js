import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { Nav, Navbar } from 'react-bootstrap';
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
                        <ProfileMenu />
                    </Nav>
                </Navbar>
            </nav>
        );
    }
}
