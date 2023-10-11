import { useState } from "react";
import bookwormLogo from "./assets/favicon.ico";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={bookwormLogo} class='logo' alt='Bookworm Haven Logo' />
      </div>
      <h1>Bookworm Haven</h1>
      <p>This is an online bookstore</p>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
