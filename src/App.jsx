import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import User from "./pages/User";
import Login from "./pages/Login";
import Detail from "./pages/Detail";
import Join from "./pages/Join";
import UpComingEvents from "./pages/UpComingEvents";
import Construction from "./pages/Construction";
import SearchResults from "./pages/SearchResults";

import { accountUsers } from "./constants";

const App = () => {
  return (
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
  );
};

export default App;
