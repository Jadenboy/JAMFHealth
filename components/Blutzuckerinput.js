
import { useState } from 'react';
import classes from './calcpage.module.css'

function Blutzuckerinput(){
    const[firstName, setFirstName] = useState("");
    return(
        <div className={classes.main}>
            <div className={classes.function}>
                <div className={classes.titel}>
                    Blutzuckermesser
                </div>
                <div className={classes.name}>
                    Diabätis Typ
                </div>
                <div className={classes.inputbox} >
                    <select className={classes.selector} >
                        <option value="0" >Typ 1</option>
                        <option value="1">Typ 2</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Blutzuckerinput;