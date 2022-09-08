import React, { Component } from "react";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg bg-primary">
        <div className="footer-copyright text-center py-3">
          <span className="text-white">&copy; 2022 Copyright:&nbsp;</span>
          <a href="/" className="text-white font-weight-bold">Startup-India</a>
        </div>
      </footer>
    );
  }
}

export default Footer;
