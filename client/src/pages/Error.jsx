import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/Error";
import error404 from "../assets/images/error404.svg";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={error404} alt='ERROR-404' />
        <h3>Error 404</h3>
        <p>Could not find the page you are looking for</p>
        <Link to='/home'>Back to home</Link>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Something went wrong</h3>
      <Link to='/'>Back to home</Link>
    </Wrapper>
  );
};
export default Error;
