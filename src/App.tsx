import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import {Theme, ThemeContext} from "./theme/ThemeContext";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {

    const {theme, changeTheme} = useTheme();

    return ( 
        <div className={classNames('app',{},[theme])}>
            <button onClick={changeTheme}> Theme </button>
            <Link to={'/'}>Main page</Link>
            <Link to={"/about"}> About page </Link>
            <Suspense fallback={<div> Loading... </div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageLazy/>}/>
                    <Route path={'/about'} element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;
