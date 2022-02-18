import React from 'react'
import './BannerPage.scss'

const BannerPage = () => {
  return (
    <div className="BannerPage">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 ImageRow  text-center">
                    <img src="images/BannerTriangle.png" alt="BannerTriangle"/>
                </div>
                <div className="col-12 ContentRow text-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <h1>business</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <p>
                                “I declare this world is so beautiful that I can hardly believe it exists.” The beauty of nature can have a profound effect upon our senses, those gateways from the outer world to the inner, whether it results in disbelief...
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <h2><i class="fa-solid fa-caret-down"></i></h2>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default BannerPage