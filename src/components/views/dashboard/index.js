import React from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './styles.css';

@inject('text')
@observer
export class Dashboard extends React.Component {

    render() {
        const { text, children } = this.props;
        return (
            <div className="dashboard">
                <Navbar>
                    <Nav>
                        <LinkContainer to={{ pathname: '/dashboard/overview' }}>
                            <NavItem>
                                <Glyphicon glyph="th" />&nbsp;
                                {text.get('views.dashboard.overview')}
                            </NavItem>
                        </LinkContainer>
                        <LinkContainer to={{ pathname: '/dashboard/new' }}>
                            <NavItem>
                                <Glyphicon glyph="plus" />&nbsp;
                                {text.get('actions.addRepository')}
                            </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar>
                <div>{children}</div>
            </div>
        );
    }
}

