import { useState } from "react";
import InputEmail from "./InputEmail";

function Email(){

    const[email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    function saveEmail(event){
        setEmail(event.target.value);
    }
    const chekEmail = () => {
        if(email.includes("@")){
            setMensaje("El email es válido");    
        }else{
            setMensaje("El email es inválido");
        }
    }
        
    return(
        <div>
            <h2>Your Email</h2><br/>
            <InputEmail ChangeInput = {saveEmail} Value={email} ClickButton={chekEmail}/>
            <p>{mensaje}</p>   
        </div>
    )
}

export default Email;