import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./frontend/context/Auth/context";
import { NotesProvider } from "./frontend/context/Notes/context";
import { FilterNotesProvider } from "./frontend/context/Filter/context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <NotesProvider>
          <FilterNotesProvider>
            <App />
          </FilterNotesProvider>
        </NotesProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
