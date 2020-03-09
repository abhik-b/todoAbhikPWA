import React, { Component } from "react";
export default class Navbar extends Component {
  componentDidMount() {
    var cb = document.getElementById("checkbox");
    cb.addEventListener("change", () => {
      document.body.classList.toggle("light");
      //   document.body.nav.classList.toggle("light");
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="nav-wrapper teal darken-4 ">
          <div className="nav-wrapper">
            <a
              href="#"
              style={{ marginLeft: 20 }}
              className="brand-logo left yellow-text"
            >
              TodoABHIK
            </a>

            <label style={{ marginRight: 20 }} className="right">
              <input
                type="checkbox"
                className="checkbox filled-in"
                id="checkbox"
              />
              <span className="white-text">light mode</span>
            </label>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
