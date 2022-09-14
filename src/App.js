import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Loading from './pages/Loading/Loading';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import HandleOtherPage from './MainRoute/HandleOtherPage';
import HandleDashboard from './MainRoute/HandleDashboard';
const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));
const Doctor = React.lazy(() => import('./pages/Doctor/Doctor'));
const MedicalQA = React.lazy(() => import('./pages/MedicalQA/MedicalQA'));
const Covid19 = React.lazy(() => import('./pages/Covid19/Covid19'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Signup = React.lazy(() => import('./pages/Login/Signup'));
const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<HandleOtherPage />}>
                        <Route path="" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="doctor" element={<Doctor />} />
                        <Route path="medicalQa" element={<MedicalQA />} />
                        <Route path="covid19" element={<Covid19 />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                    </Route>

                    <Route
                        path="/dashboard"
                        element={
                            <RequireAuth>
                                <HandleDashboard />
                            </RequireAuth>
                        }
                    >
                        <Route
                            path=""
                            element={
                                <RequireAuth>
                                    <Dashboard />
                                </RequireAuth>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
