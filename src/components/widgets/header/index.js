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
            <nav>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">{text.get('widgets.header.brand.title')}</Link>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <NavMenu pullRight />
                </Navbar>
            </nav>
        );
    }
}
