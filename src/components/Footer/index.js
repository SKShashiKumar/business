
import React, { useState } from "react";
import './Footer.scss'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Footer = () => {

  const [startDate, setStartDate] = useState(new Date());


  return (
    <div className="Footer">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                    <h6>Email</h6>
                    <div class="mb-3">
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter a valid Email Address'/>
                    </div>
                </div>
                <div className="col-12">
                    <h6>Name</h6>
                    <div class="mb-4">
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Name'/>
                    </div>
                </div>
                <div className="col-12">
                <div class="mb-4">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Item</option>
                    <option value="1">Item1</option>
                    <option value="2">Item2</option>
                    <option value="3">Item3</option>
                  </select>
                  </div>
                </div>
                </div>
                <div className="row">
                <div className="col-6">
                    <h6 className="pb-2">Date</h6>
                    <div class="mb-3">
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="col-12"/>
                    </div>
                </div>
                <div className="col-6">
                    <h6>phone</h6>
                    <div class="mb-4">
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your phone (+91 9876543210)'/>
                    </div>
                </div>
                <div className="col-12">
                <div class="mb-3">
                  <h6>Message</h6>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your Message"></textarea>
                </div>
                </div>
                <div className="col-4">
                  <button>Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 SecondCol">
            <p>
            Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;