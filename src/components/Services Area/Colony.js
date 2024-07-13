import  { useState } from 'react'
import { Link } from "react-router-dom";
import Footer from '../Footer'; 

function Colony() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isClientPortalOpen, setIsClientPortalOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsClientPortalOpen(false);
    setIsAboutOpen(false);
  };

  const toggleClientPortalDropdown = () => {
    setIsClientPortalOpen(!isClientPortalOpen);
    setIsServicesOpen(false);
    setIsAboutOpen(false);
  };

  const toggleAboutDropdown = () => {
    setIsAboutOpen(!isAboutOpen);
    setIsServicesOpen(false);
    setIsClientPortalOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
    <div className="relative">
        <nav className="absolute top-2 left-0 w-full bg-opacity-50 text-white z-10">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center ">

                {/*header logo set tahir bhi */}
              <div className="flex-shrink-0">
              <img
                className="block w-[100px] sm:w-[150px] lg:w-[90px] lg:mt-[5px] rounded-full"
                src="/images/Logo.jpg"
                alt="Logo"
              />
            </div>


                <div className="hidden  sm:block sm:ml-6 text-black ">
                  <div className="flex space-x-4 ml-40">
                    <a
                      href="/"
                      className="text-lg font-semibold text-white hover:text-red-500 px-3 py-2 rounded-md "
                    >
                      Services
                    </a>

                    <div className="relative">
                      <button
                        onClick={toggleServicesDropdown}
                        className="text-lg font-semibold  text-white hover:text-white px-3 py-2 rounded-md   flex items-center"
                      >
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
                      {isServicesOpen && (
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                          <Link to='/colony'>
                            <a
                            
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Dc Colony
                            </a>
                          </Link>
                          <Link to="/Town">
                            <a
                             
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Model Town
                            </a>
                          </Link>
                          <Link to="/Ghakhar">
                            <a
                             
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Ghakhar
                            </a>
                          </Link>
                          <Link to="/sattelite">
                            <a
                            
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Satellite Town
                            </a>
                          </Link>
                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        onClick={toggleAboutDropdown}
                        className="text-lg font-semibold  text-white hover:text-white px-3 py-2 rounded-md  flex items-center"
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
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                          <Link to="/faq">
                            <a
                             
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              FAQs
                            </a>
                          </Link>
                          <Link to="/blog">
                            <a
                            
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              Blog
                            </a>
                          </Link>
                         

                        </div>
                      )}
                    </div>

                    <div className="relative">
                      <button
                        onClick={toggleClientPortalDropdown}
                        className="text-lg font-semibold  text-white hover:text-white px-3 py-2 rounded-md   flex items-center"
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
                        <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                          <Link to="/login">
                            <a
                            
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                            >
                              Login
                            </a>
                          </Link>

                          <Link to="/book">
                            <a
                           
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                            >
                              Book Now
                            </a>
                          </Link>

                          <Link to="/register">
                            <a
                             
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                            >
                             Register
                            </a>
                          </Link>
                          
                        </div>
                      )}
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
{/* mobile side design */}
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
    onClick={toggleServicesDropdown}
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
    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
      <Link to="/colony" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
      </Link>
    </div>
  )}
</div>

                <div className="relative">
                  <button
                    onClick={toggleAboutDropdown}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500  px-3 py-2 rounded-md  flex items-center"
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
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                      <Link to="/faq">
                        <a
                         
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          FAQs
                        </a>
                      </Link>
                      <Link to="/blog">
                        <a
                         
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Blog
                        </a>
                      </Link>

                      
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={toggleClientPortalDropdown}
                    className="text-lg font-medium text-gray-500 hover:text-gray-500  px-3 py-2 rounded-md   flex items-center"
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
                    <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                      <Link to="/login">
                        <a
                         
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Login
                        </a>
                      </Link>

                      <Link to="/book">
                        <a
                        
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                        >
                          Book Now
                        </a>
                      </Link>

                      <Link to="/register">
                            <a
                             
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                            >
                             Register
                            </a>
                          </Link>

                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

  <div
  className="relative w-full h-screen"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(255, 0, 0, 0.89) 25%, rgba(255, 0, 0, 0) 80%), url('/images/dc colony.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "top"
  }}
