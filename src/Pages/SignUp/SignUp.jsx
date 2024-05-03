import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const SignUp = () => {

    const {createUser} =useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name ,email, password);

        createUser(email ,password )
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=> console.log(error));
    }
    return (
        <div className="hero mt-32 mb-32">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2 mr-12">
                    <img src={login} alt="" />

                </div>
                <div className="card pb-10 shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">

                            <input className="btn btn-primary" type="submit" value="Sign Up " />
                        </div>
                    </form>
                    <p className=" text-center font-bold">Already Have Account? <Link className="text-orange-500" to="/login">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;