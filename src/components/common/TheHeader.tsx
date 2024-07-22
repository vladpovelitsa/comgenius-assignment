import AhLogo from '../../assets/ah-logo.svg'
import TheNav from "./TheNav.tsx";
import classes from './TheHeader.module.css'

function TheHeader() {
    return (
        <header className={classes.header}>
            <a href="#" className={classes.logo}>
                <img src={AhLogo} className="logo" alt="Ah logo" />
            </a>

            <h6 className={classes.currentPage}>
                Home
            </h6>

            <TheNav />
        </header>
    )
}

export default TheHeader
