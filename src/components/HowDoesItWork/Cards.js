import React from 'react'

const Cards = ({imgName, Heading}) => {
  return (
    <div className="container-fluid cards">
    <div className="row">
        <div className="col-12 text-center">
            <h1><i class={imgName}></i></h1>
        </div>
        <div className="col-12 text-center">
            <h4>{Heading}</h4>
        </div>
        <div className="col-12 text-justify">
            <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        </div>
    </div>
</div>
  )
}

export default Cards