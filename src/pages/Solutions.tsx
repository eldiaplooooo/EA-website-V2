import React from 'react';
import { useLanguage } from '../components/LanguageSelector';

const Solutions: React.FC = () => {
  const { translate } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {translate('nav.solutions')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Discover our comprehensive AI solutions designed for your industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Gastronomy & Hospitality
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              AI solutions for restaurants, hotels, and hospitality businesses.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Industrial Manufacturing
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Smart automation and predictive maintenance for manufacturing.
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Smart Living
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Intelligent home automation and IoT solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;