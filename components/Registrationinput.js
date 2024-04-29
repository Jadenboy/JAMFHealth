
import { useState } from 'react';
import classes from './Registrationinput.module.css';
import Login from '@/pages/Login';
function Registrationinput(){
    const[firstName, setFirstName] = useState("");
    return(
        <div className={classes.signs}>
            <div className={classes.titel}>
                <div>Registrieren</div>
            </div>
{/*----------------------Input Felder------------------------ */}            
            <div className={classes.inputbox}>
                <input type='text' value={firstName} placeholder='Vorname' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='text' value={firstName} placeholder='Nachname' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='text' value={firstName} placeholder='Email' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='text' value={firstName} placeholder='Passwort' className={classes.input}/>
            </div>
            <div className={classes.inputbox}>
                <input type='text' value={firstName} placeholder='Passwort bestätigen' className={classes.input}/>
            </div>
{/*----------------------Registrierung Button------------------------ */}            
            <div className={classes.button}>
                <button type='button'>Registrieren</button>
            </div>
{/*----------------------Verlinkung zum Login------------------------ */}              
            <div className={classes.redirect}>
                Haben Sie bereits ein Konto?
                <a href='/Login' className={classes.redirector}>Einloggen</a>
            </div>
        </div>
    )
}

export default Registrationinput;