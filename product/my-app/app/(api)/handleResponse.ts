import { statusAPIsuccess } from "./constant";

const handleResponse = (response : Response) => {
 
    return  response
    .text().then((responseText : string) =>{
console.log("call")
        if([401 ,403].includes(response.status) ){
            return new UserNotAvaliable("" , 403)
        }
        if(statusAPIsuccess.includes(response.status)){
            return JSON.parse(responseText) ??  new Unknow("Error from server" , 1)
        }
        if(JSON.parse(responseText)){
            const res = JSON.parse(responseText)
            return  new ErrorApi(res.message , res.code)
        }
    
          return new Unknow("Error from server" , 1)
    })
 
    
};



class UserNotAvaliable extends Error {
    code : number
    constructor(message: string , code : number){ 
        super(message)
        this.message ="User not avaliable"
        this.code =code
        

    }
}
class Unknow extends Error {
    code : number
    constructor(message: string , code : number){ 
        super(message)
        this.message ="Unkown error "
        this.code =code
        

    }
}

class ErrorApi extends Error {
    code : number
    constructor(message: string , code : number){ 
        super(message)
        this.message =message
        this.code =code
        

    }
}


export default handleResponse