import axios from "axios";

const postComment = (imageID, { name, text, date }) => {
    axios.post(`https://boiling-refuge-66454.herokuapp.com/images/${imageID}/comments`, {
        name: name,
        comment: text,
        date: date,
    })
        .then(result => {
            console.log(result);
        }).catch(error => {
            console.log(error);
        })
};

export default postComment;