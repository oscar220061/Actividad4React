import { useState } from "react";
import InputEmail from "./InputEmail";

 


const Email = () =>{
    
    const[email, setEmail] = useState("");
    const[isValid, setIsValid] = useState();

    function saveEmail(event){
        setEmail(event.target.value);
    }
    const chekEmail = () => {
        if(email.includes("@")){
            setIsValid(true);
        }else{
            setIsValid(false);
        }
    }
        
   
    return(
        <div>
            <form>
                <h2>Your Email</h2><br/>
                <InputEmail ChangeInput = {saveEmail} Value={email} />
                <button onClick={chekEmail}>Submit</button>
                <p>{isValid ? <p>El email es válido</p> : <p>El email es inválido</p>}</p>
            </form>
            

        </div>
    )
}

export default Email;