import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <>
      <Header />
      <section className="h-[600px] font-lg text-center text-3xl mt-[80px]  w-full grid place-items-center">
        <div>
          <h2>Site still under construction!</h2>
          <Link className="text-[red] underline" to={"/"}>
            Return Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Construction;
