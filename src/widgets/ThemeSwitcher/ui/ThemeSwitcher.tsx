import cls from './ThemeSwitcher.module.scss';

import classNames from "shared/libs/classNames";
import {useTheme} from "shared/config/useTheme";
import LightIcon from "shared/assets/icons/themeLight.svg";
import DarkIcon from "shared/assets/icons/themeDark.svg";
import {Theme} from "shared/config/ThemeContext";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
