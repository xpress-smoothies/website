import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { name: companyName, aboutLogo } = company;
  const { socialMedia, address } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={aboutLogo} alt={companyName} className="w-16 h-18" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12"></div>
        <div className="flex items-center gap-x-8 h-6">
          <a
            aria-label="instagram"
            href={socialMedia.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#F59121"
              width="33"
              height="33"
              viewBox="0 0 24 24"
            >
              <path d="M17.833 6.595v1.476c0 .237-.193.429-.435.429h-1.465c-.238 0-.434-.192-.434-.429v-1.476c0-.237.195-.428.434-.428h1.465c.242 0 .435.191.435.428zm-5.833 7.498c1.121 0 2.028-.908 2.028-2.029s-.907-2.029-2.028-2.029-2.028.908-2.028 2.029.907 2.029 2.028 2.029zm12-2.093c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-1.75h-3.953c.316.533.508 1.149.508 1.813 0 1.968-1.596 3.564-3.563 3.564-1.969 0-3.564-1.596-3.564-3.564 0-.665.191-1.281.509-1.813h-3.937v5.996c0 1.521 1.27 2.754 2.791 2.754h8.454c1.521 0 2.755-1.233 2.755-2.754v-5.996zm-7.009 4.559c1.515 0 2.745-1.232 2.745-2.746 0-.822-.364-1.56-.937-2.063-.202-.177-.429-.324-.677-.437-.346-.157-.729-.245-1.132-.245-.405 0-.788.088-1.133.245-.246.112-.474.26-.675.437-.574.503-.938 1.242-.938 2.063.001 1.514 1.234 2.746 2.747 2.746zm7.009-7.055c0-1.521-1.234-2.754-2.755-2.754h-7.162v2.917h-.583v-2.917h-.583v2.917h-.584v-2.872c-.202.033-.397.083-.583.157v2.715h-.583v-2.393c-.702.5-1.167 1.31-1.167 2.23v1.913h4.359c.681-.748 1.633-1.167 2.632-1.167 1.004 0 1.954.422 2.631 1.167h4.378v-1.913z" />
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
              fill="#F59121"
              width="33"
              height="33"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z" />
            </svg>
          </a>

          <a
            aria-label="email"
            href={socialMedia.email}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#F59121"
              width="33"
              height="33"
              viewBox="0 0 24 24"
            >
              <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
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
        <div className="flex items-center mt-8">
          <p className="mt-4 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            <a href={address.link}>{address.text}</a>
          </p>
        </div>
        <div className="flex items-center mt-3">
          <p className="mt-3 mb-8 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} Xpress Smoke Shop, LLC
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
