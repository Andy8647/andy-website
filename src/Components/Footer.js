import React, { Component } from "react";
import Fade from "react-reveal";
import Networks from "./Networks";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <Networks social={this.props.data.social} />

              <ul className="copyright">
                <li>&copy; Copyright 2021 Gancheng Luo</li>
                <li>
                  Design by{" "}
                  <a
                    title="Styleshout"
                    href="http://www.styleshout.com/"
                    target="_blank"
                  >
                    Styleshout
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
