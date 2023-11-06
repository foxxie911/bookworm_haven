import { FormRowLabel } from "../components";
import Wrapper from "../assets/wrappers/HomeFormPage";
import { useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({request}) => {
    const formData = await request.formData();

    try {
        await customFetch.patch("/user/update-user", formData);
        toast.success("Account updated");
        return null
    } catch (error) {
        toast.error(error?.response?.data?.msg);
        return error;
    }
}

const Profile = () => {
  const {user}  = useOutletContext();
  const { fname, lname, username, email, address} = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting"
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Profile</h4>
        <div className='form-center'>
          <FormRowLabel type='text' name='fname' defaultValue={fname} />
          <FormRowLabel type='text' name='lname' defaultValue={lname} />
          <FormRowLabel type='text' name='username' defaultValue={username} />
          <FormRowLabel type='email' name='email' defaultValue={email} />
          <FormRowLabel type='text' name='address' defaultValue={address} />
          <button className="btn btn-block form-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Profile;
