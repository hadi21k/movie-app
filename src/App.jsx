import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Search from "./Pages/Search";
import Main from "./Pages/Main";
import UserList from "./Pages/UserList";
import { auth } from "./Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  const location = useLocation();

  if (user !== null && location.pathname === "/home") {
    return <Navigate to="/" />;
  }
  
  if (user === null && location.pathname === "/") {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar show={true} />
              <Main />
            </>
          }
        />
        <Route
          path="/home"
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
