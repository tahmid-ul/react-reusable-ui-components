import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home_page/Home";
import Typography from "./pages/Typography_page/Typography";
import Buttons from "./pages/Buttons_page/Buttons";
import Inputs from "./pages/Inputs_page/Inputs";
import "./App.css";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/typography",
    main: () => <Typography />,
  },
  {
    path: "/grid",
    main: () => <h2>Grid (comming soon)</h2>,
  },
  {
    path: "/buttons",
    main: () => <Buttons />,
  },
  {
    path: "/inputs",
    main: () => <Inputs />,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Sidebar">
          <ul>
            <li className="logo">
              <Link to="/">
                <span className="initials">Dev</span>challenges.io
              </Link>
            </li>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
            <li>
              <Link to="/grid">Grid</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/inputs">Inputs</Link>
            </li>
          </ul>

          <div className="sidebar__footer">
            Find the project on:{" "}
            <a
              href="https://github.com/tahmid-ul/react-reusable-ui-components"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </div>
        </div>

        <div className="App__contents">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
