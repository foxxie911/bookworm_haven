import Wrapper from "../assets/wrappers/Navbar";
import { Logo } from "../components";
import { FiMenu } from "react-icons/fi";
import { useHomeContext } from "../pages/Home";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  const { toggleSidebar } = useHomeContext();
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggleSidebar}>
          <FiMenu />
        </button>
        <div>
          <Logo />
          {/* <h4 className='logo-text'>Home</h4> */}
        </div>
        <div className='btn-container'>
          <NavbarRight />
        </div>
      </div>
    </Wrapper>
    // <div>Navbar</div>
  );
};
export default Navbar;
