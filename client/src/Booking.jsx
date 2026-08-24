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

      <section id="next-steps">
        <div>
          <h2>Select Date</h2>
          <div>
            <strong>Court 1: </strong>
            <button>9:00am</button>
            <button>10:00am</button>
            <button>11:00am</button>
            <button>12:00pm</button>
            <button>1:00pm</button>
          </div>
        </div>
      </section>
      <section id="next-steps">
        <div>
          <h2>Select Date</h2>
          <div>
            <strong>Court 2: </strong>
            <button>9:00am</button>
            <button>10:00am</button>
            <button>11:00am</button>
            <button>12:00pm</button>
            <button>1:00pm</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Booking;
