import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from './context/contact/ContactState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';

import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './components/theme/Theme';
import Locations from './components/pages/Locations';
import Forum from './components/pages/Forum';
import Staff from './components/pages/Staff';
import AllTabs from './components/pages/AllTabs';
import Footer from './components/layout/Footer';
import Payment from './components/pages/Payment';
import ContactUs from './components/pages/ContactUs';
import Forms from './components/pages/Forms';
import Success from './components/pages/success';
import PayFail from './components/pages/PayFail';
import '@stripe/stripe-js';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthState>
        <ContactState>
          <AlertState>
            <Router>
              <Fragment>
                <Navbar />
                <div style={{ margin: 'auto' }}>
                  <Alerts />
                  <Routes>
                    <Route path="/admin" element={<PrivateRoute><Home /></PrivateRoute>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/forum" element={<Forum />} />
                    <Route path="/" element={<AllTabs />} />
                    <Route path="/staff" element={<Staff />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/forms" element={<Forms />} />
                    <Route path="/home" element={<Navigate to="/" replace />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="/payfail" element={<PayFail />} />
                  </Routes>
                  <Footer />
                </div>
              </Fragment>
            </Router>
          </AlertState>
        </ContactState>
      </AuthState>
    </ThemeProvider>
  );
};

export default App;
