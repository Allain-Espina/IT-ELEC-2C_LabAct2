import "./App.css";

import Header from "./Header";
import Templates from "./Templates";
import Documents from "./Documents";

//display: grid;
// grid-template-coloums: repeat(4, 300px)

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Templates />
      </div>

      <div>
        <Documents />
      </div>
    </div>
  );
}

export default App;
