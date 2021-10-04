import {FunctionComponent, lazy, Suspense} from "react";
import {Route, Routes} from 'react-router-dom'
import {RouterPaths} from "../utils/RouterPaths";

const Test = lazy(() => import('../components/TestComponent/TestComponent'));
const About = lazy(() => import('../components/About/About'));

const AppRouter: FunctionComponent = () => {
    return (
        <Suspense fallback={<div>loading...</div>} >
            <Routes>
                <Route path={RouterPaths.Empty} element={<Test />} />
                <Route path={RouterPaths.About} element={<About />} />
            </Routes>
        </Suspense>
    )
};

export default AppRouter;
