import { Form, useNavigation, redirect } from "react-router-dom";
import Wrapper from "../assets/wrappers/HomeFormPage";
import { FormRowLabel, FormRowSelect } from "../components";
import { useOutletContext } from "react-router-dom";
import { BOOK_TYPE, GENRE } from "../../../server/utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/book", data);
    toast.success("Book added");
    return redirect("/home/addBook");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddBook = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add book</h4>
        <div className='form-center'>
          <FormRowLabel type='text' name='title' labelText='Book Title' />
          <FormRowLabel type='text' name='author' labelText='Author' />
          <FormRowSelect
            name='genre'
            labelText='Genre'
            list={Object.values(GENRE)}
            defaultValue={GENRE.NONFICTION}
          />
          <FormRowLabel
            type='text'
            name='publishingYear'
            labelText='Publishing Year'
          />
          <FormRowSelect
            name='bookType'
            labelText='Book type'
            list={Object.values(BOOK_TYPE)}
            defaultValue={BOOK_TYPE.PAPERBACK}
          />
          <FormRowLabel
            type='text'
            name='description'
            labelText='Description'
          />
          <button
            type='submit'
            className='btn btn-block form-btn'
            disabled={isSubmitting}
          >
            {isSubmitting ? "Adding..." : "Add"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddBook;
