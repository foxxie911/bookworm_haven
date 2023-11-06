import { redirect, useLoaderData } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
import { FiUsers } from "react-icons/fi";
import { ImBooks } from "react-icons/im";
import { StateItem } from "../components";

export const loader = async () => {
  try {
    const response = await customFetch.get("/user/admin/app-stats");
    return response;
  } catch (error) {
    toast.error("You are not authorized");
    return redirect("/home");
  }
};

const Admin = () => {
  const { data } = useLoaderData();
  const { userCount } = data;
  const { bookCount } = data;
  console.log({ userCount });
  return (
    <Wrapper>
      <StateItem
        title='current users'
        count={userCount}
        color='#e9b949'
        icon={<FiUsers />}
      />
      <StateItem
        title='total books'
        count={bookCount}
        color='#647acb'
        icon={<ImBooks />}
      />
    </Wrapper>
  );
};
export default Admin;
