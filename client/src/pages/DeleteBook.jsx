import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { redirect } from "react-router-dom";

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/book/${params.id}`);
    toast.success("Delete complete");
    return redirect("/home");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
