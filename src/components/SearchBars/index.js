import React from 'react'
import './SearchBars.scss'

const SearchBars = () => {
  return (
    <div className="container-fluid MainSearchBar">
        <div className="row searchRow justify-content-end">
            <div className="col-xs-8 col-sm-5 col-md-4 col-lg-3 col-xl-3">
                <div className="input-group">
                    <input type="text" className="form-control searchBar" placeholder='Search'/>
                    <span className="input-group-text"><i className="fa-solid fa-magnifying-glass" role={'button'}></i></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBars