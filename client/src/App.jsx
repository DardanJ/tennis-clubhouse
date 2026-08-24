import { useState } from "react";
import "./App.css";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
      </div>
      <NavLink to="/booking" end>
        <p>Booking</p>
      </NavLink>
    </>
  );
}

export default App;
