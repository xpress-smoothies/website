import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { name: companyName, aboutLogo } = company;
  const { socialMedia } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={aboutLogo} alt={companyName} className="w-16 h-18" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12"></div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="facebook"
            href={socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="#F59121"
              width="50px"
              height="50px"
              viewBox="-4 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>mail</title>
              <path d="M24 8.375l-12 10.281-12-10.281v-0.594h24v0.594zM24 22.875l-7.938-5.719 7.938-6.875v12.594zM0 10.281l7.938 6.875-7.938 5.719v-12.594zM12 20.688l3.281-2.875 8.719 6.281v0.125h-24v-0.125l8.719-6.281z"></path>
            </svg>
          </a>
          <a
            aria-label="twitter"
            href={socialMedia.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              fill="#F59121"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="40px"
              height="40px"
            >
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z" />
            </svg>
          </a>
          <a
            aria-label="maps"
            href={socialMedia.maps}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#F59121"
              className="bi bi-map-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
              />
            </svg>
          </a>
          <a
            aria-label="phone"
            href={socialMedia.phone}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#F59121"
              className="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} Xpress Smoke Shop, LLC
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
