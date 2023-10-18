import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegistrationAndLogin";
import { FormRow, Logo } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo></Logo>
        <h3>Welcome!</h3>
        <p className="upper-info">Sign in to continue</p>
        <FormRow type='email' name='E-mail' ></FormRow>
        <FormRow type='password' name='Password'></FormRow>
        <button type='submit' className='btn btn-block'>
          Login
        </button>
        <p>
          Don't have an account?
          <Link to='/registration' className='member-btn'>
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
