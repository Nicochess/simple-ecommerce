import React from "react";

const Hero = async () => {
  return (
    <section className="relative bg-[url(https://images.unsplash.com/photo-1493673272479-a20888bcee10?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjB3YWxscGFwZXJ8ZW58MHx8MHx8fDA%3D)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
            Don't give up
            <strong className="block font-extrabold text-teal-600">
              of your green's.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Transform your living space into a lush, green oasis with our
            diverse selection of plants. Whether you're a seasoned gardener or
            just starting out, our store offers everything you need to bring
            nature indoors.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto shadow-sm"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow-sm hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
