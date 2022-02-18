import React from 'react'
import Cards from './Cards'
import './HowDoesItWork.scss'

const HowDoesItWork = () => {
  return (
    <div className="HowDoesItWork">
        <div className="container-fluid">
            <div className="row text-center">
                <div className="col-12 MainHeading">
                    <h1>How Does It Work</h1>
                </div>
            </div>
            <div className="row justify-content-center align-items-center MainCards">
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <Cards imgName={"fa-solid fa-mobile-screen-button"} Heading={"STEP 1"}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 ArrowImg text-center">
                    <img src="images/Arrow.PNG" alt="Arrow" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <Cards imgName={"fa-solid fa-user"} Heading={"STEP 1"}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 ArrowImg text-center">
                    <img src="images/Arrow.PNG" alt="Arrow" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                    <Cards imgName={"fa-solid fa-list-check"} Heading={"STEP 1"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowDoesItWork