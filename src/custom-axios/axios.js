import axios from "axios";

const instance=axios.create({
    baseURL: 'https://spring-boot-anamateska.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;
