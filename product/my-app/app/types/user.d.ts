interface IUser {
    "address": {
        "geolocation": {
            "lat": string | null,
            "long": string | null
        },
        "city": string | null,
        "street": string | null,
        "number": number | null,
        "zipcode": string | null
    },
    "id": number | null,
    "email": string | null,
    "username": string ,
    "password": string,
    "name": {
        "firstname": string | null,
        "lastname": string | null
    },
    "phone": string | null,
}

interface IProduct{
    id : number | null , 
    title : string , 
    price : number  , 
    description : string , 
    category : string  , 
    image : string , 
    
}