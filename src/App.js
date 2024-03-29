import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './pages/Loading/Loading';
import RequireAuth from './components/Login/RequireAuth/RequireAuth';
import HandleOtherPage from './MainRoute/HandleOtherPage';
import HandleDashboard from './MainRoute/HandleDashboard';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));
const Doctor = React.lazy(() => import('./pages/Doctor/Doctor'));
const MedicalQA = React.lazy(() => import('./pages/MedicalQA/MedicalQA'));

const RecentDisease = React.lazy(() =>
    import('./pages/RecentDisease/RecentDisease')
);
const Login = React.lazy(() => import('./pages/Login/Login'));
const Signup = React.lazy(() => import('./pages/Login/Signup'));
const DoctorProfile = React.lazy(() =>
    import('./pages/DoctorProfile/DoctorProfile')
);
const DashboardHome = React.lazy(() =>
    import('./pages/Dashboard/DashboardHome')
);
const DoctorRegistration = React.lazy(() =>
    import('./pages/DoctorRegistration/DoctorRegistration')
);
const DoctorCard = React.lazy(() =>
    import('./components/Doctor/DoctorCard/DoctorCard')
);
const DoctorVerification = React.lazy(() =>
    import('./components/Dashboard/DoctorVerification/DoctorVerification')
);
const DoctorsList = React.lazy(() =>
    import('./components/Dashboard/DoctorsList/DoctorsList')
);
const PatientsList = React.lazy(() =>
    import('./components/Dashboard/PatientsList/PatientsList')
);
const AppointmentList = React.lazy(() =>
    import('./components/Dashboard/AppointmentList/AppointmentList')
);
const PrescriptionList = React.lazy(() =>
    import('./components/Dashboard/PrescriptionList/PrescriptionList')
);
const AddDiseaseCategory = React.lazy(() =>
    import('./components/Dashboard/AddDiseaseCategory/AddDiseaseCategory')
);
const Covid19Dashboard = React.lazy(() =>
    import('./components/Dashboard/Covid19/Covid19')
);
const SocialMedia = React.lazy(() =>
    import('./components/Dashboard/SocialMedia/SocialMedia')
);
const AdminPanel = React.lazy(() =>
    import('./components/Dashboard/AdminPanel/AdminPanel')
);
const Setting = React.lazy(() =>
    import('./components/Dashboard/Setting/Setting')
);
const QuestionAndAns = React.lazy(() =>
    import('./components/MedicalQA/QuestionAndAns/QuestionAndAns')
);
const AllAvailableDoctors = React.lazy(() =>
    import('./pages/AllAvailableDoctors/AllAvailableDoctors')
);
const MostPopularDoctors = React.lazy(() =>
    import('./pages/MostPopularDoctors/MostPopularDoctors')
);
const LatestDiseasePageControl = React.lazy(() =>
    import(
        './components/Dashboard/LatestDiseasePageControl/LatestDiseasePageControl'
    )
);
const Nurses = React.lazy(() =>
    import('./components/Dashboard/Nurses/Nurses/Nurses')
);
const DashboardBlog = React.lazy(() =>
    import('./components/Dashboard/DashboardBlogs/DashboardBlog/DashboardBlog')
);
const Category = React.lazy(() =>
    import('./components/Dashboard/Category/Category/Category')
);
const NurseProfile = React.lazy(() =>
    import('./pages/NurseProfile/NurseProfile')
);
const DoctorBooking = React.lazy(() =>
    import('./pages/DoctorBooking/DoctorBooking')
);
const MyProfile = React.lazy(() => import('./pages/MyProfile/MyProfile'));
const Profile = React.lazy(() => import('./pages/MyProfile/Profile'));
const MyAppointments = React.lazy(() =>
    import('./pages/MyProfile/MyAppointments')
);
const LocationWiseDoctor = React.lazy(() =>
    import('./pages/LocationWiseDoctor/LocationWiseDoctor')
);
const SearchDoctor = React.lazy(() =>
    import('./pages/SearchDoctor/SearchDoctor')
);
const DoctorDetails = React.lazy(() =>
    import('./components/Dashboard/DoctorVerification/DoctorDetails')
);
const NurseDetails = React.lazy(() =>
    import('./components/Dashboard/Nurses/NurseList/NurseDetails')
);
const AppointmentDetails = React.lazy(() =>
    import('./components/Dashboard/AppointmentList/AppointmentDetails')
);
const PrescriptionDetails = React.lazy(() =>
    import('./components/Dashboard/PrescriptionList/PrescriptionDetails')
);
const MedicalQADB = React.lazy(() =>
    import('./components/Dashboard/MedicalQA/MedicalQA')
);
const MyPrescriptionDetails = React.lazy(() =>
    import('./pages/MyProfile/MyPrescriptionDetails')
);
const MyPrescription = React.lazy(() =>
    import('./pages/MyProfile/MyPrescription')
);
const QADetails = React.lazy(() =>
    import('./components/Dashboard/MedicalQA/QADetails')
);
const RegistrationFormShow = React.lazy(() =>
    import('./pages/MyProfile/RegistrationFormShow')
);
const DoctorReview = React.lazy(() => import('./pages/Review/DoctorReview'));
const WebsiteReview = React.lazy(() => import('./pages/Review/WebsiteReview'));
const AllApplicationReview = React.lazy(() =>
    import('./pages/Review/AllApplicationReview')
);
const SocialMediaMain = React.lazy(() =>
    import('./pages/SocialMediaMain/SocialMediaMain')
);
const SocialMediaHome = React.lazy(() =>
    import('./pages/SocialMediaMain/SocialMediaHome')
);
const SocialMediaPages = React.lazy(() =>
    import('./pages/SocialMediaMain/SocialMediaPages')
);
const SocialMediaProfile = React.lazy(() =>
    import('./pages/SocialMediaMain/SocialMediaProfile')
);
const SocialMediaSingleUser = React.lazy(() =>
    import('./pages/SocialMediaMain/SocialMediaSingleUser')
);

