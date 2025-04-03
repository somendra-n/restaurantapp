import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import BranchLogin from './components/BranchLogin';
import BranchSingup from './components/BranchSignup';
import FranchiseRegistration from './components/FranchiseRegistration';
import Menu from './components/Menu';
import OrderNow from './components/OrderNow';
import Jobs from './components/Jobs';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import BranchPage from './components/BranchPage';
import MagicCards from './components/MagicCards';
import FranchiseApplications from './components/FranchiseApplications';
import JobApplications from './components/JobApplications';
import UpdateMagicCards from './components/UpdateMagicCards';
import BranchSignup from './components/BranchSignup';

function App() {
  const [user, setUser] = useState(null);
  const isAuthenticated = user !== null;

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/branch-login" element={<BranchLogin setUser={setUser} />} />
        <Route path="/branch-signup" element={<BranchSignup setUser={setUser} />} />
        <Route path="/franchise-registration" element={<FranchiseRegistration />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={isAuthenticated ? <Profile user={user} /> : <Navigate to="/login" />} />
        <Route path="/magic-cards" element={<MagicCards />} />
        <Route path="/branch-auth/:branchUsername" element={<BranchPage />} />
        {user?.role !== 'branch' && (
          <>
            <Route path="/franchise" element={<FranchiseRegistration />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
