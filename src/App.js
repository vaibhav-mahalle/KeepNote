import "./App.css";
import { SideNav, TopNav } from "./frontend/component";
import { RouterPath } from "./frontend/router/RouterPath";
import logo from "./logo.png";


function App() {
  return (
    <div className="App">
      <div className="header"><TopNav/></div>
      <div className="sidebar"><SideNav/></div>
      <div className="content">
        <RouterPath/>
      </div>
    </div>
  );
}

export default App;
