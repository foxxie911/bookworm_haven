import Wrapper from "../assets/wrappers/RegistrationAndLogin";
import { Link } from "react-router-dom";
import { FormRow, Logo } from "../components";

const Registration = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo></Logo>
        <h3>Register</h3>
        <p className="upper-info">Sign up to get started</p>
        <FormRow type='text' name='first-name' labelText='First Name'></FormRow>
        <FormRow type='text' name='last-name' labelText='Last Name'></FormRow>
        <FormRow type='text' name='address' labelText='Address'></FormRow>
        <FormRow type='text' name='username' labelText='Username'></FormRow>
        <FormRow type='mail' name='email' labelText='E-mail'></FormRow>
        <FormRow type='password' name='password' labelText='Password'></FormRow>
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Registration;
