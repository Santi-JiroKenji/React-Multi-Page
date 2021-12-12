import React, {useState} from 'react'
import howToUse from './API/howToUse.js';
import worldSupport from './API/worldSupport.js';

const Aboutus = () => {
    const [aboutData] = useState(howToUse);
    const [supportData, setSupportData] = useState(worldSupport);
    
    return (
    <>
    <section className="common-section our-services our-services-leftside">
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src="https://images.unsplash.com/photo-1599202875854-23b7cd490ff4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fHBheSUyMGJ5JTIwY2VkaXQlMjBjYXJkfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>

                {/*====== 1section right side data------ */}
                <div className="col-12 col-lg-7 our-services-list">
                    <h4 className="mini-title">
                        -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                    </h4>
                    <h1 className="main-heading">How to use the App?</h1>

                    {aboutData.map((curElem) => {
                        const {id, title, info} = curElem;
                        return (
                        <> 
                        <div className="row our-services-info" key={id}>
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-11 our-services-data">
                                <h4>{title}</h4>
                                <p className="main-hero-para">{info}</p>
                            </div>
                        </div>
                        </>
                        )
                    })}
                    <br/>
                    <button className="btn-style btn-style-border btn-aboutus">learn more</button>
                </div>
            </div>
        </div>
    </section>
    
    {/*------ 2nd part section ------- */}

    <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
            <div className="row">

                {/*====== 1section left side data------ */}
                <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                    <h4 className="mini-title">
                        -- SUPPORT IN ANY LANGUAGES
                    </h4>
                    <h1 className="main-heading">World class support is <br/> available 24/7</h1>

                    {supportData.map((curElem) => {
                        const {id, title, info} = curElem;
                        return (
                        <> 
                        <div className="row our-services-info" key={id}>
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-11 our-services-data">
                                <h4>{title}</h4>
                                <p className="main-hero-para part2">{info}</p>
                            </div>
                        </div>
                        </>
                        )
                    })}
                    <br/>
                    <button className="btn-style btn-style-border btn-aboutus">learn more</button>
                </div>
                <div className="col-12 col-lg-5 our-service-rightside-img">
                    <img src="https://images.unsplash.com/photo-1598257006463-7c64a5a538cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmUlMjBjYWxsfGVufDB8MXwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt=""/>
                </div>
            </div>
        </div>
    </section>
    </>
    )
}

export default Aboutus
