import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Content from "../content";
import Footer from "../footer"
import PostShow from "../postShow";
import { getImages, getImageWithCommentList } from "../../service/getData";
import postComment from '../../service/postData';
import Spinner from '../spinner';
import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPostOpen: false,
            images: [],
            postData: {
                id: 0,
                url: '',
                comments: []
            }
        }
    }

    componentDidMount = () => {
        getImages()
            .then(data => this.updateImages(data));
    }

    togglePostVisible = () => {
        this.setState({ isPostOpen: !this.state.isPostOpen });
        if (!this.state.isPostOpen) {
            this.setState({ postData: null })
        }
    }

    updateImages = (newData) => {
        this.setState({ images: newData })
    }

    updatePostData = ({ id, url, comments }) => {
        const newData = {
            id: id,
            url: url,
            comments: comments
        }
        this.setState({ postData: newData });
    }

    addComment = (e, form, imageID) => {
        e.preventDefault();
        const formData = [...(new FormData(form))];
        const newComment = {
            name: formData[0][1],
            text: formData[1][1],
            date: new Date().getTime(),
        };
        if (newComment.text.length === 0) {
            return;
        }
        this.setState((state) => {
            const newPostData = { ...state.postData };
            newPostData.comments = [...newPostData.comments, newComment];
            return {
                postData: newPostData
            }
        });
        postComment(imageID, newComment);
        form.reset();
    }

    getPostData = (id) => {
        getImageWithCommentList(id)
            .then(data => this.updatePostData(data));
        this.togglePostVisible();
    }

    render() {
        const { images, isPostOpen, postData } = this.state;
        return (
            <>
                <Container className="position-fixed top-50 start-50 translate-middle">
                    <Row>
                        <Col><h1 className="text-center text-uppercase header-text">Test App</h1></Col>
                    </Row>
                    <Content
                        images={images}
                        getPostData={this.getPostData}
                    ></Content>
                    <Footer></Footer>
                </Container>
                {postData
                    ? <PostShow
                        show={isPostOpen}
                        onHide={() => this.togglePostVisible()}
                        postData={postData}
                        addComment={this.addComment} />
                    : <Spinner></Spinner>
                }

            </>
        )
    }
}