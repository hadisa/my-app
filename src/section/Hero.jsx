import React from "react";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="flex my-auto items-center min-h-screen pt-16">
      <div className="mx-auto items-center max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-8 w-full ">

          <div className="flex flex-col gap-5">
            <h1 className="text-5xl font-medium text-amber-800">
              Modern Interior
            </h1>
            <h1 className="text-5xl font-bold text-amber-800">
              Design Service
            </h1>
            <p className="max-w-md text-stone-700 ">
              {" "}
              Modernism is an acclaimed professional interior design
              specializing interior architecture, interior design, and
              decorating modern and timeless interiors.
            </p>
            <div className="flex flex-row gap-5">
              <Button
                text="View Our Work"
                css="bg-amber-800 text-white  hover:bg-amber-900 "
              />
              <Button
                text="Learn More"
                css="bg-white text-amber-800 border border-amber-800  hover:text-stone-700 "
              />
            </div>

            <div className="flex flex-row justify-between max-w-md">
              <span>
                24 <br /> Years of experience{" "}
              </span>

              <span>
                162 <br /> Projects completed
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col gap-5">
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="rounded-lg h-48 object-cover  " />
              <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="rounded-lg h-64 object-cover  " />
            </div>

            <div className="flex flex-col gap-5 pt-10">
              <img src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="rounded-lg h-64 object-cover  " />
              <img src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className="rounded-lg h-48 object-cover  " />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
