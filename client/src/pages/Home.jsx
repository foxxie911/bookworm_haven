import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Home";
import { createContext, useContext, useState } from "react";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

const HomeContext = createContext();

const Home = () => {
  //temp
  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log("Dark Mode.");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logout = async () => {
    console.log("Logged Out");
  };

  return (
    <HomeContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleSidebar,
        toggleDarkTheme,
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
              <Outlet />
            </div>
          </div>
          {/* <BigSidebar /> */}
        </main>
      </Wrapper>
    </HomeContext.Provider>
  );
};

export const useHomeContext = () => useContext(HomeContext);
export default Home;
