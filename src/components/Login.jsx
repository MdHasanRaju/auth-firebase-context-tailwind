import  { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const login = () => { 
  const {signIn, signInWithGoogle} = useContext(AuthContext); 
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/login'

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value; 
    console.log(email, password);

    signIn(email, password)
    .then((result) => { 
      const loggedUser = result.user; 
      form.reset();
      navigate(from, { replace: true });
      console.log(loggedUser)
    })
    .catch((error) => { 
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
    .then(result => {
      const loggedUser = result.user;
      navigate(from, { replace: true });
      console.log(loggedUser)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label">
                <button onClick={handleGoogleLogin} className="btn btn-primary w-[100%]"> Sign with google</button> 
              </label>
            <label className="label">
               <Link to='/register'><button className="btn btn-active btn-link"> new to auth Vaiya? please register</button></Link>
              </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
