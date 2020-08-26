import axios from "axios"


//axios.defaults.baseURL = "http://localhost:8000"
axios.defaults.baseURL = "https://mabookdiary.herokuapp.com/"

export default class Services {
    static get(path) {
        return axios.get(path)
    }

    static post(path, data) {
        return axios({
            url: path,
            method: "POST",
            data
        })
    }
}
