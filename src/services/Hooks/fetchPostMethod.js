import axios from 'axios';

const fetchPostMethod = (url, body) => {
    console.log('fetchPostMethod', url, body);
    axios
        .post(`http://localhost:3001/api/v1/${url}`, body)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
};

export default fetchPostMethod;
