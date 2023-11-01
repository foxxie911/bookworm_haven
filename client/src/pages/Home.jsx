import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Home";
import { createContext, useContext, useState } from "react";
import { BigSidebar, Navbar, SmallSidebar } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/user/current-user");
    return data;
  } catch (error) {
    return redirect("/login");
  }
};

const HomeContext = createContext();

const Home = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logout = async () => {
    navigate("/home");
    await customFetch.get("/auth/logout");
    toast.success("Logging out");
  };

  return (
    <HomeContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        logout,
      }}
    >
      <Wrapper>
        <main className='home'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='home-page'>
              <Outlet context={{user}} />
            </div>
          </div>
        </main>
      </Wrapper>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default Home;
