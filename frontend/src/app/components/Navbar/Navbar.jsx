"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 
import Button from '@mui/material/Button';
import { AccountCircle as ProfileIcon } from '@mui/icons-material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
    useEffect(() => {
      const authStatus = localStorage.getItem('authToken'); 
      setIsLoggedIn(!!authStatus); 
    }, []);
  
    const handleLogout = () => {
      localStorage.removeItem('authToken');
      setIsLoggedIn(false);
       router.push('/logout');
    };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);


  const router = useRouter(); // Get the current router object

  const isActive = (pathname) => router.pathname === pathname; // Function to check active route

  return (
    <nav className="bg-white text-black shadow-md p-3 sm:p-4 w-full fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2" />
              <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
            </svg>
          </Link>
          <Link href="/" className="text-2xl font-bold">
            CrisisSync
          </Link>
        </div>

        {/* Desktop Navbar Links and Icons */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link href="/" className={`text-sm sm:text-base ${isActive('/') ? 'font-bold text-blue-600' : 'hover:text-gray-600 ml-7 mr-7'}`}>
            Mission
          </Link>
          <Link href="/pages/forcassting-&-alerts" className={`text-sm sm:text-base ${isActive('/pages/forcassting-&-alerts') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
            Forecasting & Alerts
          </Link>
          <Link href="/pages/personal-safety" className={`text-sm sm:text-base ${isActive('/pages/personal-safety') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
            Personal Safety
          </Link>
          <Link href="/pages/recovery-&-resilience" className={`text-sm sm:text-base ${isActive('/pages/recovery-&-resilience') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
            Recovery & Resilience
          </Link>
          <Link href="/pages/news-&-media" className={`text-sm sm:text-base ${isActive('/pages/news-&-media') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
            News & Media
          </Link>
          <Link href="/pages/disaster-dashboard" className={`text-sm sm:text-base ${isActive('/pages/disaster-dashboard') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
            Disaster Dashboard
          </Link>

          <Link href="/profile" className="hover:text-gray-600">
            <ProfileIcon />
          </Link>

           {isLoggedIn ? (
            <Button variant="contained" color="primary" size="small" onClick={handleLogout}>
              Logout
            </Button>
          ) : (
            <Link href="/pages/login" passHref>
              <Button variant="contained" color="primary" size="small">
                Login
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
<div className="absolute top-0 right-0 w-full bg-white z-50 p-4 lg:hidden">
  <div className="flex items-center justify-between mb-4">
    {/* Left Side Content (for example, Logo) */}
    <div className="flex items-center space-x-4">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="4" x2="12" y2="20" stroke="currentColor" strokeWidth="2" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
        </svg>
      </Link>
      <Link href="/" className="text-2xl font-bold">
        CrisisSync
      </Link>
    </div>

    {/* Right Side Content (for example, Profile Icon and Toggle Menu) */}
    <div className="flex items-center space-x-4 ml-auto">
      <Link href="/profile" className="hover:text-gray-600">
        <ProfileIcon className="w-8 h-8" />
      </Link>
      <button onClick={toggleMenu} className="text-black">
        {isOpen ? (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu Links */}
  <div className={`flex flex-col space-y-4 ${isOpen ? 'block' : 'hidden'}`}>
    <div className="flex flex-col space-y-4">
      <Link href="/" onClick={closeMenu} className={`text-sm font-semibold ${isActive('/') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
        Mission
      </Link>
      <hr className="border-gray-300" />
      <Link href="/pages/forcassting-&-alerts" onClick={closeMenu} className={`text-sm ${isActive('/pages/forcassting-&-alerts') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
        Forecasting & Alerts
      </Link>
      <hr className="border-gray-300" />
      <Link href="/pages/personal-safety" onClick={closeMenu} className={`text-sm ${isActive('/pages/personal-safety') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
        Personal Safety
      </Link>
      <hr className="border-gray-300" />
      <Link href="/pages/recovery-&-resilience" onClick={closeMenu} className={`text-sm ${isActive('/pages/recovery-&-resilience') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
        Recovery & Resilience
      </Link>
      <hr className="border-gray-300" />
      <Link href="/pages/news-&-media" onClick={closeMenu} className={`text-sm ${isActive('/pages/news-&-media') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
        News & Media
      </Link>
      <hr className="border-gray-300" />
      <Link href="/pages/disaster-dashboard" onClick={closeMenu} className={`text-sm ${isActive('/pages/disaster-dashboard') ? 'font-bold text-blue-600' : 'hover:text-gray-600'}`}>
        Disaster DashBoard
      </Link>
      <hr className="border-gray-300" />
      <Link href="/pages/login" onClick={closeMenu} passHref>
        <Button variant="contained" color="primary" size="small" className='w-full'>
          Login
        </Button>
      </Link>
    </div>
  </div>
</div>


    </nav>
  );
};

export default Navbar;
