import React from "react";

const Banner = () => {
  return (
    <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?cs=srgb&dl=pexels-cottonbro-5858235.jpg&fm=jpg"
        className="absolute inset-0 h-full w-full object-cover opacity-40 bg-left"
      />

      <div className="hidden lg:relative lg:block lg:p-12">
        <a className="block text-white" href="#">
          <span className="sr-only">Home</span>
        </a>

        <h2 className="flex gap-4 items-center mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          Green Haven
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
          Discover a wide variety of indoor and outdoor plants at Green Haven,
          your ultimate destination for all things green. Whether you're looking
          to brighten up your home with vibrant houseplants or find unique
          succulents and cacti, we've got you covered. Our user-friendly online
          store offers detailed plant care tips, ensuring your new green friends
          thrive.
        </p>
      </div>
    </section>
  );
};

export default Banner;
