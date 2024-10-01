import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const UpComingEvents = () => {
  return (
    <>
      <Header />
      <section className="h-[600px] font-lg text-3xl mt-[80px]  w-full grid place-items-center">
        <div>
          <h2>No upcoming events</h2>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default UpComingEvents;
