export interface User{
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface Users{
    isAdmin:boolean,
    isActive:boolean,
    _id:string,
    firstName:string,
    lastName:string,
    email:string,
    dob:string,
    gender:string,
    photoId:string,
    createdDate:string,
    token: string
}
