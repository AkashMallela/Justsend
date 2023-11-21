import axios from "axios";

const baseApi = axios.create({baseURL:"http://localhost:5000/user/"})

export const signIn=(tokenId)=> baseApi.post("/signinwithgoogle",{
        token: tokenId,
})
