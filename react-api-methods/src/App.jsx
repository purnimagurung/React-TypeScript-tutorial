import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import MainLayout from './components/layouts/MainLayout';
import AuthLayout from './components/layouts/AuthLayout';

import Home from './components/home/Home';
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignUpForm';
import FoodMenu from './components/pages/FoodMenu';
import AboutUs from './components/pages/AboutUs';
import { Menu } from '@headlessui/react';

function App() {
  return (
    <AuthProvider>
      <Router>
        {/* Main app routes wrapped in MainLayout */}
        <Routes> <Route path="/" element={ <MainLayout> <Home /> </MainLayout> } />
          <Route path="/menu" element={ <MainLayout> <FoodMenu /> </MainLayout> } />
          <Route path="/about" element={ <MainLayout> <AboutUs /> </MainLayout> } />
          
          {/* Auth routes wrapped in AuthLayout */}
          <Route path="/login" element={ <AuthLayout> <LoginForm /> </AuthLayout>  }/>
          <Route  path="/signup" element={ <AuthLayout> <SignupForm />  </AuthLayout> }/>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
