import { Mail, MapPin, PhoneCall } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-black relative  text-white">
        {/* <Image
          src="/Home/footer.jpg"
          alt="footer_bg"
          width={1920}
          height={600}
          className="h-96 object-fill"
        /> */}
        <div className="absolute w-full h-full bg-black opacity-40 top-0 z-10 shadow-lg" />
        <div className="absolute bg-[#101112] top-0 z-20 px-10 pt-16 w-full">
          <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="flex flex-col justify-start gap-4">
                <div className="flex gap-4">
                  <h1 className="text-4xl font-bold text-blue-600">Rsay </h1>
                  <span className="p-1.5 rounded-full border border-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 20 20"
                      className="text-blue-600"
                    >
                      <path
                        fill="currentColor"
                        d="M10 2a5 5 0 0 0-5 5v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7V7a3 3 0 0 1 5.906-.75a1 1 0 0 0 1.936-.5A5 5 0 0 0 10 2"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="flex gap-3">
                  <MapPin />
                  <p>
                    Abdul Samad Al-Tanoukhi Street, Al-Zahra District, Riyadh
                  </p>
                </div>
                <div className="flex gap-3">
                  <PhoneCall />
                  <p className="hover:text-blue-400 hover:translate-x-2 duration-200 cursor-pointer">
                    +966549851842
                  </p>
                </div>
                <div className="flex gap-3">
                  <PhoneCall />
                  <p className="hover:text-blue-400 hover:translate-x-2 duration-200 cursor-pointer">
                    +966549851842
                  </p>
                </div>
                <div className="flex gap-3">
                  <Mail />
                  <p className="hover:text-blue-400 hover:translate-x-2 duration-200 cursor-pointer">
                    info@rsaay.com
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row lg:w-1/2">
              <div className="flex flex-1 flex-col gap-4 lg:gap-8 items-start lg:w-1/2">
                <h3 className="text-xl">Services</h3>
                <div>
                  <ul className="flex flex-col gap-4 list-disc ml-4">
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 hover:ml-1 duration-200 cursor-pointer"
                      >
                        Website Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 hover:ml-1 duration-200 cursor-pointer"
                      >
                        Mobile Application Development (IOS & Android)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 hover:ml-1 duration-200 cursor-pointer"
                      >
                        Rsaay Integrated Learning Management System (LMS)
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-blue-400 hover:ml-1 duration-200 cursor-pointer"
                      >
                        RSAY&apos;s Training Courses
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="flex flex-1 flex-col gap-4 lg:gap-8 items-start w-60">
                  <h3 className="text-xl">Contact Us</h3>
                  <div>
                    <ul className="flex flex-col gap-2 lg:gap-4 list-disc ml-4">
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-400 hover:ml-1 duration-200 cursor-pointer"
                        >
                          For Universty
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="hover:text-blue-400 hover:ml-1 duration-200 cursor-pointer"
                        >
                          For Company
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <span className="text-sm text-gray-300 sm:text-cente">
              © 2024 <button className="hover:underline">RSAY™</button>. All
              Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}