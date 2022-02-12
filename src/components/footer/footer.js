import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <Row className="position-fixed bottom-0 w-100 mx-auto bg-white pt-2">
                <Col md={12}>
                    <div className="decoration-line"></div>
                </Col>
                <Col md={12}>
                    <p className="text-center my-text-style">© 2018-2019</p>
                </Col>
            </Row>
        )
    }
}