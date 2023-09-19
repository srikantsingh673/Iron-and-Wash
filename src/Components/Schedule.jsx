import React from "react";
import { useNavigate } from "react-router-dom"


export default function App() {
  const navigate = useNavigate();
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    
    fetch(
      "https://script.google.com/macros/s/AKfycbxp9oWgoCapTdCxqssNb4KSavYRWlPDEiOfp1H7CvzTObAtaR0zLDSWh719DmtuPciGSg/exec",

      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate("/result");
      
  }
  return (
    <div className='App'>
      <div className='form-face'>
        <h3 className='title'><strong>Schedule Pickup Now</strong></h3><br />
        <p className='header'></p><br />
        <div>
          <form className="form" onSubmit={(e) => Submit(e)}>
            <div className='form-starter'>
              <div className="label-select">
                <label>Your Name</label><br />
                <input className='label' placeholder="Name" name="Name" type="text" required />
              </div>
              <div className="label-select">
                <label>Mobile Number</label><br />
                <input className='label' placeholder="Mobile Number" name="Mobile_Number" type="number" required />
              </div>
              <div className="label-select">
                <label>Address</label><br />
                <input className='label' placeholder="Address" name="Address" type="text" required />
              </div>
              <div className="label-select">
                <label for="cars">Service Type</label><br />
                <select name="Service_type" required>
                  <option className='label-option' value="Per KG"> Per KG </option>
                </select><br /><br />
              </div>
              <div className="label-select">
                <label for="cars">Service</label><br />
                <select name="Service" required>
                  <option className='label-option' value="Wash & Iron"> Wash & Iron </option>
                  <option className='label-option' value="Wash Only"> Wash Only </option>
                  <option className='label-option' value="Dry Clean"> Dry Clean </option>
                  <option className='label-option' value="Shoe Cleaning"> Shoe Cleaning </option>
                </select><br /><br />
              </div>
              <div className="label-select">
                <label>No. of Items</label><br />
                <input className='label' placeholder="Count" name="Count" type="number" required />
              </div>
              <div className="label-select">
                <label for="cars">Pickup time</label><br />
                <select name="Pickup_time" required>
                  <option className='label-option' value="8:00AM - 12:00PM">8:00AM - 12:00PM</option>
                  <option className='label-option' value="12:00PM - 4:00PM">12:00PM - 4:00PM</option>
                  <option className='label-option' value="4:00PM - 8:00PM">4:00PM - 8:00PM</option>
                  <option className='label-option' value="8:00PM - 11:00PM">8:00PM - 11:00PM</option>
                </select><br /><br />
                <div className="label-select">
                  <label>Date</label><br />
                  <input className='label-date' type="Date" id="Date" name="Date" required />
                </div><br />
              </div>
              <div className="label-select">
                <label>Any Note</label><br />
                <input className='label-note' placeholder="Note" name="Note" type="text" />
              </div><br />
              <input className='sch-button' type="submit" />
            </div>
          </form>
        </div>
      </div><br /><br/><br/>
    </div>
  );
}

