import React from "react";
const iconSize = "w-12 h-12";

function Contact() {
  return (
    <div
      id="contact"
      className="mx-6 max-w-sm sm:max-w-full sm:h-[34em] scroll-mt-20"
    >
      <h1
        className={`text-5xl 2xl:pl-16 font-bold text-transparent bg-clip-text bg-gradient-to-br from-orange-500 via-pink-500 to-purple-900`}
      >
        Contact Me
      </h1>
      <div className="h-[50%] flex flex-col justify-center items-center my-20">
        <div className="mb-8 text-lg">
          <p>My inbox is always open as I look for new opportunities.</p>
          <p>I'll get back to you as soon as I can!</p>
        </div>
        <div className="h-10 flex items-center justify-center gap-2 md:gap-10">
          <a
            href="mailto:tharathip.tamwiset@gmail.com"
            target="_blank"
            className="w-1/4 h-full"
          >
            <svg
              className="w-full h-full"
              width="25"
              height="30"
              viewBox="0 0 35 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.1667 0.833252H3.83341C1.95425 0.833252 0.433831 2.37075 0.433831 4.24992L0.416748 24.7499C0.416748 26.6291 1.95425 28.1666 3.83341 28.1666H31.1667C33.0459 28.1666 34.5834 26.6291 34.5834 24.7499V4.24992C34.5834 2.37075 33.0459 0.833252 31.1667 0.833252ZM31.1667 7.66659L17.5001 16.2083L3.83341 7.66659V4.24992L17.5001 12.7916L31.1667 4.24992V7.66659Z"
                fill="#F3F3F3"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/tharathip-t/"
            className="w-1/4 h-full"
            target="_blank"
          >
            <img
              className="w-full h-full object-contain"
              src="./assets/linkedin.png"
            />
          </a>

          <a
            href="https://codesandbox.io/u/fronce"
            className="w-1/4 h-full"
            target="_blank"
          >
            <img
              className="w-auto h-full object-contain rounded-md"
              src="./assets/csb.png"
            />
          </a>

          <a
            href="https://github.com/fronceee"
            className="w-1/4 h-full -ml-7 md:ml-0"
            target="_blank"
          >
            <img
              className="w-full h-full object-contain"
              src="./assets/github-mark-white.svg"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
