import Wrapper from "../assets/wrappers/SmallSidebar";
import Logo from "./Logo";
// import links from "../utils/links";
import { useHomeContext } from "../pages/Home";
import { FaTimes } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useHomeContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className='content'>
          <button type='button' className='close-btn' onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
    // <div>SmallSidebar</div>
  );
};
export default SmallSidebar;
