import React from "react";
import Footer from "../components/Footer";
export default function HomePage() {
  return (
    <div>
      <h1>Home / Friend Page</h1>
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            Goal: Work out 5x/week
          </div>
          <div className="card-footer">
            Deadline: October 23, 2021
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="card-title">50 Milestones</div>
          <hr />
          <div className="card-title">Pure Gym</div>
          <div className="card-text">Worked out</div>
          <div className="card-text">Today at 2PM</div>

          <hr />
          <div className="card-title">Pure Gym</div>
          <div className="card-text">Worked out</div>
          <div className="card-text">Today at 2PM</div>
          <hr />
        </div>
      </div>
      <Footer />
    </div>
  );
}
