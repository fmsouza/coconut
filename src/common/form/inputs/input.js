import React from 'react';
import { FormGroup, InputGroup } from 'react-bootstrap';

export default props => (
    <FormGroup controlId={props.name}>
        <InputGroup>
            <InputGroup.Addon>{props.label}</InputGroup.Addon>
            <input
                className="form-control"
                {...props}
            />
        </InputGroup>
    </FormGroup>
);
