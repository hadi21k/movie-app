import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Search from "./Pages/Search";
import Main from "./Pages/Main";
import UserList from "./Pages/UserList";

function App() {
  const signedIn = JSON.parse(localStorage.getItem("signedIn"));
  const location = useLocation();
  if (signedIn && location.pathname === "/") {
    return <Navigate to="/dashboard" />;
  }
  if (!signedIn && location.pathname === "/dashboard") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar show={true} />
              <Home />
            </>
          }
        />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route
          path="dashboard"
          element={
            <>
              <Navbar show={true} />
              <Main />
            </>
          }
        />
        <Route
          path="search"
          element={
            <>
              <Navbar show={true} search={true} />
              <Search />
            </>
          }
        />
        <Route
          path="mylist"
          element={
            <>
              <Navbar show={true} />
              <UserList />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
