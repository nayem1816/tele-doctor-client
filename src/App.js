import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading/Loading';
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
