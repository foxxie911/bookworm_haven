import { toast } from "react-toastify";
import { BookContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async () => {
  try {
    const books = await customFetch.get("/book");
    return books;
  } catch (error) {}
  toast.error(error?.response?.data?.msg);
  return error;
};

const allBookContext = createContext();

const GetAllBooks = () => {
  const  {data}  = useLoaderData();
  // console.log(data);
  return (
    <allBookContext.Provider value={{data}}>
      {/* <SearchContainer /> */}
      <BookContainer />
    </allBookContext.Provider>
  );
};

export const useAllBookContext = () => useContext(allBookContext);
export default GetAllBooks;
