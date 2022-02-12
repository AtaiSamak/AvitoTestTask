import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import './content.css';

const StyledContend = styled.div`
    height: 100%;
    overflow: auto;
    margin-top: 30px;
    padding-bottom: 150px;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default class Content extends Component {
    render() {
        return (
            <StyledContend>
                <Row className="my-row-styles">
                    <Col className="my-col-styles bg-dark" onClick={this.props.onPostShow}>
                        <img src="https://kharkiv-travel.com/wp-content/uploads/2021/12/Travel000000.jpg" alt="hello"/>
                    </Col>
                    <Col className="my-col-styles bg-dark" onClick={this.props.onPostShow}>
                        <img src="https://kharkiv-travel.com/wp-content/uploads/2021/12/Travel000000.jpg" alt="hello"/>
                    </Col>
                    <Col className="my-col-styles bg-dark" onClick={this.props.onPostShow}>
                        <img src="https://kharkiv-travel.com/wp-content/uploads/2021/12/Travel000000.jpg" alt="hello"/>
                    </Col>
                </Row>
                <Row className="my-row-styles">
                    <Col className="my-col-styles bg-dark" onClick={this.props.onPostShow}>
                        <img src="https://kharkiv-travel.com/wp-content/uploads/2021/12/Travel000000.jpg" alt="hello"/>
                    </Col>
                    <Col className="my-col-styles bg-dark" onClick={this.props.onPostShow}>
                        <img src="https://kharkiv-travel.com/wp-content/uploads/2021/12/Travel000000.jpg" alt="hello"/>
                    </Col>
                    <Col className="my-col-styles bg-dark" onClick={this.props.onPostShow}>
                        <img src="https://kharkiv-travel.com/wp-content/uploads/2021/12/Travel000000.jpg" alt="hello"/>
                    </Col>
                </Row>
            </StyledContend>
        ) 
    }
}