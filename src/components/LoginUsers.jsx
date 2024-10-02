import React from "react";
import { icon } from "../utils";
import { Link } from "react-router-dom";
import { bannerWave } from "../utils";
import { useNavigate } from "react-router-dom";

const LoginUsers = () => {
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

        <h2 className="font-[600] text-basis">
          <Link className="text-[red] underline" to={"/join"}>
            {" "}
            SIGN UP
          </Link>{" "}
          OR LOGIN TO GOSPEL TAKE OVER
        </h2>

        <div className="my-8 border-b-2 border-slate-700 pb-5">
          <button className="mx-4 hover:opacity-50 transition-all duration-[500]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#4285F4"></rect>
              <rect
                x="16.7998"
                y="16.8"
                width="26.4"
                height="26.4"
                rx="13.2"
                fill="white"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.9996 24.925C31.2386 24.925 32.3481 25.352 33.2231 26.185L35.6206 23.7875C34.1646 22.433 32.2641 21.6 29.9996 21.6C26.7166 21.6 23.8781 23.483 22.4956 26.227L25.2886 28.3935C25.9501 26.402 27.8086 24.925 29.9996 24.925Z"
                fill="#EA4335"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M38.043 30.1925C38.043 29.643 37.9905 29.111 37.91 28.6H30V31.757H34.529C34.326 32.793 33.738 33.675 32.856 34.27L35.5615 36.37C37.14 34.907 38.043 32.744 38.043 30.1925Z"
                fill="#4285F4"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.2851 31.6065C25.1171 31.099 25.0191 30.56 25.0191 30C25.0191 29.44 25.1136 28.901 25.2851 28.3935L22.4921 26.227C21.9216 27.361 21.5996 28.642 21.5996 30C21.5996 31.358 21.9216 32.639 22.4956 33.773L25.2851 31.6065Z"
                fill="#FBBC05"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.9997 38.4C32.2677 38.4 34.1752 37.6545 35.5612 36.3665L32.8557 34.2665C32.1032 34.774 31.1337 35.0715 29.9997 35.0715C27.8087 35.0715 25.9502 33.5945 25.2852 31.603L22.4922 33.7695C23.8782 36.517 26.7167 38.4 29.9997 38.4Z"
                fill="#34A853"
              ></path>
            </svg>
          </button>

          <button className="mx-4 hover:opacity-50 transition-all duration-[500]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="#4267B2"></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M32.5108 16.8C28.8891 16.8 26.5479 19.2345 26.5479 23.0018V25.8617H23.3061C23.0271 25.8617 22.7998 26.0908 22.7998 26.3749V30.5188C22.7998 30.8016 23.0271 31.032 23.3061 31.032H26.5479V41.4868C26.5479 41.7696 26.7752 42 27.0554 42H31.2833C31.5639 42 31.7908 41.7696 31.7908 41.4868V31.032H35.5806C35.8612 31.032 36.0872 30.8016 36.0872 30.5188L36.0898 26.3749C36.0898 26.2393 36.0355 26.1088 35.9408 26.0115C35.8461 25.9155 35.7171 25.8617 35.5819 25.8617H31.7908V23.4374C31.7908 22.2724 32.065 21.6809 33.5614 21.6809L35.7336 21.6795C36.0138 21.6795 36.2398 21.4492 36.2398 21.1664V17.3197C36.2398 17.0353 36.0138 16.8062 35.7348 16.8049L32.5108 16.8Z"
                fill="white"
              ></path>
            </svg>
          </button>

          <button className="mx-4 hover:opacity-50 transition-all duration-[500]">
            <svg
              width="50"
              height="50"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="60" height="60" rx="30" fill="white"></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.5047 20.6296C32.6961 21.6061 31.3381 22.3384 30.2549 22.3384C30.1328 22.3384 30.0107 22.3232 29.9345 22.3079C29.9192 22.2469 29.8887 22.0638 29.8887 21.8807C29.8887 20.6296 30.5142 19.409 31.2008 18.6309C32.0705 17.6086 33.52 16.8458 34.7253 16.8C34.7558 16.9373 34.7711 17.1051 34.7711 17.273C34.7711 18.5088 34.2371 19.7447 33.5047 20.6296ZM28.1986 40.3451C27.6549 40.5787 27.1396 40.8 26.4405 40.8C24.9453 40.8 23.9078 39.4268 22.7177 37.7485C21.3292 35.765 20.2002 32.6983 20.2002 29.7994C20.2002 25.1306 23.2364 22.6589 26.2269 22.6589C27.0997 22.6589 27.8973 22.9789 28.6064 23.2635C29.1741 23.4913 29.6851 23.6964 30.1328 23.6964C30.5211 23.6964 31.0051 23.5051 31.5691 23.2822C32.357 22.9709 33.301 22.5978 34.3591 22.5978C35.0305 22.5978 37.4869 22.6589 39.1042 24.978C39.0949 24.9852 39.0752 24.9983 39.0464 25.0173C38.6484 25.28 36.5257 26.6813 36.5257 29.5552C36.5257 33.1102 39.623 34.3766 39.7298 34.4071C39.727 34.414 39.7207 34.4335 39.7106 34.4646C39.6088 34.7798 39.1234 36.282 38.0819 37.8095C37.0597 39.2742 35.9764 40.7695 34.3591 40.7695C33.562 40.7695 33.0541 40.5445 32.5297 40.3123C31.97 40.0644 31.3915 39.8083 30.4227 39.8083C29.4487 39.8083 28.8059 40.0843 28.1986 40.3451Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>

        <form action="" onSubmit={submitLoginHandler} className="text-left">
          <label className="block font-[600] mb-1" htmlFor="email">
            Email
          </label>
          <input
            className="block p-4 w-full font-[600] bg-[#222] rounded-md"
            type="email"
            name="email"
            id=""
            required
            placeholder="Enter your email"
          />

          <button
            className="btnEffect block mx-auto px-7 py-4 font-[600] mt-5 mb-6 rounded-[70px]"
            type="submit"
          >
            Continue
          </button>
        </form>

        <p className="text-sm font-bold">
          By signing into Gospel Take Over you agree to our{" "}
          <Link className="text-[red]">Terms of service</Link> and{" "}
          <Link className="text-[red]">Privacy Policy.</Link>
        </p>

        <p className="text-sm font-bold my-5">
          <Link className="text-[red]">Having trouble signing in?</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginUsers;
