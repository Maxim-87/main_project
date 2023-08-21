import {classNames} from "shared/lib/classNames/classNames";
import styles from './Sidebar.module.scss';
import {useState} from "react";
import {Button} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
    className?: string,
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const onToggle = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed})}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={styles.switcher}>
                <ThemeSwitcher/>
                <LangSwitcher className={styles.langSwitcher}/>
            </div>
        </div>
    );
};

