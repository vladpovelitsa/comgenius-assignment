import {NavLink} from "../../types/common.ts";
import {CircleHelp, House, Menu, TrendingUp, X} from "lucide-react";
import {useState} from "react";
import UserSettings from "./UserSettings.tsx";
import navClasses from './TheNav.module.css';
import ElDropdown from "./ElDropdown.tsx";

function TheNav() {
    const userName = 'Carel Meerman'
    const navLinks: NavLink[] = [
        {
            label: 'Home',
            url: '#',
            icon: <House/>,
        },
        {
            label: 'Signalen',
            url: '#',
            icon: <TrendingUp/>,
        },
        {
            label: 'Trend view',
            url: '#',
            icon: <TrendingUp/>,
        },
        {
            label: 'Deep dives',
            url: '#',
            icon: <TrendingUp/>,
        },
        {
            label: 'KPI Library',
            url: '#',
            icon: <TrendingUp/>,
        },
        {
            label: 'Dashboards',
            url: '#',
            icon: <TrendingUp/>,
        },
        {
            label: 'FAQ',
            url: '#',
            icon: <CircleHelp/>,
        },
    ];

    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className={navClasses.nav}>
            <button onClick={toggleNav} className={navClasses.toggler}>
                {isOpen ? <X /> : <Menu />}
            </button>

            <section className={`${navClasses.content} ${isOpen ? navClasses.contentOpened : ''}`}>
                <p className={navClasses.username}>
                    {userName}
                </p>

                <ul className={navClasses.list}>
                    {navLinks.map(
                        (link: NavLink, index:number) => (
                            <li className={navClasses.item} key={index}>
                                <a href={link.url} className={`${navClasses.link} ${index === 0 ? navClasses.linkActive : ''}`}>
                                    <span className={navClasses.icon}>{link.icon}</span> {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <div className={navClasses.mobileSettings}>
                    <UserSettings />
                </div>

                <div className={navClasses.desktopSettings}>
                    <ElDropdown label={userName} children={<UserSettings direction={'.col'} />} />
                </div>
            </section>
        </nav>
    )
}

export default TheNav
