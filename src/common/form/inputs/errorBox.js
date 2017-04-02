import React from 'react';
import { HelpBlock, FormGroup } from 'react-bootstrap';

export default props => (
    <FormGroup className="center" validationState={"error"}>
        <HelpBlock>{props.children}</HelpBlock>
    </FormGroup>
);
