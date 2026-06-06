import Link from "next/link";
import { Accordion } from "react-bootstrap";
const MobileMenu = ({ logo }) => {
  return (
    <nav className="main-menu navbar-expand-lg d-block d-lg-none mobile-header">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo my-15">
            <Link href="/">

              <img
                src={logo ? logo : "assets/images/logos/logo.png"}
                alt="Logo"
                title="Logo"
              />

            </Link>
          </div>
          {/* Toggle Button */}
          <Accordion.Toggle
            eventKey="nav"
            as="button"
            className="navbar-toggle"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="nav" className="navbar-collapse clearfix">
          <ul className="navigation clearfix">
            <li>
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">
                About
              </Link>
            </li>
            <li>
              <Link href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/orders">
                Orders
              </Link>
            </li>
            <li>
              <Link href="/faqs">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};
export default MobileMenu;
