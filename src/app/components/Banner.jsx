import React from 'react';

const Banner = () => {
    return (
      <div>
        <section className="py-8 md:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="section-title font-bold text-5xl">
              Friends to keep close in your life
            </h1>
            <p className="muted-text mx-auto mt-5 max-w-2xl text-base leading-7 text-[#64748B]">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the <br /> relationships that matter most.
            </p>
            <button className="btn btn-primary bg-green-900 rounded-sm  px-6 py-3 font-bold text-white mt-6">
              <span>＋</span>
              <span>Add a Friend</span>
            </button>
          </div>
        </section>    
      </div>
    );
};

export default Banner;