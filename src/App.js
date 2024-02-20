import "./App.css";

import Header from "./Header";
import Templates from "./Templates";
import Documents from "./Documents";

//CHECK Documents.js AND Templates.js
//Turn 'state' from true to false & vice versa to see conditional rendering results

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
