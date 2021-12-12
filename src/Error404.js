import React from 'react'
import {NavLink} from "react-router-dom"

const Error404 = () => {
    return (
    <>
    <section className="error-main-container">
    <div className="container error-container">
        <div className="col-12 col-lg-8 mx-auto">
            <div id="notfound" className="text-center">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>WE ARE SORRY, PAGE NOT FOUND!</h2>
                    <p>
                        THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVE HAD ITS NAME CHANGE OR IS TEMPORARILY UNAVAILABLE
                    </p>
                    <NavLink to="/">
                        <button className="btn btn-style w-auto btn-error">
                            Back To Homepage
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
    </section>    
    </>
    )
}

export default Error404
