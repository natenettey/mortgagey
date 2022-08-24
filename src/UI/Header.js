import classes from '../UI/Header.module.css'
import headerImage from '../assets/header-image.jpg'


const Header =()=>{
    return(
        <div className={classes.header}>
            <div className={classes["header-text"]}>
                <h1>
                    Let's Help You Begin Your <br/>Home Ownership Journey Right Here !
                </h1>
                <p>
                   How much can you afford? Let's find out together.
                </p>
            </div>
            <div className={classes["header-button"]}><button>How this works <span>&#8595;</span></button></div>
            
            <div className={classes["header-image"]}></div>
           
        </div>
    )

 }

 export default Header