import React from 'react';
import { Media } from 'react-bootstrap';
import { StatusBadge } from 'components/widgets';
import './styles.css';

export default ({ namespace, name, status, lastBuildTime}) => (
    <Media className="repository">
        <Media.Body>
            <Media.Heading>
                {`${namespace}/${name} `}
                <StatusBadge status={status} />
            </Media.Heading>
            <p>
                <b>Latest build:</b> {lastBuildTime}
            </p>
        </Media.Body>
    </Media>
);
