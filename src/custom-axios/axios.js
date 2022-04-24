import axios from "axios";

const instance=axios.create({
    baseURL: 'https://git.heroku.com/spring-boot-anamateska.git',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;
