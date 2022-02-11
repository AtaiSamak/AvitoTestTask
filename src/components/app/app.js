import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "../content";
import Footer from "../footer"
import PostShow from "../postShow";
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postShow: true
        }
    }

    setPostShow() {
        this.setState({postShow: !this.state.postShow});
    }

    render() {
        console.log(this.state.postShow);
        return (
            <>
                <Container className="position-fixed top-50 start-50 translate-middle">
                    <Row>
                        <Col><h1 className="text-center text-uppercase header-text">Test App</h1></Col>
                    </Row>
                    <Content onPostShow={() => this.setPostShow()}></Content>
                    <Footer></Footer>
                </Container>
                <PostShow
                        show={this.state.postShow}
                        onHide={() => this.setPostShow()}/>
            </>
        )
    }
}