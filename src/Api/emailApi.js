import axios from "axios";


const emailApi = axios.create({
    baseURL: "https://justsend.onrender.com/mail/", headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
});

export const sendMail = (to, templateModel, templateAlias) => emailApi.post('/sendmail', {
    data: {
        To: to,
        TemplateModel: templateModel,
        TemplateAlias: templateAlias,
    }
})
export const getmails = () => emailApi.get('/getmails');
export const getRecievedmails = () => emailApi.get('/getrecievedmails');
