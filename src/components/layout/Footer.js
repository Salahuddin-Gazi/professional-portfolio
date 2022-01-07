import * as React from "react";

const Footer = () => (
  <div className="footerDiv mt-5">
    <div className="footerIconDiv">
      <a href="https://github.com/Salahuddin-Gazi" className="footerIcon" target={`_blank`}>
        <i className="fab fa-2x fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/sa1ahudd1n/" className="footerIcon" target={`_blank`}>
        <i className="fab fa-2x fa-linkedin"></i>
      </a>
    </div>
    <div className="footerEnd text-muted">© 2022 - All rights reserved by Gazi Salahuddin</div>
  </div>
);
export default Footer;
