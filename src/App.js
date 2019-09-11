import React from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Houses from "./pages/Houses/Houses"
import Books from "./pages/Books/Books"
import BookDetails from "./pages/BookDetails/BookDetails"
import Character from "./pages/Character/Character"

function AppRouter() {
  return (     
    <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Books</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Houses/">Houses</Link>
              </li>
              <li>
                <Link className="nav-link" to="/Character/">Character</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="container-fluid">
        <Route path="/" exact component={Books} />
        <Route path="/Books/:id" exact component={BookDetails} />
        <Route path="/Houses/" exact component={Houses} />
        <Route path="/Character/" exact component={Character} />
        </div>
    </Router>
  );
}

export default AppRouter;