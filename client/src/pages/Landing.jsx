import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Landing";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
      </nav>
    </Wrapper>
  );
};

export default Landing;
