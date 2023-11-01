import { Link, Form, useNavigation, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegistrationAndLogin";
import { FormRow, Logo } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// Login Action
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/home");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

// Login View
const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo></Logo>
        <h3>Welcome!</h3>
        <p className='upper-info'>Sign in to continue</p>
        <FormRow type='text' name='username' labelText='Username'></FormRow>
        <FormRow type='password' name='password' labelText='Password'></FormRow>
        <button type='submit' className='btn btn-block' disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
        <p>
          Don't have an account?
          <Link to='/registration' className='member-btn'>
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
