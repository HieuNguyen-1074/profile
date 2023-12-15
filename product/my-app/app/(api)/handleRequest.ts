const request ={
    post : function(data : Object){
       
        return {
            method : "POST" , 
   
        body : JSON.stringify(data)
        }
    } ,
    get : function(collection  :string){
        return {
            method : "GET" , 
            ..._header , 
        }
    } , 
    put  : function(data : Object){
        return {
            method : "PUT" , 
            ..._header , 
        body : JSON.stringify(data)
        }
    } ,
    delete  : function(){
        return {
            method : "DELETE" , 
            ..._header , 

        }
    } ,
}

const _header = {
    headers : {
        "Content-Type": "application/json"
    }
}

export default request