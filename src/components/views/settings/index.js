import React from 'react';
import { observer, inject } from 'mobx-react';
import { Nav, NavItem } from 'react-bootstrap';

@inject('text')
@observer
export class Settings extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <div className="settings">
                <h1>{text.get('views.settings.title')}</h1>
                <hr />
                <Nav bsStyle="pills" stacked activeKey={1} onSelect={null}>
                    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                    <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                    <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
                </Nav>
            </div>
        );
    }
}
