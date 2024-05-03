import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))

    })

    return (
        <div className="mb-10">
            <div className="text-center space-y-3">
                <p className="text-[#FF3811] font-bold">Services</p>
                <p className="font-bold text-5xl">Our Service Area</p>
                <p className="">the majority have suffered alteration in some form, by injected humour, or randomised  <br />words which dont look even slightly believable. </p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;