

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
{/*----------------------Registrierung Button------------------------ */}            
            <div className={classes.button}>
                <button type='button'>Login</button>
            </div>    
{/*----------------------Verlinkung zum Login------------------------ */}              
            <div className={classes.redirect}>
                Haben Sie noch kein Konto?
                <a href='/Signup' className={classes.redirector}>Registrieren</a>
            </div>
        </div>
    )
}

export default Logininput;