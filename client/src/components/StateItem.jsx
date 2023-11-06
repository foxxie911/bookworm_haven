import Wrapper from "../assets/wrappers/StateItem";

const StateItem = ({ count, title, icon, color }) => {
  return (
    <Wrapper color={color}>
      <header>
        <span className='count'>{count}</span>
        <span className='icon'>{icon}</span>
      </header>
      <h5 className='title'>{title}</h5>
    </Wrapper>
  );
};
export default StateItem;
