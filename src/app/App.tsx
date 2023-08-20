import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import {classNames} from "shared/lib/classNames/classNames";
import AppRouter from "app/providers/router/ui/AppRouter";
import {NavBar} from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "shared/ui/LangSwitcher/ui/LangSwitcher";

function MyComponent() {

}

const App = () => {

    const {theme} = useTheme();

    return ( 
        <div className={classNames('app',{},[theme])}>
            <Suspense fallback="">
                <NavBar/>
                <div className={"content-page"}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>

        </div>
    );
};

export default App;
