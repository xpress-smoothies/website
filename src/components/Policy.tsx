import React from 'react';

import config from '../config/index.json';

const Policy = () => {
  const { policy } = config;
  const { title, subtitle, description } = policy;
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
            {description}
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

        {/* <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
};

export default Policy;
