import './index.scss';

import React, {Suspense, useContext, useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import {AboutPageLazy} from "./pages/about/AboutPageLazy";
import {MainPageLazy} from "./pages/main/MainPageLazy";
import {useTheme} from "./themes/useTheme";
import classNames from "./helpers/classNames";

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
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;