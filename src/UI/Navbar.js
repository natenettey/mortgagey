import logo from '../assets/mortgagey.png'
import classes from '../UI/Navbar.module.css'
const Navbar = ()=>{
    return(
        <div className={classes.navbar}>
            <div ><img src={logo} alt="the logo"/></div>
            <div>
                <ul>
                    <li>
                    <a href="">Calculate Mortgage</a>
                    </li>
                    <li>
                    <a href="">How this works</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar