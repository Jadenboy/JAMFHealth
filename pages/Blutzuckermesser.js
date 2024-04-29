import Header from "@/components/Header";
import Blutzuckerinput from "@/components/Blutzuckerinput";
import classes from "@/components/calcpage.module.css";

function Blutzuckermesser(){
    return(
        <div className={classes.page}>
            <Header/>
            <Blutzuckerinput/>
        </div>
    )
}

export default Blutzuckermesser;