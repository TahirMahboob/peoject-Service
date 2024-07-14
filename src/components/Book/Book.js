import React from 'react'
import Hero from "../Hero"
import BlogImage from '../../assests/images/blog.jpg'

import Footer from '../Footer'; 


function Book() {
  
  return (
    <>
    
    <Hero text="Book" text1 ="services Now" image={BlogImage} />
    <div className="page-wrapper">
    <div className="section-2">
      <div className="container mx-auto p-8">
      <div class="flex items-center justify-center">
  <div class="text-center">
    <h1 class="text-2xl font-bold mb-4">Book Now </h1>
   
  </div>
</div>
        <div id="Request-a-quote" className="w-full max-w-lg mx-auto">
          <form
            className="space-y-4 border 1px solid black p-5"
          
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="Service-address" className="mb-2">Service address *</label>
                <input
                  className="form-input w-full p-2 border border-gray-300 rounded"
                  maxLength="256"
                  name="Service-address"
                  data-name="Service address"
                  placeholder="You Specific Address"
                  type="text"
                  id="Service-address"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Zip-code-2" className="mb-2">Zip code *</label>
                <input
                  className="form-input w-full p-2 border border-gray-300 rounded"
                  maxLength="256"
                  name="Zip-code"
                  data-name="Zip code"
                  placeholder="50--"
                  type="text"
                  id="Zip-code-2"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2">Email *</label>
                <input
                  className="form-input w-full p-2 border border-gray-300 rounded"
                  maxLength="256"
                  name="email"
                  data-name="Email"
                  placeholder="Email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Phone" className="mb-2">Phone *</label>
                <input
                  className="form-input w-full p-2 border border-gray-300 rounded"
                  maxLength="256"
                  name="Phone"
                  data-name="Phone"
                  placeholder="+92--"
                  type="tel"
                  id="Phone"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="First-name" className="mb-2">First Name *</label>
                <input
                  className="form-input w-full p-2 border border-gray-300 rounded"
                  maxLength="256"
                  name="First-name"
                  data-name="First name"
                  placeholder="F-Name"
                  type="text"
                  id="First-name"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Last-name" className="mb-2">Last Name *</label>
                <input
                  className="form-input w-full p-2 border border-gray-300 rounded"
                  maxLength="256"
                  name="Last-name"
                  data-name="Last name"
                  placeholder="L-Name"
                  type="text"
                  id="Last-name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="Type-of-service" className="mb-2">Type of service *</label>
                <select
                  id="Type-of-service"
                  name="Type-of-service"
                  data-name="Type of service"
                  required
                  className="form-select w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Basic residential clean">Basic residential clean</option>
                  <option value="Deep residential clean">Deep residential clean</option>
                  <option value="Move-in/out clean">Move-in/out clean</option>
                  <option value="Airbnb clean">Airbnb clean</option>
                  <option value="Carpet clean">Carpet clean</option>
                  <option value="Commercial clean">Commercial clean</option>
                  <option value="Office clean">Office clean</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="Frequency" className="mb-2">Frequency *</label>
                <select
                  id="Frequency"
                  name="Frequency"
                  data-name="Frequency"
                  required
                  className="form-select w-full p-2 border border-gray-300 rounded"
                >
                  <option value="One-time">One-time</option>
                  <option value="Every week">Every week</option>
                  <option value="Every 2 weeks">Every 2 weeks</option>
                  <option value="Every 4 weeks">Every 4 weeks</option>
                </select>
              </div>
            </div>
            <div className="p-2">
              <div className="g-recaptcha" data-sitekey="6LcLJ5gpAAAAAGRCOYj8_OfHkZIY64tlHx9fd0LF"></div>
            </div>
            <div className="p-2">
              <input
                type="submit"
                data-wait="Please wait..."
                className="bg-[#FF0000] w-full text-white py-2 px-4 rounded cursor-pointer"
                value="Submit form"
              />
            </div>
          </form>
          
        </div>
       
        <div className="flex flex-col md:flex-row items-center mt-4 md:ml-96">
  <img
    src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/66077e153e90ccf7c8f17907_5_stars.png"
    loading="lazy"
    width="115"
    height="auto"
    alt="5 stars rating"
    className="mb-2 md:mr-2 md:mb-0"
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
  <div className="text-lg text-center md:text-left">4.9 stars on</div>
  <img
    src="https://assets-global.website-files.com/6251a78116ff6353d61a6179/660852c59db08fa48ef5ad0e_google.png"
    loading="lazy"
    alt="Google"
    height="5px"
    width="110px"
    className="mt-2 md:mt-0 md:ml-2 "
  />
</div>

      </div>
    </div>
    </div>
    
  <Footer/>
</>

  )
}

