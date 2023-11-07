/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="">
              CBCC
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
              About Us
            </NavLink>
          </NavItem>
          
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} made
           by{" "}
          <a
            href=""
            target="_blank"
          >
            N.E.S.T
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
