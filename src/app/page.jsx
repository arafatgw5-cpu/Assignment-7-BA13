import React from 'react';
import Banner from "../app/Components/Banner"
const HomePage = () => {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <Banner />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div
            className="bg-white border border-gray-100 rounded-2xl p-6 text-center 
  shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h2 className="text-4xl font-extrabold text-green-600">
              {/* {totalFriends} */}
            </h2>

            <p className="text-gray-500 mt-2 text-sm font-medium tracking-wide">
              Total Friends
            </p>
          </div>
        </div>
      </div>
    );
};

export default HomePage;