export default Book


// <!DOCTYPE html>
// <!--
//  @license
//  Copyright 2019 Google LLC. All Rights Reserved.
//  SPDX-License-Identifier: Apache-2.0
// -->
// <html>
//   <head>
//     <style>
//       /**
//        * @license
//        * Copyright 2019 Google LLC. All Rights Reserved.
//        * SPDX-License-Identifier: Apache-2.0
//        */
//       /** 
//        * Always set the map height explicitly to define the size of the div element
//        * that contains the map. 
//        */
//       #map {
//         height: 100%;
//       }

//       /* Optional: Makes the sample page fill the window. */
//       html,
//       body {
//         height: 100%;
//         margin: 0;
//         padding: 0;
//       }

//       .custom-map-control-button {
//         background-color: #fff;
//         border: 0;
//         border-radius: 2px;
//         box-shadow: 0 1px 4px -1px rgba(0, 0, 0, 0.3);
//         margin: 10px;
//         padding: 0 0.5em;
//         font: 400 18px Roboto, Arial, sans-serif;
//         overflow: hidden;
//         height: 40px;
//         cursor: pointer;
//       }
//       .custom-map-control-button:hover {
//         background: rgb(235, 235, 235);
//       }
//     </style>
//     <title>Geolocation</title>
//     <script>
//       /**
//        * @license
//        * Copyright 2019 Google LLC. All Rights Reserved.
//        * SPDX-License-Identifier: Apache-2.0
//        */
//       // Note: This example requires that you consent to location sharing when
//       // prompted by your browser. If you see the error "The Geolocation service
//       // failed.", it means you probably did not give permission for the browser to
//       // locate you.
//       let map, infoWindow;

//       function initMap() {
//         map = new google.maps.Map(document.getElementById("map"), {
//           center: { lat: -34.397, lng: 150.644 },
//           zoom: 6,
//         });
//         infoWindow = new google.maps.InfoWindow();

//         const locationButton = document.createElement("button");

//         locationButton.textContent = "Pan to Current Location";
//         locationButton.classList.add("custom-map-control-button");
//         map.controls[google.maps.ControlPosition.TOP_CENTER].push(
//           locationButton
//         );
//         locationButton.addEventListener("click", () => {
//           // Try HTML5 geolocation.
//           if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(
//               (position) => {
//                 const pos = {
//                   lat: position.coords.latitude,
//                   lng: position.coords.longitude,
//                 };

//                 infoWindow.setPosition(pos);
//                 infoWindow.setContent("Location found.");
//                 infoWindow.open(map);
//                 map.setCenter(pos);
//               },
//               () => {
//                 handleLocationError(true, infoWindow, map.getCenter());
//               }
//             );
//           } else {
//             // Browser doesn't support Geolocation
//             handleLocationError(false, infoWindow, map.getCenter());
//           }
//         });
//       }

//       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//         infoWindow.setPosition(pos);
//         infoWindow.setContent(
//           browserHasGeolocation
//             ? "Error: The Geolocation service failed."
//             : "Error: Your browser doesn't support geolocation."
//         );
//         infoWindow.open(map);
//       }

//       window.initMap = initMap;
//     </script>
//   </head>
//   <body>
//     <div id="map"></div>
//     <script
//       src="https://maps.googleapis.com/maps/api/js?key=INSERT_YOUR_API_KEY&callback=initMap&v=weekly&solution_channel=GMP_CCS_geolocation_v2"
//       defer
//     ></script>
//   </body>
// </html>