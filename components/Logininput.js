

import { useState } from 'react';
import classes from './Registrationinput.module.css';
function Logininput(){
    const[email, setemail] = useState("");
    const[password, setpassword] = useState("");
    return(
        <div className={classes.signs}>
            <div className={classes.titel}>
                <div>Login</div>
            </div>
{/*----------------------Input Felder------------------------ */}            
            <div className={classes.inputbox}>
                <input type='text' value={email} placeholder='Email' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='text' value={password} placeholder='Passwort' className={classes.input}/>
            </div>            
        </div>
    )
}

export default Logininput;