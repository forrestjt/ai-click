import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default function baseLayout({children}) {
  return (
    <Grid className="main-panel">
      <Row>
        <Col xs={12}>
          <h1>Click it</h1>
          <h2>Ambition Ignition</h2>
          <hr/>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          {children}
        </Col>
      </Row>
    </Grid>
  );
}
