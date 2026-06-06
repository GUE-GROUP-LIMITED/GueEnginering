import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import Link from "next/link";
const Services = () => {
  return (
    <Layout>
      <PageBanner
        titleHtml={`Popular Se<span>rvices</span>`}
        titleText="Popular Services"
      />
      <section className="statistics-area-five py-130">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="statistics-five-content mb-30 rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Company Statistics
                  </span>
                  <h2>
                    Delivering secure, scalable engineering solutions for
                    modern businesses.
                  </h2>
                </div>
                <p>
                  We design, build and scale software platforms with cloud-native
                  architecture, DevOps automation and AI-enabled workflows to
                  accelerate growth across industries.
                </p>
                <Link href="/about" className="theme-btn mt-15">
                  Learn More <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="statistics-five-image wow fadeInLeft delay-0-2s">
                <img
                  src="assets/images/about/statistics-five.png"
                  alt="Statistics"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Five Area end */}
      {/* Working Process Area start */}
      <section className="work-process-area pb-95 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-15">
                  Working Process
                </span>
                <h2>How We Work</h2>
              </div>
            </div>
          </div>
          <div className="work-process-wrap rel z-1">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-30 wow fadeInUp delay-0-2s">
                  <div className="icon">
                    <span className="number">01</span>
                    <i className="flaticon-optimization" />
                  </div>
                  <h4>Discovery &amp; Assessment</h4>
                  <p>We evaluate your current systems, requirements and delivery goals.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <span className="number">02</span>
                    <i className="flaticon-link" />
                  </div>
                  <h4>Solution Architecture</h4>
                  <p>We design scalable software, cloud and automation blueprints.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <span className="number">03</span>
                    <i className="flaticon-data" />
                  </div>
                  <h4>Build &amp; Integrate</h4>
                  <p>Our team develops, integrates and validates every core component.</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                  <div className="icon">
                    <span className="number">04</span>
                    <i className="flaticon-star" />
                  </div>
                  <h4>Launch &amp; Optimize</h4>
                  <p>We deploy, monitor and continuously improve service performance.</p>
                </div>
              </div>
            </div>
            <div className="work-process-shape">
              <img
                src="assets/images/shapes/worp-process-step.png"
                alt="Shape"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Working Process Area end */}
      {/* Services Area start */}
      <section className="services-area-four bgc-black pt-130 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center text-white mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20">
                  Services We Provide
                </span>
                <h2>Core Engineering Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service-four1.png"
                    alt="Service"
                  />
                </div>
                <h5>Software Engineering and Product Development</h5>
                <Link href="/service-details" className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service-four2.png"
                    alt="Service"
                  />
                </div>
                <h5>AI-Powered Automation and Workflow Intelligence</h5>
                <Link href="/service-details" className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service-four3.png"
                    alt="Service"
                  />
                </div>
                <h5>SaaS Platform Design, Build and Scale</h5>
                <Link href="/service-details" className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-2s">
                <div className="image">
                  <img
                    src="assets/images/services/service-four4.png"
                    alt="Service"
                  />
                </div>
                <h5>DevOps Engineering and CI/CD Enablement</h5>
                <Link href="/service-details" className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-4s">
                <div className="image">
                  <img
                    src="assets/images/services/service-four5.png"
                    alt="Service"
                  />
                </div>
                <h5>Cloud Infrastructure and Platform Reliability</h5>
                <Link href="/service-details" className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-four wow fadeInUp delay-0-6s">
                <div className="image">
                  <img
                    src="assets/images/services/service-four6.png"
                    alt="Service"
                  />
                </div>
                <h5>Technical Training and Capability Development</h5>
                <Link href="/service-details" className="theme-btn style-three">
                  Service Details <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* Pricing Area start */}
      <section className="pricing-area py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20">Pricing Plan</span>
                <h2>Best Pricing Package</h2>
              </div>
            </div>
          </div>
          <div className="pricing-plan-item wow fadeInUp delay-0-2s">
            <div className="price-features">
              <h4>Basic Plan</h4>
              <ul className="list-style-two">
                <li>Landing page design (10 pages)</li>
                <li>Domain and hosting setup</li>
                <li>React, Vue, HTML &amp; CSS frontends</li>
                <li>Online support (24/7)</li>
                <li>Social Media Marketing</li>
                <li>.NET, REST API, Blazor, Django &amp; Flask apps</li>
              </ul>
              <span className="badge">popular</span>
            </div>
            <div className="price-and-btn">
              <div className="content">
                <span className="price">248</span>
                <span className="save">
                  Save<span> 25%</span>
                </span>
                <Link href="/pricing" className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-plan-item wow fadeInUp delay-0-2s">
            <div className="price-features">
              <h4>Standard Plan</h4>
              <ul className="list-style-two">
                <li>Landing page design (10 pages)</li>
                <li>Domain and hosting setup</li>
                <li>React, Vue, HTML &amp; CSS frontends</li>
                <li>Online support (24/7)</li>
                <li>Social Media Marketing</li>
                <li>.NET, REST API, Blazor, Django &amp; Flask apps</li>
              </ul>
              <span className="badge">popular</span>
            </div>
            <div className="price-and-btn">
              <div className="content">
                <span className="price">452</span>
                <span className="save">
                  Save<span> 43%</span>
                </span>
                <Link href="/pricing" className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
          <div className="pricing-plan-item wow fadeInUp delay-0-2s">
            <div className="price-features">
              <h4>Premium Plan</h4>
              <ul className="list-style-two">
                <li>Landing page design (10 pages)</li>
                <li>Domain and hosting setup</li>
                <li>React, Vue, HTML &amp; CSS frontends</li>
                <li>Online support (24/7)</li>
                <li>Social Media Marketing</li>
                <li>.NET, REST API, Blazor, Django &amp; Flask apps</li>
              </ul>
              <span className="badge">popular</span>
            </div>
            <div className="price-and-btn">
              <div className="content">
                <span className="price">683</span>
                <span className="save">
                  Save<span> 66%</span>
                </span>
                <Link href="/pricing" className="theme-btn style-three">
                  Choose Package <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-shapes">
          <img
            className="shape one"
            src="assets/images/shapes/pricing-light1.png"
            alt="Wave Shape"
          />
          <img
            className="shape two"
            src="assets/images/shapes/pricing-light2.png"
            alt="Wave Shape"
          />
        </div>
      </section>
      {/* Pricing Area end */}
    </Layout>
  );
};
export default Services;

