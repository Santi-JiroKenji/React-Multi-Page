import React from "react";

const Header = () => {
    return (
    <>
        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                        <h2 className="display-5">
                            Online Payment Made <br/> Easy For You.
                        </h2>
                        <p className="main-hero-para">
                            Nisi consequat sit irure est ut. Fugiat est excepteur reprehenderit culpa magna id quis velit deserunt sunt deserunt fugiat irure elit. Fugiat dolore amet exercitation minim exercitation voluptate ullamco elit enim Lorem. Non fugiat minim qui labore proident ea.
                        </p>
                        <span>Got early access for you</span>
                        <div className="input-group mt-3">
                            <input type="text" className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter your email"></input>
                            <button className="btn input-group-button">
                                Get it now
                            </button>
                        </div>
                    </div>
                    {/* {------------- main header right side ---------------} */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                        <img src="https://images.unsplash.com/photo-1602803056945-ebac8ae8fd00?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid"/>
                        <img src="https://images.unsplash.com/photo-1586880244543-0528a802be97?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBob25lJTIwc2hvcHBpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="img-fluid main-hero-img2"/>
                    </div>
                </div>
            </section>
        </header>
    </>
    )
}

export default Header;