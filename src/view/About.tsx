/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Divider, Card, Col, Row, } from 'antd';

function About(): any {
  return (
    <div>
      <div></div>
      <Row>
        <Col span={22} offset={1}>
          <Card>
            <Divider orientation="left">关于</Divider>
            <p>
            </p>
            <p>
            </p>
            <Divider orientation="right" orientationMargin={50}>
              T S Q
            </Divider>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default About;
