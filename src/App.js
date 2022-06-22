import "./App.css";
import { SideNav, TopNav } from "./frontend/component";
import { RouterPath } from "./frontend/router/RouterPath";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./logo.png";


function App() {
  return (
    <div className="App">
      <div className="header"><TopNav/></div>
      <div className="sidebar"><SideNav/></div>
      <div className="content">
        <RouterPath/>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
