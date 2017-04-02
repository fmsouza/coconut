import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import { Navbar } from 'react-bootstrap';
import { NavMenu } from './navMenu';

@inject('text')
@observer
export class Header extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">{text.get('header.brand.title')}</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <nav>
                    <NavMenu pullRight />
                </nav>
            </Navbar>
        );
    }
}
