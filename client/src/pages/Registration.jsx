import Wrapper from "../assets/wrappers/RegistrationAndLogin";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

//Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// Actual Page
const Registration = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo></Logo>
        <h3>Register</h3>
        <p className='upper-info'>Sign up to get started</p>
        <FormRow type='text' name='fname' labelText='First Name'></FormRow>
        <FormRow type='text' name='lname' labelText='Last Name'></FormRow>
        <FormRow type='text' name='address' labelText='Address'></FormRow>
        <FormRow type='text' name='username' labelText='Username'></FormRow>
        <FormRow type='mail' name='email' labelText='E-mail'></FormRow>
        <FormRow type='password' name='password' labelText='Password'></FormRow>
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Registration;
