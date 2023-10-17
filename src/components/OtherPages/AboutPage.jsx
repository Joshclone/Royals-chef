import React from "react";
import Navbar from "../Navbar";
import about3 from "../../assets/about3.jpg";
import about5 from "../../assets/about5.jpg";
import Services from "../Services";

const AboutPage = () => {
  return (
    <main className=" mt-28 px-4 md:px-16">
      <div>
        <h1 className="text-center text-4xl text-[#6C4B3F]">About Us</h1>
        <p className="text-center text-[#6C4B3F] mt-5">
          Josh....Welcomes you to the Royals château . This is le petit château.
          Elegant & sophisticated restaurant template. Royal plate offers
          different home page layouts with smart and unique design, showcasing
          beautifully designed elements every restaurant website should have.
          Smooth animations, fast loading and engaging user experience are just
          some of the features this template offers. So, give it a try and dive
          into a world of royal restaurant websites.
        </p>
        <h1 className="text-center text-4xl mt-10 text-[#6C4B3F]">Our Story</h1>
      </div>
      <div className="mt-6  relative ">
        <img
          src={about3}
          alt=""
          className="h-[500px] w-full object-cover rounded-[14px]"
        />

        <div className="bg-white  absolute w-[80%] mx-auto left-[10%] -bottom-16 md:-bottom-20 md:py-10 rounded-xl border-t-4 border-t-[#f2bc57] ">
          <p className="text-center px-10 py-8">
            We are more than multiple services. Food is one of the basic
            necessities of life. We are more than multiple services which serve
            the best foods and drinks. We provide the best and healthiest foods
            with great taste.
          </p>
        </div>
      </div>
      <div className="mt-40">
        <h1 className="text-center text-4xl text-[#6C4B3F]">Our Mission</h1>
      </div>
      <div className="mt-6  relative ">
        <img
          src={about5}
          alt=""
          className="rounded-[14px] h-[500px] w-full object-cover"
        />

        <div className="bg-white  absolute w-[80%] mx-auto left-[10%] -bottom-16 md:-bottom-20 md:py-10 rounded-xl border-t-4 border-t-[#f2bc57] ">
          <p className="text-center px-10 py-8">
            Eating out socially has turned into a religion . A growing number of
            fast-food and fast-casual venues deliver, but not as us, the Royals
            the most authentic and versatile flavors for any taste and
            preference you crave for. Moreover, traditional restaurants are on
            trend for people who look for high-quality service and catering.
            Eating out is not just about food, but also an opportunity to
            explore new places come dine with us today, your life would never
            remain the same.
          </p>
        </div>
      </div>
      <div className="mt-40">
        <h1 className="text-center text-4xl text-[#6C4B3F]">Why Choose Us</h1>
      </div>
      <Services />
    </main>
  );
};

export default AboutPage;
