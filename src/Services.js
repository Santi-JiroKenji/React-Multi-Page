import React, {useState} from 'react'
import serviceApi from './API/serviceApi'

const Services = () => {
    const [serviceData, setServiceData] = useState(serviceApi);

    return (
    <>
    <section className="services-main-container">
        <div className="container services-container">
            <h1 className="main-heading text-center fw-bold">How to send money</h1>
            <div className="row">
                {serviceData.map((curElem) => {
                    const {id, logo, title, info} = curElem;
                    return (
                    <>
                    <div className="col-11 col-lg-4 col-xxl-4 work-container-sub" key={id}>
                        <i className={`fontawesome-style ${logo}`}></i>
                        <h4 className="sub-heading">{title}</h4>
                        <p className="main-hero-para">{info}</p>
                    </div>
                    </>
                    )
                })}
            </div>
        </div>
    </section>        
    </>
    )
}

export default Services
