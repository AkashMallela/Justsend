import React, { useEffect, useState } from "react";
import './templates.scss';
import * as emailApi from '../../Api/emailApi'

export default function Templates({ templateData }) {
    const [templateModelData, setTemplateModelData] = useState(templateData.TemplateModel)
    const [to, setTo] = useState("");
    // const html = templateData.html;
    const handleClick = async() => {
        // TODO: send data to backend
       try{
        const response = await emailApi.sendMail(to,templateModelData, templateData.TemplateAlias)
       console.log('response', response);
       if(response.status===200){
        alert('Mail sent successfully')
       }
       }catch(err){
        alert("An Error Occured")
       }
    }
    useEffect(() => {
        console.log(templateModelData)
    }, [templateModelData])

    return (
        <div className="template">
            <div className="template-input">
                <div className="template-main">
                    <label>
                        <input placeholder="" className="input" type='text' name='to' value={to} onChange={e => setTo(e.target.value)} />
                        <span>To:</span>
                    </label>
                </div>
                {Object.keys(templateModelData).map(field =>
                    <div className="template-main" key={field}>
                        <label>
                        <input className="input" placeholder="" type="text" value={templateModelData[field]} onChange={(e) => setTemplateModelData(prev => {
                            const newobj = { ...prev };
                            newobj[field] = e.target.value
                            return newobj
                        })} />
                        <span>{field}:</span>
                        </label>
                        
                    </div>)}
                <button className="send-mail" onClick={handleClick}>Send Mail</button>
            </div>
        </div>
    )
}