import Axios from 'axios';

const axiosBaseURL = Axios.create({
    baseURL:'http://localhost:5250/api/'
});

export default axiosBaseURL;