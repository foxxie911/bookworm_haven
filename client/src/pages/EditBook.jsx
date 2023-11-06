import { FormRowLabel, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/HomeFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import { BOOK_TYPE, GENRE } from "../../../server/utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/book/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect("/home");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/book/${params.id}`, data);
    toast.success("Book updated");
    return redirect("/home");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditBook = () => {
  const { book } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Edit Book</h4>
        <div className='form-center'>
          <FormRowLabel
            type='text'
            name='title'
            labelText='Book Title'
            defaultValue={book.title}
          />
          <FormRowLabel
            type='text'
            name='author'
            labelText='Author'
            defaultValue={book.author}
          />
          <FormRowSelect
            name='genre'
            labelText='Genre'
            list={Object.values(GENRE)}
            defaultValue={book.genre}
          />
          <FormRowLabel
            type='text'
            name='publishingYear'
            labelText='Publishing Year'
            defaultValue={book.publishingYear}
          />
          <FormRowSelect
            name='bookType'
            labelText='Book type'
            list={Object.values(BOOK_TYPE)}
            defaultValue={book.bookType}
          />
          <FormRowLabel
            type='text'
            name='description'
            labelText='Description'
            defaultValue={book.description}
          />
          <button
            type='submit'
            className='btn btn-block form-btn'
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditBook;