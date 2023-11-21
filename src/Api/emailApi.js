import axios from "axios";


const emailApi = axios.create({
    baseURL: "http://localhost:5000/mail/", headers: {
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
