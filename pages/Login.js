import Logininput from "@/components/Logininput";
import Welcome from "@/components/Welcome";
import classes from '@/components/Welcome.module.css';
function Login(){
    return(
        <div className={classes.page}>
            <Welcome/>
            <Logininput/>
        </div>
    )
}

export default Login;