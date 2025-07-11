import React from "react";
import { appDevelopmentServices, webDevelopmentServices } from "../../constant";

const LandingServices = ({ page }) => {
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;
  return (
    <div
      id="services"
      className="flex justify-center  relative"
      style={{
        backgroundImage: `url(${require("../../assets/images/pattern1.png")})`,
      }}
    >
      <div className="bg-backgroundcolor/85 absolute inset-0 h-full w-full" />

      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-primarytextcolor">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Our {page === "web-development" ? "Web" : "App"} Development Services
        </div>
        <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
          {/* We provide the Best IT solution services */}
          {page === "web-development" &&
            "High-Quality AI-Enhanced Web Development to Transform Your Online Identity"}
          {page === "app-development" &&
            "Cutting-Edge AI-Powered App Development Services for Intelligent Mobile Solutions"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl desc">
          {page === "web-development" &&
            "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."}
          {page === "app-development" &&
            "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => {
            const isLastItem = item.id === services.length;
            const isLastItemOdd = isLastItem && item.id % 2 !== 0;

            return (
              <div
                key={item.id}
                className={`${
                  isLastItemOdd && "sm:col-span-2 sm:w-1/2"
                } mx-auto shadow-2xl transition-all  bg-primary/15 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg`}
              >
                <div className="   group rounded-lg bg-backgro-gradient  hover:scale-105 shadow-2xl hover:shadow-primary/10 p-[1px] transition-all h-full duration-500 overflow-hidden">
                  <div className="rounded-lg bg-white hover:bg-custom-gradient p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                          {/* <BiBrain className="w-6 h-6" /> */}
                          {item.img}
                        </div>
                      </div>
                      <h5 className="font-semibold text-2xl font-raleway transition-colors duration-300 text-primary">
                        {item.title}
                      </h5>
                      <p className="desc text-primarytextcolor">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
