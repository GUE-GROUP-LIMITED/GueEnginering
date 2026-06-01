import Link from "next/link";

const Footer = ({ footer }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;

    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const Footer1 = () => (
  <footer className="main-footer footer-two pt-80 bgc-lighter">
    <div className="container">
      <div className="row justify-content-xl-between justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <div className="footer-logo mb-25">
              <Link href="/">

                <img src="assets/images/logos/logo.png" alt="Logo" />

              </Link>
            </div>
            <p>
              GUE Engineering Limited is a technology engineering company
              specializing in software development, AI-powered automation,
              SaaS solutions, DevOps engineering, cloud infrastructure and
              technical training. As a subsidiary of GUE Group Limited, we are
              committed to driving innovation and digital transformation across
              Africa through scalable and secure technology solutions.
            </p>
            <div className="social-style-two pt-5">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-behance" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="list-style-two">
              <li>
                <Link href="/service-details">
                  Wed Design (UI/UX)
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About company
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Web development
                </Link>
              </li>
              <li>
                <Link href="/team">
                  Meet our teams
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Case Stories
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Landing Pages Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-8">
          <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
            <h4 className="footer-title">Newsletter</h4>
            <p>Sing up to get more every updates</p>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <input type="email" placeholder="Enter email" required="" />
              <button className="theme-btn">
                Subscribe Now <i className="fas fa-angle-double-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="copyright-text text-center">
          <p>
            Â© Copyright {new Date().getFullYear()} GUE ENGINEERING. All right reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
);

const Footer2 = () => (
  <footer className="main-footer bgc-dark-blue text-white rel z-1">
    <div className="container">
      <div
        className="footer-top-newsletter bgc-primary p-80"
        style={{
          backgroundImage: "url(assets/images/footer/newsletter-bg.png)",
        }}
      >
        <div className="row justify-content-between align-items-center">
          <div className="col-xl-6 col-lg-7">
            <div className="footer-newsletter-content rmb-55 wow fadeInLeft delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-15">Our Newsletter</span>
                <h2>Subscribe Our Newsletter to Get More Updates</h2>
                <p>
                  We engineer reliable digital products and technology systems
                  for businesses that need speed, stability, and sustainable growth
                </p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} action="#">
                <div className="form-group rel mb-0 w-100">
                  <label htmlFor="email">
                    <i className="far fa-envelope" />
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email Address"
                    required=""
                  />
                </div>
                <button className="theme-btn style-two">
                  Subscribe <i className="fas fa-angle-double-right" />
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="footer-newsletter-image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/footer/footer-newsletter.png"
                alt="Newsletter"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row large-gap justify-content-center">
        <div className="col-xl-7 col-lg-8">
          <div className="footer-cta text-center my-100 wow fadeInUp delay-0-2s">
            <div className="section-title">
              <h2>Letâ€™s Design Your New Website</h2>
              <p>
                Do you want to have a website that stands out and impresses your
                clients? Then we are ready to help! Click the button below to
                contact us and discuss your ideas.
              </p>
            </div>
            <Link href="/contact" className="theme-btn mt-15">
              Get a Quote <i className="fas fa-angle-double-right" />

            </Link>
          </div>
        </div>
      </div>
      <div className="copyright-area text-center pt-30 pb-15">
        <ul className="footer-menu pb-10">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Our Services</a>
          </li>
          <li>
            <a href="#">How We Work</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
          <li>
            <a href="#">Why Choose Us</a>
          </li>
          <li>
            <a href="#">Partners</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <p>Â© Copyright {new Date().getFullYear()} GUE ENGINEERING. All right reserved</p>
      </div>
    </div>
    <div className="wave-shapes">
      <img
        className="shape one"
        src="assets/images/shapes/footer1.png"
        alt="Wave Shape"
      />
      <img
        className="shape two"
        src="assets/images/shapes/footer2.png"
        alt="Wave Shape"
      />
    </div>
  </footer>
);

const DefaultFooter = () => (
  <footer className="main-footer pt-80">
    <div className="container">
      <div className="row justify-content-xl-between justify-content-center">
        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="footer-widget widget_about me-md-5 wow fadeInUp delay-0-2s">
            <div className="footer-logo mb-25">
              <Link href="/">

                <img src="assets/images/logos/logo.png" alt="Logo" />

              </Link>
            </div>
            <p>
              GUE Engineering Limited is a technology engineering company
              specializing in software development, AI-powered automation,
              SaaS solutions, DevOps engineering, cloud infrastructure and
              technical training. As a subsidiary of GUE Group Limited, we are
              committed to driving innovation and digital transformation across
              Africa through scalable and secure technology solutions.
            </p>
            <div className="social-style-two pt-5">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="#">
                <i className="fab fa-behance" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-md-6">
          <div className="footer-widget widget_nav_menu wow fadeInUp delay-0-4s">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="list-style-two">
              <li>
                <Link href="/service-details">
                  Wed Design (UI/UX)
                </Link>
              </li>
              <li>
                <Link href="/about">
                  About company
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Web development
                </Link>
              </li>
              <li>
                <Link href="/team">
                  Meet our teams
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Case Stories
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Product Engineering
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  Latest News
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Technical Support
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/service-details">
                  Landing Pages Design
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-8">
          <div className="footer-widget widget_newsletter wow fadeInUp delay-0-6s">
            <h4 className="footer-title">Newsletter</h4>
            <p>Sing up to get more every updates</p>
            <form onSubmit={(e) => e.preventDefault()} action="#">
              <input type="email" placeholder="Enter email" required="" />
              <button className="theme-btn">
                Subscribe Now <i className="fas fa-angle-double-right" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom mt-30 pt-25 pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="copyright-text text-center text-lg-start">
              <p>
                Â© Copyright {new Date().getFullYear()} GUE ENGINEERING. All right
                reserved
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer-bottom-menu mb-10 text-center text-lg-end">
              <ul>
                <li>
                  <a href="#">Setting &amp; Privacy</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Faqs</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Scroll Top Button */}
        <button className="scroll-top scroll-to-target" data-target="html">
          <span className="fas fa-angle-double-up" />
        </button>
      </div>
    </div>
  </footer>
);

