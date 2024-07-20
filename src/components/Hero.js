import React, { useState } from 'react';
import DropDown from '../common/DropDown';
import SmallDropDown from '../common/SmallDropDown';

function Hero({ text, text1, image }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const serviceArea = [{ name: 'Dc Colony', url: '/colony' }, { name: 'Model Town', url: '/town' }, { name: 'Ghakhar', url: '/Ghakhar' }, { name: 'Satellite Town', url: '/sattelite' },]
  const aboutSection = [{ name: 'FAQs', url: '/faq' }, { name: 'Blog', url: '/blog' }]
  const clientSection = [{ name: 'Login', url: '/login' }, { name: 'Register', url: '/register' }, { name: 'Book Now', url: '/book' },]
  return (
    <>
      <div className="relative">
        <nav className="absolute top-2 left-0 w-full bg-opacity-50 text-white z-10">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <a href="/" className="flex items-center space-x-2">
                    <img
                      className="block w-[100px] sm:w-[150px] lg:w-[90px] lg:mt-[5px] rounded-full"
                      src="/images/Logo.jpg"
                      alt="Logo"
                    />
                  </a>
                </div>

                <div className="hidden sm:block sm:ml-6 text-black">
                  <div className="flex space-x-4 ml-40">
                    <a
                      href="/"
                      className="text-lg font-medium text-white hover:text-white block px-3 py-2 rounded-md">
                      Services
                    </a>

                    <div className="relative group">
                      <button className="text-lg font-semibold text-white hover:text-white px-3 py-2 rounded-md flex items-center">
                        Services areas
                        <svg
                          className="ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <DropDown array={serviceArea} />
                      {/* <div className="absolute top-8 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
                        {serviceArea.map((data, index) => (
                          <Link to={data.url} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {data.name}
                          </Link>
                        ))}

                        {/* <Link to="/colony" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Dc Colony
                        </Link>
                        <Link to="/town" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Model Town
                        </Link>
                        <Link to="/Ghakhar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Ghakhar
                        </Link>
                        <Link to="/sattelite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Satellite Town
                        </Link> */}
                      {/* </div> */}

                    </div>

                    <div className="relative group">
                      <button className="text-lg font-semibold text-white hover:text-white px-3 py-2 rounded-md flex items-center">
                        About
                        <svg
                          className="ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      <DropDown array={aboutSection} />


                      {/* <div className="absolute top-8 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20 hidden group-hover:block">
                        <Link to="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          FAQs
                        </Link>
                        <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          Blog
                        </Link>
                      </div> */}

                    </div>

                    <div className="relative group">
                      <button className="text-lg font-semibold text-white hover:text-white px-3 py-2 rounded-md flex items-center">
                        Client Portal
                        <svg
                          className="ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      <DropDown array={clientSection} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block bg-[#FF0000] p-3 rounded-xl">
                <a
                  href="https://wa.me/923177190178"
                  className="button-4 w-button text-lg font-semibold text-white hover:text-white px-3 py-2 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </div>

              <div className="sm:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-blue-500 text-xl hover:text-gray-600 px-3 py-2 rounded-md"
                >
                  <svg
                    className="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isMobileMenuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white mt-[25px]">
                <a
                  href="/"
                  className="text-lg font-medium text-gray-500 hover:text-white block px-3 py-2 rounded-md "
                >
                  Services
                </a>

                <div className="relative">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500 px-3 py-2 rounded-md flex items-center"
                  >
                    Service Area
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <SmallDropDown array={serviceArea} />
                    // <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                    //   <Link to="/colony" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    //     Dc Colony
                    //   </Link>
                    //   <Link to="/town" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    //     Model Town
                    //   </Link>
                    //   <Link to="/Ghakhar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    //     Ghakhar
                    //   </Link>
                    //   <Link to="/sattelite" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    //     Satellite Town
                    //   </Link>
                    // </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setIsAboutOpen(!isAboutOpen)}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500 px-3 py-2 rounded-md flex items-center"
                  >
                    About
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isAboutOpen && (
                    <SmallDropDown array={aboutSection} />
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setIsClientPortalOpen(!isClientPortalOpen)}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500 px-3 py-2 rounded-md flex items-center"
                  >
                    Client Portal
                    <svg
                      className="ml-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isClientPortalOpen && (
                    <SmallDropDown array={clientSection} />
                  )}
                </div>
              </div>
            </div>
          )}
        </nav >
      </div >

      <div className="relative w-full h-[500px]">
        <img
          src={image}
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">{text}</h1>
          <p className="mt-4 text-lg">{text1}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;
