import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const About = () => {
    return (
        <div className="hero mt-20 mb-32 ">
            <div className="flex justify-between flex-col lg:flex-row m-4">
                <div className="lg:w-1/2 relative mb-10 ">
                    <img src={person} className="w-3/4  rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg  border-8 border-white" />
                </div>
                <div className="lg:w-1/2 space-y-4 ">
                    <p className="text-[#FF3811] font-bold">About Us</p>
                    <h1 className="text-5xl font-bold w-1/2">We are qualified & of experience in this field</h1>
                    <p className="w-2/3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="w-2/3">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
                    </p>
                    <button className="btn btn-primary bg-[#FF3811] border-[#FF3811] font-bold">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;