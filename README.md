# Code Editor with Syntax Highlighting

This project is a simple code editor with syntax highlighting using React, Prism.js. The editor supports JSX syntax highlighting and uses a dark theme from Prism.js.

## Features

- Syntax highlighting for JSX, JavaScript, HTML, and CSS
- Responsive design
- Dark theme
- Real-time code editing and highlighting

## Live Demo
[https://react-code-editor-pearl.vercel.app/]

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Amansinghfbd/react-code-editor.git
    cd code-editor
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development server:**

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the code editor in action.

## Usage

You can start editing the code in the textarea. The syntax highlighting will be applied in real-time.

## Project Structure

- `src/App.jsx`: Main component rendering the `CodeEditor`.
- `src/CodeEditor.jsx`: Component containing the code editor with syntax highlighting.
- `src/App.css`: CSS for styling the components.
- `src/index.jsx`: Entry point of the React application.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Prism.js**: A lightweight, extensible syntax highlighter.

## Adding More Languages

To add more languages for syntax highlighting, you need to import the respective components from Prism.js. For example:

```javascript
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
```

## Contact
If you have any questions or feedback, feel free to contact me at [amansinghfbd100@gmail.com].
