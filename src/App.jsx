import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// import Home from "./pages/Home";
// import PageNotFound from "./pages/PageNotFound";
// import User from "./pages/User";
// import Login from "./pages/Login";
// import Detail from "./pages/Detail";
// import Join from "./pages/Join";
// import UpComingEvents from "./pages/UpComingEvents";
// import Construction from "./pages/Construction";
// import SearchResults from "./pages/SearchResults";

import { accountUsers } from "./constants";

const Home = React.lazy(() => import("./pages/Home"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));
const User = React.lazy(() => import("./pages/User"));
const Login = React.lazy(() => import("./pages/Login"));
const Detail = React.lazy(() => import("./pages/Detail"));
const Join = React.lazy(() => import("./pages/Join"));
const UpComingEvents = React.lazy(() => import("./pages/UpComingEvents"));
const Construction = React.lazy(() => import("./pages/Construction"));
const SearchResults = React.lazy(() => import("./pages/SearchResults"));

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="size-full grid place-items-center">
          <h2 className="inline-block mt-[300px]">Loading...</h2>
        </div>
      }
    >
      <Routes>
        <Route element={<Home />} path="/" />
        {accountUsers.map((user, idx) => (
          <Route key={idx} element={<User />} path={`/${user}/*`} />
        ))}
        <Route element={<Login />} path="/login" />
        <Route element={<Construction />} path="/return_to_site" />
        <Route element={<Detail />} path="/:type" />
        <Route element={<Join />} path="/join" />
        <Route element={<UpComingEvents />} path="/up_comings" />
        <Route element={<SearchResults />} path="/search" />
        <Route element={<PageNotFound />} path="*" />
      </Routes>
    </Suspense>
  );
};

export default App;
