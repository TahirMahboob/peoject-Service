import React from 'react'

function Footer() {
  return (
    
    <footer className="bg-black text-white py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
        
        {/* logo in footer  */}
        <a href="/" className="flex items-center space-x-2">
        <img
          className="block w-[100px] sm:w-[150px] lg:w-[200px] mt-3"
          src="/images/Logo.jpg"
          alt="Logo"
        />
      </a>
    
          <p className="mt-6 text-[#c7c4c4]">
            call / text: (+92) 317-7190178 <br />
            Wahabnadeem311@gmail.com
            <br />
            @Idealcity Gujranwala
          </p>
          <div className="flex space-x-4 mt-8">
            <a
              href="https://www.instagram.com/wahabnadeem24?igsh=MWFyNmRhdTY1c3Nwdg%3D%3D&utm_source=qr"
              className="flex items-center"
            >
              <img
                src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/625f2ceae51df17451f97fcf_59db4b22bcf399000193eb64_instagramiconWhite.svg"
                loading="lazy"
                width="23"
                alt="Instagram"
              />
            </a>
            <a href="#" className="flex items-center">
              <img
                src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/6258c0fb6e5319af43989fde_yelp.svg"
                loading="lazy"
                width="16"
                alt="Yelp"
              />
            </a>
            <a
              href="https://www.facebook.com/share/3ZPrQMwiWq9XViwB/?mibextid=LQQJ4d"
              className="flex items-center"
            >
              <img
                src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/625f2e3f6e9f1d34fd023c00_facebook_icon.svg"
                loading="lazy"
                width="10"
                alt="Facebook"
              />
            </a>
            <a href="#" className="flex items-center">
              <img
                src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/6258c978f82597d4850e308a_Link.svg"
                loading="lazy"
                width="20"
                alt="Link"
              />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col lg:flex-row justify-between text-[#c7c4c4]">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <a href="#" className="block mt-2">
              About
            </a>
            <a href="#" className="block mt-2">
              Professional cleaning services
            </a>
            <a href="#" className="block mt-2">
              Cleaning services near me
            </a>
            <a href="#" className="block mt-2">
              Blog
            </a>
            <a href="#" className="block mt-2">
              FAQ
            </a>
            <a href="#" className="block mt-2">
              Trabajo / Job
            </a>
            <a href="#" className="block mt-2">
              Privacy policy
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <a href="/request-a-quote" className="block mt-2">
              Request quote
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
        </div>
      </div>
      <hr className="mt-8 border-[#c7c4c4]" />
      <div className="mt-8 flex flex-col lg:flex-row justify-between items-center text-center">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <p>Copyright ©2024 IdealCity</p>
        </div>
        <div className="w-full lg:w-1/2">
          <p>
            Powered by{" "}
            <a href="http://www.withsimba.com" target="_blank" className="underline">
              Wahab & Tahir
            </a>
          </p>
        </div>
      </div>
    </div>
    </footer>
  )
}

export default Footer