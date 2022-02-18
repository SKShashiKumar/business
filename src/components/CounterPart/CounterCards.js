import React from 'react'

const CounterCards = ({Heading,SubHeading,Desc}) => {
  return (
    <div className="container-fluid CounterCards">
        <div className="row">
            <div className="col-12">
                <h1>{Heading}</h1>
            </div>
            <div className="col-12 SubHeading">
                <p>{SubHeading}</p>
            </div>
            <div className="col-12 Desc">
                <p>{Desc}</p>
            </div>
        </div>
    </div>
  )
}

export default CounterCards