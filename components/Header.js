
import classes from './Header.module.css';
import Image from "next/image";
import Link from 'next/link';

function Header(){
    return (
        <div className={classes.header}>
{/*----------------------Logo------------------------ */}
            <div className={classes.toplogo}>
                <div className={classes.logo}>
                    <Image src={"/images/logo.png"} layout='fill'/>
                </div>
                <div className={classes.title}>
                    JAMF Health
                </div>
            </div>
{/*----------------------Links------------------------ */}
            <div className={classes.links}>
                <div className={classes.link}>
                    <div className={classes.icon}>
                        <Image src={"/images/glucose.png"} layout='fill'/>
                    </div>
                    <div className={classes.icontext}>
                        Blutzuckermesser
                    </div>
                </div>
                <div className={classes.link}>
                    <div className={classes.icon}>
                        <Image src={"/images/blood_pressure.png"} layout='fill'/>
                    </div>
                    <div className={classes.icontext}>
                        Blutdruckmesser
                    </div>
                </div>
                <div className={classes.link}>
                    <div className={classes.icon}>
                        <Image src={"/images/book.png"} layout='fill'/>
                    </div>
                    <div className={classes.icontext}>
                        Tagebuch
                    </div>
                </div>
            </div>
{/*----------------------Sign Links------------------------ */}
            <div className={classes.signlinks}>
                <a href='/Signup'>
                    <div className={classes.sign}>Registrieren</div>
                </a>
                <button>
                <div className={classes.sign}>Login</div>
                </button>
            </div>
        </div>
    )

}

export default Header;