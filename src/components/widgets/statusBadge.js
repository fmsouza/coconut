import React from 'react';
import { Label } from 'react-bootstrap';

export const StatusBadge = ({ status }) => {
    switch (status) {
        case 'pending': return (<Label>{status}</Label>);
        case 'failed': return (<Label bsStyle="danger">{status}</Label>);
        default: return (<Label bsStyle={status}>{status}</Label>);
    }
};
