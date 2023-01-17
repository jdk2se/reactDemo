import './styles/index.scss';

import React, {Suspense, useContext, useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import {useTheme} from "shared/config/useTheme";
import classNames from "shared/libs/classNames";
import {AboutPage} from "pages/about";
import {MainPage} from "pages/main";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                Change Theme
            </button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />}/>
                    <Route path={'/'} element={<MainPage />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;