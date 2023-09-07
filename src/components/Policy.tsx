import React from 'react';

import config from '../config/index.json';

const Policy = () => {
  const { policy } = config;
  const { title, subtitle } = policy;
  return (
    <div className={`py-12 bg-background`} id="policy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-6 mb-8 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            All sales are final. &nbsp;
            <a
              target="_blank"
              href="assets/pdfs/ALL_SALES_FINAL.pdf"
              className="text-primary font-semibold tracking-wide"
            >
              Read the full store policy →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
