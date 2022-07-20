import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./frontend/context/Auth/context";
import {NotesProvider} from "./frontend/context/Notes/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NotesProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NotesProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
