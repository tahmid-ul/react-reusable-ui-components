import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div className="home__container">
      <h1 className="home__header">Reusable Components - React</h1>
      <p className="home__container_subtitle">
        This project is a part of{" "}
        <a href="https://devchallenges.io/" target="_blank" rel="noreferrer">
          devchallenges.io
        </a>{" "}
        Front-end developer challenges.
      </p>
      <p>
        It is built fully using React and hosted on firebase. Currently there
        are three components - Typography, Buttons and Inputs. More components
        will be added in the future.
      </p>
      <div className="home__container_components">
        <li>
          <Link to="/typography">Typography</Link>
        </li>
        <li>
          <Link to="/buttons">Buttons</Link>
        </li>
        <li>
          <Link to="/inputs">Inputs</Link>
        </li>
      </div>
    </div>
  );
}

export default Home;