function App() {
    return (
        <div className="App">
            <ToastContainer />
            <Suspense fallback={<Loading />}>
                <Routes>
                    {/* ALL ROUTES */}
                    <Route path="/" element={<HandleOtherPage />}>
                        <Route path="" element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route
                            path="social-media"
                            element={<SocialMediaMain />}
                        >
                            <Route path="" element={<SocialMediaHome />} />
                            <Route
                                path="pages"
                                element={<SocialMediaPages />}
                            />
                            <Route
                                path="profile"
                                element={<SocialMediaProfile />}
                            />
                            <Route
                                path="profile/:email"
                                element={<SocialMediaSingleUser />}
                            />
                        </Route>
                        <Route path="doctor" element={<Doctor />}>
                            <Route path="" element={<DoctorCard />} />
                            <Route
                                path=":categoryName"
                                element={<DoctorCard />}
                            />
                        </Route>
                        <Route
                            path="doctorProfile/:id"
                            element={<DoctorProfile />}
                        />
                        <Route
                            path="doctor-booking/:id"
                            element={
                                <RequireAuth>
                                    <DoctorBooking />
                                </RequireAuth>
                            }
                        />
                        <Route path="medicalQa" element={<MedicalQA />}>
                            <Route path="" element={<QuestionAndAns />} />
                            <Route
                                path=":categoryName"
                                element={<QuestionAndAns />}
                            />
                        </Route>
                        <Route
                            path="all-available-doctors"
                            element={<AllAvailableDoctors />}
                        />
                        <Route
                            path="most-popular-doctors"
                            element={<MostPopularDoctors />}
                        />
                        <Route
                            path="location-wise-doctors/:location"
                            element={<LocationWiseDoctor />}
                        />
                        <Route
                            path="search-doctors/:value"
                            element={<SearchDoctor />}
                        />
                        <Route
                            path="recent-disease"
                            element={<RecentDisease />}
                        />
                        <Route
                            path="nurse-profile/:id"
                            element={<NurseProfile />}
                        />
                        <Route
                            path="review/doctor/:email"
                            element={<DoctorReview />}
                        />
                        <Route
                            path="review/website-review"
                            element={<WebsiteReview />}
                        />
                        <Route
                            path="reviews"
                            element={<AllApplicationReview />}
                        />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<Signup />} />
                        <Route
                            path="doctorRegistration"
                            element={
                                <RequireAuth>
                                    <DoctorRegistration />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="my-profile"
                            element={
                                <RequireAuth>
                                    <Profile />
                                </RequireAuth>
                            }
                        >
                            <Route
                                path=""
                                element={
                                    <RequireAuth>
                                        <MyProfile />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="appointments"
                                element={
                                    <RequireAuth>
                                        <MyAppointments />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="prescriptions"
                                element={
                                    <RequireAuth>
                                        <MyPrescription />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="prescription/:id"
                                element={
                                    <RequireAuth>
                                        <MyPrescriptionDetails />
                                    </RequireAuth>
                                }
                            />
                            <Route
                                path="reg-form"
                                element={
                                    <RequireAuth>
                                        <RegistrationFormShow />
                                    </RequireAuth>
                                }
                            />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    {/* -------------------DASHBOARD ROUTES------------------- */}
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
                                    <DashboardHome />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="home"
                            element={
                                <RequireAuth>
                                    <DashboardHome />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="verification"
                            element={
                                <RequireAuth>
                                    <DoctorVerification />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="verification/doctor-details/:id"
                            element={
                                <RequireAuth>
                                    <DoctorDetails />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="doctors"
                            element={
                                <RequireAuth>
                                    <DoctorsList />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="doctor/doctor-details/:id"
                            element={
                                <RequireAuth>
                                    <DoctorDetails />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="nurses"
                            element={
                                <RequireAuth>
                                    <Nurses />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="nurse/nurse-details/:id"
                            element={
                                <RequireAuth>
                                    <NurseDetails />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="patients"
                            element={
                                <RequireAuth>
                                    <PatientsList />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="appointments"
                            element={
                                <RequireAuth>
                                    <AppointmentList />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="appointment/appointment-details/:id"
                            element={
                                <RequireAuth>
                                    <AppointmentDetails />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="prescriptions"
                            element={
                                <RequireAuth>
                                    <PrescriptionList />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="prescription/:id"
                            element={
                                <RequireAuth>
                                    <PrescriptionDetails />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="prescription/prescription-details/:id"
                            element={
                                <RequireAuth>
                                    <PrescriptionDetails />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="disease"
                            element={
                                <RequireAuth>
                                    <AddDiseaseCategory />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="medicalQA"
                            element={
                                <RequireAuth>
                                    <MedicalQADB />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="question-answer/:id"
                            element={
                                <RequireAuth>
                                    <QADetails />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="covid19"
                            element={
                                <RequireAuth>
                                    <Covid19Dashboard />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="socialMedia"
                            element={
                                <RequireAuth>
                                    <SocialMedia />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="adminPanel"
                            element={
                                <RequireAuth>
                                    <AdminPanel />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="categories"
                            element={
                                <RequireAuth>
                                    <Category />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="blogs"
                            element={
                                <RequireAuth>
                                    <DashboardBlog />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="latest-disease-control"
                            element={
                                <RequireAuth>
                                    <LatestDiseasePageControl />
                                </RequireAuth>
                            }
                        />
                        <Route
                            path="settings"
                            element={
                                <RequireAuth>
                                    <Setting />
                                </RequireAuth>
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>

                    {/* NOT FOUND */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
