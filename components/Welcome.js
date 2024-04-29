
import { useState } from 'react';
import classes from './Welcome.module.css';

function Welcome(){
    const[firstName, setFirstName] = useState("");

    return(
        <div className={classes.signpage}>
            <div className={classes.welcomesign}>
                <div className={classes.wtext}>
                    Willkommen zu
                </div>
                <div className={classes.wtitel}>
                    JAMF Health
                </div>
                <div className={classes.wabv}>
                    Just Ask Me For Health!
                </div>
                <div className={classes.wabv}>
                    Willst du mehrere Funktionen verwenden? Anmelden
                </div>
            </div>
            <div className={classes.signs}>
                <div className={classes.titel}>
                    <div>Registrieren</div>
                </div>
                <div className={classes.input}>
                <input type='text' value={firstName} placeholder='Name' />
                </div>
                <div className={classes.name}>

                </div>
            </div>
        </div>
    )
}

export default Welcome;