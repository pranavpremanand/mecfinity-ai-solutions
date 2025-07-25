import React from "react";
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { companyDetails, logofooter, routes } from "../../constant";
import { Link } from "react-router-dom";

const WebsiteFooter = () => {
  return (
    <div className="py-14 bg-[#e2f5fb]">
      <div className="wrapper text-black">
        <div className="flex md:flex-row flex-col justify-between gap-10">
          <div className="flex flex-col items-center">
            <img loading="lazy" src={logofooter} className="h-[8rem]" alt="" />
            <p className="desc md:max-w-[15rem] text-sm text-center mt-5">
              We have rapidly grown into a trusted partner for organizations
              seeking digital transformation, enhanced operational efficiency.
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Quick Links</h6>
              {routes.map(({ name, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="text-black desc text-sm hover:text-primary transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="font-medium mb-1">Contact Us</h6>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Phone</h6>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="text-black desc text-sm"
                >
                  {companyDetails.phone}
                </Link>
              </div>
              <div className="flex flex-col">
                <h6 className="text-[.9rem] mb-1">Email</h6>
                <Link className="text-black desc text-sm">
                  {companyDetails.email}
                </Link>
              </div>
              <div className="flex flex-col mt-2">
                <h6 className="text-[.9rem] mb-1">Office Address</h6>
                <p className="text-black desc text-sm max-w-[15rem]">
                  {companyDetails.address}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 mt-7 border-t text-gray-500 border-primary w-full">
          <div className="flex justify-center gap-5 w-full">
            <div className="flex gap-5 items-center mt-5">
              <Link>
                <BsFacebook className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
              <Link>
                <BsTwitter className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
              <Link to={companyDetails.linkedin} target="_blank">
                <BsLinkedin className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
              <Link to={companyDetails.instagram} target="_blank">
                <BsInstagram className="text-xl text-black hover:text-primary transition-all duration-300" />
              </Link>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-3 mt-5 text-sm text-black text-center">
            <p>© 2025 EventPro. All rights reserved.</p>
            <span>|</span>
            <Link
              to="/terms-and-conditions"
              className="hover:text-primary transition-all duration-300"
            >
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-all duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteFooter;
