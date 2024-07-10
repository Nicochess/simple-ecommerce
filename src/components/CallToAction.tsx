import React from "react";

const CallToAction = () => {
  return (
    <section className="overflow-hidden bg-[url(https://images4.alphacoders.com/127/1276615.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="text-center ltr:sm:text-left rtl:sm:text-right flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Exotic Species
          </h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed text-left">
            Mushrooms are fungi found worldwide, essential for decomposing
            organic matter. They vary in shape, size, and color. Some, like
            shiitake and portobello, are prized for their flavor, while others
            can be toxic. Beyond culinary uses, mushrooms have medicinal
            applications and are studied for their potential health benefits.
          </p>

          <div className="mt-4 sm:mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-red-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Yours Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
