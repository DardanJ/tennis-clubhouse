import "./App.css";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";
import useFetch from "./fetch";

function Booking() {
  const { data: data1 } = useFetch("http://localhost:5112/health");
  const { data: data2 } = useFetch("http://localhost:5112/test");

  return (
    <>
      <div>{data1.message}</div>
      <div>{data2.message}</div>

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
      <section>
        <div></div>
      </section>
    </>
  );
}

export default Booking;
