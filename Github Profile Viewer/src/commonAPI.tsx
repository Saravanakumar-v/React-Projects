import axios from "axios";

const BASE_URL = "https://api.github.com/";

export function getGithubUsernameData(param: string,request = "users") {
    console.log("request",param);

    return axios.get(BASE_URL+request+"/"+param)
    .then ((response) => {

        return response.data;
    })
    .catch ((error) => {console.log(error)})
}

export function getRepoList(username: string,request = "repos") {

    return axios.get(BASE_URL+"users/"+username+"/"+request)
    .then ((response) => {
        
        return response.data;
    })
    .catch ((error) => {console.log(error)})
}