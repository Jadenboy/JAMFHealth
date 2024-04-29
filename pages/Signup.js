
import Welcome from "@/components/Welcome";
import Registrationinput from "@/components/Registrationinput";
import classes from '@/components/Welcome.module.css';
function Signup(){
    return(
        <div className={classes.page}>
            <Welcome/>
            <Registrationinput/>
        </div>
    )
}

export default Signup;