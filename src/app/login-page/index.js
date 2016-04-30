import React from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default function loginPage() {
  // <ControlLabel>User Id</ControlLabel>

  return (
    <div>
      <FormGroup controlId="username">
        <FormControl type="text" placeholder="User ID" />
      </FormGroup>
      <FormGroup controlId="password">
        <FormControl type="password" placeholder="Password" />
      </FormGroup>
      <Button bsStyle="primary" bsSize="large" block>Login</Button>
    </div>
  );
}
