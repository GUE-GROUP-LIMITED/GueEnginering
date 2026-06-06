import { sideBarToggle } from "@/utility";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

const HEADER_LOGO = "assets/images/logos/logo-withbg.png";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    default:
      return <DefaultHeader />;
  }
};
export default Header;

const Header1 = () => {
  return (
    <header className="main-header header-two">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">

                  <img
                    src={HEADER_LOGO}
                    alt="Logo"
                    title="Logo"
                  />

                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu logo={HEADER_LOGO} />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">

                      <img
                        src={HEADER_LOGO}
                        alt="Logo"
                        title="Logo"
                      />

                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="/contact" className="theme-btn style-three">
                Get a Quote <i className="fas fa-angle-double-right" />

              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar d-none d-lg-block">
                <button onClick={() => sideBarToggle()}>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Header2 = () => {
  return (
    <header className="main-header">
      <div className="header-top-wrap bgc-secondary text-white py-5">
        <div className="container">
          <div className="header-top">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="top-left text-center text-lg-start">
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Services</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="top-right text-center text-lg-end">
                  <ul>
                    <li>
                      <i className="far fa-envelope" />{" "}
                      <a href="mailto:contact@gueengineering.com">
                        contact@gueengineering.com
                      </a>
                    </li>
                    <li>
                      <i className="far fa-phone" />{" "}
                      <a href="tel:+2349041157068">0904 115 7068</a>
                    </li>
                    <li>
                      <select className="select" name="language" id="language">
                        <option value="English">English</option>
                        <option value="Bengali">Bengali</option>
                        <option value="Arabic">Arabic</option>
                      </select>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">

                  <img
                    src={HEADER_LOGO}
                    alt="Logo"
                    title="Logo"
                    className="logo dark-logo"
                  />
                  <img
                    className="light-logo logo"
                    src={HEADER_LOGO}
                    alt="Logo"
                    title="Logo"
                  />

                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">

                      <img
                        src={HEADER_LOGO}
                        alt="Logo"
                        title="Logo"
                      />

                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="/contact" className="theme-btn">
                Download Now <i className="fas fa-angle-double-right" />

              </Link>
              {/* menu sidbar */}
              <div className="menu-sidebar d-none d-lg-block">
                <button onClick={() => sideBarToggle()}>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const DefaultHeader = () => {
  return (
    <header className="main-header header-three menu-absolute">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container-fluid clearfix">
          <div className="header-inner rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">

                  <img
                    src={HEADER_LOGO}
                    alt="Logo"
                    title="Logo"
                  />

                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <MobileMenu />
              {/* Main Menu */}
              <nav className="main-menu d-none d-lg-block navbar-expand-lg">
                <div className="navbar-header">
                  <div className="mobile-logo my-15">
                    <Link href="/">

                      <img
                        src={HEADER_LOGO}
                        alt="Logo"
                        title="Logo"
                      />

                    </Link>
                  </div>
                  {/* Toggle Button */}
                  <button
                    type="button"
                    className="navbar-toggle"
                    data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse"
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                </div>
                <div className="navbar-collapse collapse clearfix">
                  <Menu />
                </div>
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Menu Button */}
            <div className="menu-btns">
              <Link href="/contact" className="login">
                Log in
              </Link>
              <Link href="/contact" className="theme-btn">
                Sign up Free <i className="fas fa-angle-double-right" />

              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

const Menu = () => {
  return (
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
  );
};
