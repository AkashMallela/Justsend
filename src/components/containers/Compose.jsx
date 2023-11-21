import React from "react";
import Leftbar from "./Leftbar";
import './compose.scss';
import { Link } from "react-router-dom";
import welcome from './templates/welcome.png';
import invoice from './templates/invoice.png';
import reciept from './templates/reciept.png';
import expired from './templates/trail-expired.png';
import invitation from './templates/invitation.png';
import reset from './templates/reset.png';
import payment from './templates/payment.png';
import comment from './templates/commented.png';
import expiring from './templates/expiring.png';




export default function Compose() {

    const templateModels = [
        {
            id:0,
            name: 'Welcome',
            img: welcome,
            description: 'Greet the new user a warm welcome',
        },
        {
            id:3,
            name: 'Invoice',
            img: invoice,
            description: 'send the invoice to user',
        },
        {
            id:1,
            name: 'Reset password',
            img: reset,
            description: 'send password reset link to the user',
        },
        
        {
            id:2,
            name: 'User Invitation',
            img: invitation,
            description: 'Invite user to add an account in your website',
        },
       
    ]

    return (
        <div className="compose">
            <Leftbar />
            <div className="compose-templates">
                    {
                        templateModels.map((item, key) => {
                            return (
                                <div className="card">
                                    <Link className="link" state={{id:item.id}}  to='/template'>
                                    <div className="title">
                                        <h1>{item.name}</h1>
                                    </div>
                                    <div className="img">
                                        <img className="template-img" src={item.img} alt={item.name} />
                                    </div>
                                    </Link>
                                    <div className="info">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="btn">
                                    <Link className="link" to='/template'>
                                    <button type="button" class="action">Get started </button>
                                    </Link>
                                    </div>
                                </div >
                            )
                        })
                    }
            </div>
        </div>
    )
}