>
    <div className="absolute inset-0 flex items-center justify-start px-8">
      <div className="text-left">
        <h1 className="text-2xl md:text-6xl text-white font-bold mb-4 font-sans mt-40">
          Home Services in
        </h1>
        <h1 className="text-2xl md:text-6xl text-white font-bold font-sans  mb-4">
        Dc Colony
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Happiness Guaranteed. If you're not satisfied, we'll come back and
          make
          <br /> it right, free of charge.
        </p>
        <Link to="/Book">
          <button className="bg-white text-[#FF0000] font-semibold px-8 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Book Now 
          </button>
          <div className="flex">
            <img
              src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars.png"
              loading="lazy"
              width="115"
              height="auto"
              alt="5 stars rating"
              className="mr-2
        mt-4"
              srcSet="
          https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-500.png 500w,
          https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-800.png 800w,
          https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-1080.png 1080w,
          https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-1600.png 1600w,
          https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars-p-2000.png 2000w,
          https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars.png 2025w
        "
              sizes="115px"
            />
            <p className="mt-4 text-white">4.9 Stars</p>
          </div>
        </Link>
      </div>
    </div>

  </div>

{/* cleaning professions */}
      <div className="text-center mt-36">
        <p className="text-[#ED5521] text-4xl font-semibold"> Dc Colony</p>
        <h1 className="text-[20px] md:text-[50px] font-semibold text-neutral-800">
          Cleaning professionals team
        </h1>
        <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500 leading-custom mb-2">
        The most skilled, dedicated and highly-rated cleaning professionals in your area. Guranteed.
         
        </p>
        <Link to="/book">
          <button className="bg-transparent text-[#ED5521] font-bold py-2 px-4 rounded mt-2 border">
            Book Now
          </button>
        </Link>

        <div className="mt-10 w-full px-4 mb-36">
        <div className="flex justify-center space-x-4">
          <div className="w-32 h-32 md:w-64 md:h-64 p-4">
            <div className="bg-white rounded-full border border-gray-200 shadow-md mx-auto flex flex-col h-full">
              <img
                src="./images/Worker1.jpg"
                className="w-full h-full object-cover rounded-full"
                alt="Virginia"
              />
              <div className="text-center mt-2">
                <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                  Virginia
                </h5>
              </div>
            </div>
          </div>
          <div className="w-32 h-32 md:w-64 md:h-64 p-4">
            <div className="bg-white rounded-full border border-gray-200 shadow-md mx-auto flex flex-col h-full">
              <img
                src="./images/Worker2.jpg"
                className="w-full h-full object-cover rounded-full"
                alt="Heydi"
              />
              <div className="text-center mt-2">
                <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                  Heydi
                </h5>
              </div>
            </div>
          </div>
          <div className="w-32 h-32 md:w-64 md:h-64 p-4">
            <div className="bg-white rounded-full border border-gray-200 shadow-md mx-auto flex flex-col h-full">
              <img
                src="./images/Worker3.jpg"
                className="w-full h-full object-cover rounded-full"
                alt="Gloria"
              />
              <div className="text-center mt-2">
                <h5 className="text-lg font-medium text-[1.4rem] text-neutral-800">
                  Gloria
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
   
