import { URL_API_LOGIN, URL_FETCH_DATA, URL_GET_USER, URL_LOGIN } from "./constant";
import request from "./handleRequest";
import handleResponse from "./handleResponse";



function login(data : {username  :FormDataEntryValue , password : FormDataEntryValue }){

       return fetch(URL_FETCH_DATA + URL_GET_USER +`?username=${data?.username}&&password=${data.password}` , request.get("login")).then(handleResponse).then(data=> data)
}
function getUser(data : Object){

    return fetch(URL_API_LOGIN + URL_LOGIN , request.post(data)).then(handleResponse).then(data=> data.text())
}

function createUser(data : Object){

    return fetch(URL_FETCH_DATA + URL_GET_USER , request.post(data))
          .then(handleResponse).then(data=> data)
}
function sign(data : Object){

    return fetch(URL_FETCH_DATA + URL_GET_USER , request.get("sign")).then(handleResponse).then(data=> data.text())
}
const users = {
    login, createUser
}
export default users 