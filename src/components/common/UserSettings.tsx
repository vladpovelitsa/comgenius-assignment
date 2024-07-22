import {LogOut, Moon, Sun} from "lucide-react";
import classes from './TheNav.module.css'
import {useTheme} from "../../context/Theme.tsx";

function UserSettings({direction}: {direction?: '.col' | ''}) {
    const {theme, switchTheme} = useTheme();

    return (
        <ul className={`${classes.list} ${direction ? classes.listCol : ''}`}>
            <li className={classes.item}>
                <button className={classes.link} onClick={switchTheme}>
                    {theme === 'dark' ? <Sun /> : <Moon /> }  {theme === 'dark' ? 'Light' : 'Dark' } mode
                </button>
            </li>
            <li className={classes.item}>
                <button className={classes.link}>
                    <LogOut/> Uitloggen
                </button>
            </li>
        </ul>
    )
}

export default UserSettings
