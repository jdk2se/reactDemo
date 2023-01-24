import './styles/index.scss';

import React from 'react';
import {useTheme} from "shared/config/useTheme";
import classNames from "shared/libs/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/navbar";
import {Sidebar} from "widgets/sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;