import axios from 'axios';

const getImages = () => {
    return axios.get('https://boiling-refuge-66454.herokuapp.com/images')
        .then(result => result.data)
        .catch(error => alert(`Error: ${error}`))
}

const getImageWithCommentList = (id) => {
    return axios.get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
        .then(result => result.data)
        .catch(error => alert(`Error: ${error}`))
}

export { getImages, getImageWithCommentList };

