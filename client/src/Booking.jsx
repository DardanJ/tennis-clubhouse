import "./App.css";
import { NavLink } from "react-router";

function Booking() {
  return (
    <>
      <section id="top">
        <div>
          <h1>Booking page</h1>
        </div>
        <NavLink to="/" end>
          <p>Home Page</p>
        </NavLink>
      </section>
    </>
  );
}

export default Booking;
