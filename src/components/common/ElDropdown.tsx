import classes from "./ElDropdown.module.css"
import {ChevronDown, ChevronUp} from "lucide-react";
import {useState} from "react";
function ElDropdown({label, children}: {label:string, children: JSX.Element}) {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpening = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={classes.wrapper}>
            <button onClick={handleOpening} onBlur={handleOpening} className={classes.toggler}>
                {label} {isOpen ?<ChevronUp /> : <ChevronDown/>}
            </button>
            <div className={`${classes.content} ${isOpen ? classes.contentOpen : ''}`}>
                {children}
            </div>
        </div>
    )
}

export default ElDropdown
