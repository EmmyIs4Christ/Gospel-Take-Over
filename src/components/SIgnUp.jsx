import React from "react";
import { icon } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { bannerWave } from "../utils";

const SIgnUp = () => {
  const navigate = useNavigate();

  const submitLoginHandler = (event) => {
    event.preventDefault();
    navigate("/return_to_site");
  };
  return (
    <div
      className="py-5 w-full bg-repeat-x"
      style={{ backgroundImage: `url(${bannerWave})` }}
    >
      <div className="mt-[120px] w-[95%] max-w-[450px] mx-auto py-[48px] px-[32px] text-center bg-[#121212]">
        <div className="logoContainer size-[50px]">
          <img
            className="object-center object-contain"
            src={icon}
            alt="logo image"
          />
        </div>

        <h2 className="font-[600] text-basis">Join Us Today!</h2>
        <small className="opacity-90 ">
          Looks like you haven’t signed up yet.
        </small>

        <form
          onSubmit={submitLoginHandler}
          className="mt-7 text-left"
          action=""
        >
          <label className="block font-[600] mb-1" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="block mb-6 p-4 w-full font-[600] bg-[#222] rounded-md  invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter your email"
          />

          <label className="block font-[600] mb-1" htmlFor="username">
            Choose a Username <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="username"
            required
            placeholder="Username"
            className="block mb-6 p-4 w-full font-[600] bg-[#222] rounded-md  invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />

          <label className="block font-[600] mb-1" htmlFor="password">
            Create a Password <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Password"
            required
            type="password"
            className="block mb-6 p-4 w-full font-[600] bg-[#222] rounded-md  invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
          />

          <p className="text-sm my-6 font-bold">
            By signing into Gospel Take Over you agree to our{" "}
            <Link className="text-[red]">Terms of service</Link> and{" "}
            <Link className="text-[red]">Privacy Policy.</Link>
          </p>

          <input
            id="agree"
            className="peer/draft mr-2"
            type="radio"
            name="status"
            required
          />
          <label htmlFor="draft" className="peer-checked/draft:text-sky-500">
            I Agree.
          </label>

          <button
            className="btnEffect block mx-auto px-7 py-4 font-[600] mt-5 mb-6 rounded-[70px]"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SIgnUp;
