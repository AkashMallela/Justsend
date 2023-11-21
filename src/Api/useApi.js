import axios from "axios";

const baseApi = axios.create({baseURL:"https://justsend.onrender.com/user/"})

export const signIn=(tokenId)=> baseApi.post("/signinwithgoogle",{
        token: tokenId,
})
