import React from 'react'
import CounterCards from './CounterCards'
import './CounterPart.scss'

const CounterPart = () => {
  return (
    <div className="CounterPart">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>About Us and Our Work</h1>
                </div>
                <div className="col-xs-10 col-sm-10 col-md-6 col-lg-6 col-xl-6">
                    <p>We provide expert Business Coaching to both individuals and businesses. With over 30 years of experience we’ll ensure that you’re always getting the best guidance from the top people in the entire industry.</p>
                </div>
                <div className="col-12">
                    <div className="container-fluid text-center">
                        <div className="row g-5">
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <CounterCards Heading={'236'} SubHeading={'CUPS OF COFFEE'} Desc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <CounterCards Heading={'17'} SubHeading={'AWARDS WON'} Desc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <CounterCards Heading={'108'} SubHeading={'HAPPY CLIENTS'} Desc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
                                <CounterCards Heading={'150'} SubHeading={'PROJECTS FINISHED'} Desc={'Sample text. Click to select the text box. Click again or double click to start editing the text.'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CounterPart