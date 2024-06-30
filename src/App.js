import CodeEditor from "./CodeEditor";
import "./App.css";

function App() {
  return (
    <>
      <div className="top">
        <div className="heading-container">
          <span className="heading-animation-left">
            <h1>Simple Co</h1>
          </span>
          <span className="heading-animation-right">
            <h1>de Editor</h1>
          </span>
        </div>
        <CodeEditor />
      </div>
    </>
  );
}

export default App;
