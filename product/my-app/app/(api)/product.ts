import { URL_API_LOGIN, URL_FETCH_DATA, URL_GET_USER, URL_LOGIN } from "./constant";
import request from "./handleRequest";
import handleResponse from "./handleResponse";




function getListProduct(){

    return fetch(URL_FETCH_DATA + "products/" , request.get("get-list-product"))
          .then(handleResponse).then(data=> data)
}


function createProduct(data : IProduct){

    return fetch(URL_FETCH_DATA + "products/" , request.post(data))
          .then(handleResponse).then(data=> data)
}
const products = {
    getListProduct  ,
    createProduct
}
export default products 