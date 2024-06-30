import React, { useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx";
import "./App.css";

const CodeEditor = () => {
  const [code, setCode] = useState(
    `import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
            <h1>Hello world</h1>
            <div className="container">
                <p>Aman</p>
            </div>
        );
    }

ReactDOM.render(<App />, document.getElementById("root"));`
);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div className="editor-container">
      <pre className="code-output">
        <code
          className="language-jsx"
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(code, Prism.languages.jsx, "jsx"),
          }}
        />
      </pre>
      <textarea
        className="code-input"
        value={code}
        onChange={handleChange}
        spellCheck="false"
      />
    </div>
  );
};

export default CodeEditor;