{/* our cleaning packages */}
<div>
  <div className="text-center lg:text-left lg:ml-60">
    <h1 className="text-2xl lg:text-4xl font-bold text-[#FF0000]">
      Our House Cleaning Packages.
    </h1>
  </div>
  <div className="text-center lg:text-left lg:ml-60  lg:mt-0">
    <h1 className="text-xl lg:text-2xl font-semibold  lg:mt-16">
      Basic House Cleaning Services in Dc Colony
    </h1>
  </div>
  <div className="text-center lg:text-left lg:ml-60 mt-4 lg:mt-6">
    <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500">
      For basic house cleaning services or office cleaning services, choose the Basic Cleaning to
      <br className="hidden lg:block" /> shine up your:
    </p>
  </div>
  <div className="text-center lg:text-left lg:ml-60 mt-4 lg:mt-6 font-normal text-neutral-500">
    <ul className="list-disc list-inside text-base lg:text-[20px] space-y-2 lg:space-y-4">
      <li>Plumbing</li>
      <li>Paint</li>
      <li>Electrician</li>
      <li>AC/Fridge</li>
      <li>Carpet Clean</li>
    </ul>
  </div>
</div>

{/* service area */}
  <div className="text-center mt-20">
        <h1 className="text-[40px] md:text-[50px] font-semibold text-neutral-800">
        Dc Colony service areas
        </h1>
        <p className="text-[16px] md:text-[20px] mt-4 text-neutral-500 leading-custom mb-2">
          From the sprawling vineyards of Napa to the gleaming office
          <br className="hidden md:block" />
          buildings of Silicon Valley, and all the way to Sacramento.
        </p>
        <Link to="/book">
          <button className="bg-transparent text-[#ED5521]  font-bold py-2 px-4 rounded mt-2 border">
            Book Now 
          </button>
        </Link>
        <div className="w-full mt-10 lg:w-2/3 mx-auto flex flex-col justify-center mb-32 text-[#9c9b9b]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <a
                href="#"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
               Khreembad
              </a>
              <a href="#" className="block mt-2">
                Satluj-Block
              </a>
              <a href="#" className="block mt-2">
                Hajvery-Block
              </a>
              <a href="#" className="block mt-2">
                Sawan-Block
              </a>
              <a href="#" className="block mt-2">
                Indus-Block
              </a>
              <a href="#" className="block mt-2">
                Jhelum-Block
              </a>
            </div>
            <div>
              <a
                href="/request-a-quote"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
              Jinnah Town
              </a>
              <a
                href="https://berryclean.launch27.com/login"
                target="_blank"
                className="block mt-2"
              >
                Dhully
              </a>
              <a href="#" className="block mt-2">
                College Road
              </a>
              <a href="/refer" className="block mt-2">
                Pizza Hut chownk
              </a>
              <a href="/members" className="block mt-2">
                C-Block
              </a>
              <a href="/cleaning-gift-card" className="block mt-2">
                Allah chownk
              </a>
            </div>
            <div className="mt-6 lg:mt-0">
              <a
                href="/request-a-quote"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
               Chadar Town
              </a>
              <a
                href="https://berryclean.launch27.com/login"
                target="_blank"
                className="block mt-2"
              >
                Client portal
              </a>
              <a href="#" className="block mt-2">
                Book now
              </a>
              <a href="/refer" className="block mt-2">
                Refer a friend
              </a>
              <a href="/members" className="block mt-2">
                Memberships
              </a>
              <a href="/cleaning-gift-card" className="block mt-2">
                Gift cards
              </a>
            </div>
            <div className="mt-6 lg:mt-0">
              <a
                href="/request-a-quote"
                className="block mt-2 font-medium text-2xl text-black underline"
              >
               Sultan pura
              </a>
              <a
                href="https://berryclean.launch27.com/login"
                target="_blank"
                className="block mt-2"
              >
                Block A
              </a>
              <a href="#" className="block mt-2">
                Block B
              </a>
              <a href="/refer" className="block mt-2">
                Block C
              </a>
              <a href="/members" className="block mt-2">
                Block D
              </a>
              <a href="/cleaning-gift-card" className="block mt-2">
                Block E
              </a>
            </div>
          </div>
        </div>
      </div>

<Footer/>
  </>
  )
}

export default Colony