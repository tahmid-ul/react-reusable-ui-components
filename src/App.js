import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from "./pages/Typography";
import Buttons from "./pages/Buttons";
import Inputs from "./pages/Inputs";
import "./App.css";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/typography",
    main: () => <Typography />,
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/inputs">Inputs</Link>
            </li>
          </ul>
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
