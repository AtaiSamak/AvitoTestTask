import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Col } from "react-bootstrap";
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

const StyledContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const getImageElement = (image, props) => {
    const { getPostData } = props;
    return (
        <Col key={image.id} className="my-col-styles bg-dark" onClick={() => getPostData(image.id)}>
            <img src={image.url} alt="hello" />
        </Col>
    )
}

class Content extends Component {
    render() {
        const { images } = this.props;
        const imgElements = images.map((image) => getImageElement(image, this.props))

        return (
            <StyledContend>
                <StyledContentWrapper>
                    {imgElements}
                </StyledContentWrapper>
            </StyledContend>
        )
    }
}

export default Content;