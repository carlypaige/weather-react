import "./App.css";
import Form from "./Form";
import Overview from "./Overview";
import Fiveday from "./fiveDay";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Form />
        </div>
        <div>
          <Overview />
        </div>
        <div className="row">
          <Fiveday />
        </div>
        <a
          href="https://github.com/carlypaige/SheCodes-git-carly"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coded by Carly Paige
        </a>
      </div>
    </div>
  );
}
