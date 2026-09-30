import React from "react";

const Service = () => {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-4xl font-light text-stone-900">
            We Provide You The Best Furnitures
          </h3>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Experience style and luxury with our sustainable raw materials and
            elegant finishes without taking a focused lot of time and resources.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-900">5K+</div>
            <div className="text-stone-600 text-sm">Happy customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-900">1000+</div>
            <div className="text-stone-600 text-sm">Recommendations</div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Living space"
                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=500"
                alt="Bedroom"
                className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="col-span-2 relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800"
                alt="Modern interior"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="Modern kitchen"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
