import {LogOut, Moon} from "lucide-react";
import classes from './TheNav.module.css'

function UserSettings({direction}: {direction?: '.col' | ''}) {
    return (
        <ul className={`${classes.list} ${direction ? classes.listCol : ''}`}>
            <li className={classes.item}>
                <button className={classes.link}>
                    <Moon/> Dark mode
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
