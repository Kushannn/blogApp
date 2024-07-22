import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <section
      className="relative overflow-hidden py-10 bg-gradient-to-r from-gray-900 to-black border border-t-2 border-t-black text-white"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap justify-center">
          <div
            className="w-full p-6 md:w-1/2 lg:w-5/12"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p
                  className="text-sm text-white"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  &copy; Copyright 2023. All Rights Reserved by Kushan.
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-full p-6 md:w-1/2 lg:w-2/12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="h-full">
              <h3
                className="tracking-px mb-9 text-xs font-semibold uppercase text-white hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                Company
              </h3>
              <ul className="text-white">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full p-2 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full p-4 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Press Kit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full p-6 md:w-1/2 lg:w-2/12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="h-full">
              <h3
                className="tracking-px mb-9 text-xs font-semibold uppercase text-white hover:bg-blue-100 rounded-full p-4 duration-200"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                Support
              </h3>
              <ul className="text-white">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Account
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Help
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="w-full p-6 md:w-1/2 lg:w-3/12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="h-full">
              <h3
                className="tracking-px mb-9 text-xs font-semibold uppercase text-white hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                data-aos="zoom-in"
                data-aos-duration="500"
              >
                Legals
              </h3>
              <ul className="text-white">
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    className="text-base font-medium text-white hover:text-gray-700 hover:bg-blue-100 rounded-full px-6 py-2 duration-200"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-base font-medium text-white hover:text-white"
                    to="/"
                    data-aos="slide-up"
                    data-aos-duration="500"
                  >
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
