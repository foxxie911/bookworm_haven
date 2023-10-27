import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import { useHomeContext } from "../pages/Home";

const BigSidebar = () => {
  const { showSidebar, user } = useHomeContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className='content'>
          <header>
          </header>
          <Navlinks isBigSidebar/> 
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
