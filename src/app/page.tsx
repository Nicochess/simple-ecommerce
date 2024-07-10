import CallToAction from "@/components/CallToAction";
import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";

export default function Home() {
  return (
    <main>
      <Hero />

      <ProductSection />

      <CallToAction />

      <ProductSection />

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Enhance Your Home with Plants
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt=""
                src="https://media.architecturaldigest.com/photos/5dcde00380598800086215f6/16:9/w_2560%2Cc_limit/Osofsky_Oct19-5.jpg"
                className="absolute inset-0 h-full w-full object-cover rounded"
              />
            </div>

            <div className="lg:py-16">
              <article className="space-y-4 text-gray-600">
                <p>
                  Having plants at home offers numerous benefits. They improve
                  air quality by increasing oxygen levels and reducing
                  pollutants. Additionally, plants can reduce stress and enhance
                  well-being, creating a more tranquil and pleasant environment.
                  They can also improve air humidity, which is beneficial for
                  skin and respiratory health. Finally, taking care of plants
                  can be a therapeutic and rewarding activity.
                </p>

                <p>
                  Moreover, plants add a touch of nature and beauty to indoor
                  spaces, making them more inviting and aesthetically pleasing.
                  They can also boost creativity and productivity, making them
                  ideal for home offices or study areas.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
