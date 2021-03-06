import React, { Component } from 'react';
import './postShow.css';
import styled, { css } from 'styled-components';

const Modal = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    margin: 0;
    padding: 0;

    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;

    opacity: ${props => props.active ? '1' : '0'};
    pointer-events: ${props => props.active ? 'auto' : 'none'};
`;

const ModalDialog = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 619px;
    width: 100%;
    background-color: rgba(255, 255, 255, 1);
    padding: 30px;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 100%;
`;

const Content = styled.div`
    max-width: 331px;
    width: 100%;

    & img {
        width: 100%;
    }
`;

const fontStyles = css`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
`

const Form = styled.form`
    & input[type=text] {
        width: 100%;
        margin: 10px 0;
        padding: 8px 11px;

        border: 1px solid #CCCCCC;
        border-radius: 3px;

        &:first-child {
            margin-top: 30px;
        }
        &::placeholder {
            ${fontStyles}
            color: #CCCCCC;
        }

        outline: none;
    }

    & button {
        width: 100%;
        margin-top: 10px;
        padding: 8px 0;
        background: #4997D0;
        border-radius: 3px;
        border: none;
        outline: none;

        ${fontStyles}
        color: #FFFFFF;

        &:hover {
            background: #387db0;
        }
    }
`;

const Comments = styled.div`
    max-width: 214px;
    width: 100%;

    & time {
        ${fontStyles}
        color: #999999;
    }

    & p {
        ${fontStyles}
        color: #000000;
        margin: 5px 0 15px;
    }
`;

const CloseButton = styled.div`
    max-width: 18px;
    max-height: 18px;
    width: 100%;
    height: 100%;

    position: absolute;
    right: 21px;
    top: 21px;
    z-index: 1;

    cursor: pointer;
    &:after {
        content: '';
        height: 25px;
        border-left: 1px solid #000;
        position: absolute;
        transform: rotate(45deg);
        left: 8px;
    }
    
    &:before {
        content: '';
        height: 25px;
        border-left: 1px solid #000;
        position: absolute;
        transform: rotate(-45deg);
        left: 8px;
    }
`;

const getCommentElement = (comment) => {
    const { text, id, date } = comment;
    const dateFormat = new Date(date).toLocaleDateString().split('/').join('.');
    return (
        <div key={id}>
            <time>{dateFormat}</time>
            <p>{text}</p>
        </div>
    )
}

class PostShow extends Component {
    render() {
        const { show, onHide, postData, addComment } = this.props;
        const { url, comments, id } = postData;
        const commentElements = comments.map((comment) => getCommentElement(comment));
        return (
            <Modal active={show}>
                <ModalDialog>
                    <Content>
                        <img src={url} alt="travel" />
                        <Form>
                            <input type="text" placeholder="???????? ??????" name="name" />
                            <input type="text" placeholder="?????? ??????????????????????" name="comment" />
                            <button
                                type="submit"
                                onClick={(e) => addComment(e, e.target.parentNode, id)}
                            >???????????????? ??????????????????????</button>
                        </Form>
                    </Content>
                    <Comments>
                        {commentElements}
                    </Comments>
                    <CloseButton onClick={onHide}></CloseButton>
                </ModalDialog>
            </Modal>
        )
    }

}

export default PostShow;