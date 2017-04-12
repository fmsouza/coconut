import React from 'react';
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router';
import * as Action from 'common/actions';
import Repository from './repository';
import './styles.css';

@inject('repositories')
@observer
export class Overview extends React.Component {

    componentWillMount() {
        Action.loadRepositories();
    }

    renderRepositories() {
        if (!this.props.repositories.all) return null;
        return this.props.repositories.all.map((repository, i) => (
            <Link key={i} to={{ pathname: `/dashboard/repository/${repository.id}` }}>
                <Repository {...repository} />
            </Link>
        ));
    }

    render() {
        return (
            <div className="overview">
                {this.renderRepositories()}
            </div>
        );
    }
}
