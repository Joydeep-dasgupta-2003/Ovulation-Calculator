import "./App.css";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Moment from "react-moment";

function App() {
  const [value, setValue] = useState(new Date());
  const [cycle, setCycle] = useState("28");

  useEffect(() => {
    setCycle(parseInt(cycle, 10));
  }, [cycle]);

  return (
    <div className="bg">
      <div className="text-center">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="./">
              <img src='https://cdn-icons-png.flaticon.com/512/8800/8800309.png' alt="Logo" /> OvulMap
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link" aria-current="page" href="./">Home</a>
                <a className="nav-link" href=" " data-bs-toggle="modal" data-bs-target="#exampleModal">About</a>
                <a className="nav-link" href="https://joydeep-dasgupta-2003.github.io/portfolio.github.io/">Portfolio</a>
              </div>
            </div>
          </div>
        </nav>

        <label htmlFor="cycle"><p className="para2">Select your Cycle Length :</p></label>
        <select onChange={(e) => setCycle(e.target.value)} defaultValue={cycle} className="m-2">
          {[...Array(18).keys()].map(i => (
            <option key={i + 28} value={i + 28}>{i + 28}</option>
          ))}
        </select>
      </div>

      <p className="text-center para">
        Select Your Last Period Start Date from the Calendar:
      </p>

      <div className="d-flex justify-content-center">
        <Calendar onChange={setValue} value={value} className="calendar mt-0" />
      </div>

      <div className="container">
        <div className="cal row d-flex justify-content-center">
          <div className="col-sm-2">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Next Period</h5>
                <p className="card-text">
                  <Moment format="Do MMMM YYYY" add={{ days: cycle }}>
                    {value}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="card h-100">
              <div className="card-body text-center">
                <h5 className="card-title">Approximate Ovulation Day</h5>
                <p className="card-text">
                  <Moment format="Do MMMM YYYY" add={{ days: cycle - 1 - 13 }}>
                    {value}
                  </Moment>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="bottom-info">This website was made by Joy using React JS and Bootstrap CSS</p>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">About</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Welcome to our Period and Ovulation Calculator website! Our mission is to empower women with accurate and reliable information about their menstrual cycle. By providing a user-friendly tool to calculate periods and ovulation dates, we aim to help you better understand your body and plan ahead with confidence. Whether you're tracking your cycle for personal health, family planning, or just staying informed, our website is here to support you every step of the way.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
