import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div> Loading... </div>}>
            <div className={"page-wrapper"}>
                <Routes>
                    {Object.values(routeConfig).map(({path, element}) => (
                        <Route key={path} element={element} path={path}/>
                    ))}
                </Routes>
            </div>
        </Suspense>
    );
};

export default AppRouter;