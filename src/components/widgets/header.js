import React from 'react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import { NavMenu } from './navMenu';
import Text from 'common/strings';

export class Header extends React.Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">{Text.header.brand.title}</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <nav>
                    <NavMenu pullRight />
                </nav>
            </Navbar>
        );
    }
}
