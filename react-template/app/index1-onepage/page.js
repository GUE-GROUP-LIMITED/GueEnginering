"use client";
import Counter from "@/components/Counter";
import ClientsFeedback from "@/components/home1/ClientsFeedback";
import Hero1 from "@/components/home1/Hero1";
import RecentProjects from "@/components/home1/RecentProjects";
import Layout from "@/layout/Layout";
import SideBar from "@/layout/SideBar";
import { sideBarToggle } from "@/utility";
import Head from "next/head";
import Link from "next/link";
import { Accordion } from "react-bootstrap";

const setTheme = (theme) => {
  localStorage.setItem("gue-theme", theme);
  window.location.href = `/?theme=${theme}`;
};

const IndexOnePage = () => {
  return (
    <Layout className="home-one" footer={1} noHeader>
      <Head>
        {" "}
        <Link rel="shortcut icon" href="assets/images/favicon1.png" type="image/x-icon" />
      </Head>
      <header className="main-header header-two">
        {/*Header-Upper*/}
        <div className="header-upper">
          <div className="container clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/">

                    <img
                      src="assets/images/logos/logo.png"
                      alt="Logo"
                      title="Logo"
                    />

                  </Link>
                </div>
              </div>
              <div className="nav-outer clearfix">
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-lg">
                  <Accordion>
                    <div className="navbar-header">
                      <div className="mobile-logo my-15">
                        <Link href="/">

                          <img
                            src="assets/images/logos/logo.png"
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
                    <Accordion.Collapse
                      eventKey="nav"
                      className="navbar-collapse clearfix"
                    >
                      <ul className="navigation onepage clearfix">
                        <li>
                          <a href="#home">Home</a>
                        </li>
                        <li>
                          <a href="#about">about</a>
                        </li>
                        <li>
                          <a href="#featured">featured</a>
                        </li>
                        <li>
                          <a href="#project">project</a>
                        </li>
                        <li>
                          <a href="#pricing">pricing</a>
                        </li>
                        <li>
                          <a href="#contact">contact</a>
                        </li>
                        <li>
                          <a href="#news">news</a>
                        </li>
                      </ul>
                    </Accordion.Collapse>
                  </Accordion>
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
                  <button
                    type="submit"
                    className="searchbutton far fa-search"
                  />
                </form>
              </div>
              {/* Menu Button */}
              <div className="menu-btns">
                <button
                  type="button"
                  className="theme-btn style-three"
                  onClick={() => setTheme("dark")}
                >
                  Dark Mode <i className="fas fa-moon" />
                </button>
                <Link href="/contact" className="theme-btn style-three">
                  Get a Quote <i className="fas fa-angle-double-right" />

                </Link>
                {/* menu sidbar */}
                <div className="menu-sidebar">
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
      <SideBar />
      {/*End Hidden Sidebar */}
      {/* Slider Section Start */}
      <Hero1 />
      {/* Slider Section End */}
      {/* Core Feature start */}
      <section className="feature-area-five bgc-lighter pt-100 pb-70">
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Core Capabilities</span>
            <h2>Engineering Services Built for Modern Enterprises</h2>
          </div>
          <div className="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 justify-content-center">
            <div className="col wow fadeInUp delay-0-2s">
              <div className="feature-item-five">
                <i className="flaticon-responsive" />
                <h5>
                  <Link href="/service-details">
                    Custom Software Engineering
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-3s">
              <div className="feature-item-five">
                <i className="flaticon-feature" />
                <h5>
                  <Link href="/service-details">
                    AI-Powered Automation
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-4s">
              <div className="feature-item-five">
                <i className="flaticon-aim" />
                <h5>
                  <Link href="/service-details">
                    Cloud Infrastructure &amp; DevOps
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-5s">
              <div className="feature-item-five">
                <i className="flaticon-seo" />
                <h5>
                  <Link href="/service-details">
                    Security &amp; Compliance
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-6s">
              <div className="feature-item-five">
                <i className="flaticon-search-location" />
                <h5>
                  <Link href="/service-details">
                    Data &amp; Analytics Platforms
                  </Link>
                </h5>
              </div>
            </div>
            <div className="col wow fadeInUp delay-0-7s">
              <div className="feature-item-five">
                <i className="flaticon-settings" />
                <h5>
                  <Link href="/service-details">
                    Ongoing Technical Support
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Core Feature end */}
      {/* About Us Area start */}
      <section id="about" className="about-area-one pt-130 pb-125 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5">
              <div className="about-image-one bg-squire-shape rmb-85 wow fadeInUp delay-0-2s">
                <img src="assets/images/about/about-one.jpg" alt="About us" />
                <img
                  className="image-left"
                  src="assets/images/shapes/image-left.png"
                  alt="shape"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="about-content-one wow fadeInUp delay-0-4s">
                <div className="section-title mb-45">
                  <span className="sub-title mb-15">
                    About GUE ENGINEERING Limited
                  </span>
                  <h2>
                    Driving innovation and digital transformation across Africa
                    with scalable and secure technology solutions.
                  </h2>
                </div>
                <ul className="list-style-one">
                  <li>
                    <div className="content">
                      <h4>Who We Are</h4>
                      <p>
                        GUE Engineering Limited is a technology engineering
                        company specializing in software development,
                        AI-powered automation, SaaS solutions, DevOps
                        engineering, cloud infrastructure and technical
                        training.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="content">
                      <h4>Our Commitment</h4>
                      <p>
                        As a subsidiary of GUE Group Limited, we are committed
                        to delivering secure, scalable and high-impact digital
                        solutions that enable long-term growth.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Area end */}
      {/* Statistics Three Area start */}
      <section className="statistics-area-three bgs-cover pb-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-7">
              <div className="statistics-three-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="row justify-content-center justify-content-xl-start">
                  <div className="col-xl-9">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">
                        Company Statistics
                      </span>
                      <h2>A snapshot of our current delivery impact</h2>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-3s">
                      <i className="flaticon-startup" />
                      <Counter end={42} />
                      <span className="counter-title">Projects Delivered</span>
                      <p>Production-ready software and automation projects shipped.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-5s">
                      <i className="flaticon-global" />
                      <Counter end={18} />
                      <span className="counter-title">Active Clients</span>
                      <p>Organizations currently partnering with our engineering team.</p>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                    <div className="counter-item style-two counter-text-wrap wow fadeInRight delay-0-7s">
                      <i className="flaticon-rating" />
                      <Counter end={6} />
                      <span className="counter-title">Years of Experience</span>
                      <p>Consistent delivery across web, cloud, and AI solutions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="statistics-three-image bg-squire-shape mb-30 wow fadeInLeft delay-0-3s">
                <img
                  src="assets/images/about/statictics.jpg"
                  alt="Statictics"
                />
                <img
                  className="image-right"
                  src="assets/images/shapes/image-right.png"
                  alt="shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Three Area end */}
      {/* Design Featured Start */}
      <section
        id="featured"
        className="design-feature-area overflow-hidden pt-130 pb-100 text-white bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
            <span className="sub-title mb-10">Core Technologies</span>
            <h2>Applications We Build from Scratch</h2>
          </div>
          <div className="row no-gap align-items-center">
            <div className="col-lg-3">
              <div className="feature-left">
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInRight delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-design" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            Custom Web App Development
                          </Link>
                        </h4>
                        <Link href="/service-details" className="more-btn">

                          <i className="fal fa-long-arrow-right" />

                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInRight delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-web-page" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            Application Maintenance &amp; Support
                          </Link>
                        </h4>
                        <Link href="/service-details" className="more-btn">

                          <i className="fal fa-long-arrow-right" />

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-middle rmt-30">
                <div className="image wow fadeInUp delay-0-2s">
                  <img
                    className="circle-text"
                    src="assets/images/shapes/feature-image-top.png"
                    alt="Text"
                  />
                  <img
                    className="round"
                    src="assets/images/features/feature-middle.png"
                    alt="Feature Middle"
                  />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="service-item style-three wow fadeInUp delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-online" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            REST API &amp; Backend Development
                          </Link>
                        </h4>
                        <Link href="/service-details" className="more-btn">

                          <i className="fal fa-long-arrow-right" />

                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="service-item style-three mt-30 wow fadeInUp delay-0-4s">
                      <div className="icon">
                        <i className="flaticon-web-programming" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            React, Vue, HTML &amp; CSS Frontends
                          </Link>
                        </h4>
                        <Link href="/service-details" className="more-btn">

                          <i className="fal fa-long-arrow-right" />

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-right">
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three mt-100 wow fadeInLeft delay-0-2s">
                      <div className="icon">
                        <i className="flaticon-graphic-design" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            .NET &amp; Blazor Applications
                          </Link>
                        </h4>
                        <Link href="/service-details" className="more-btn">

                          <i className="fal fa-long-arrow-right" />

                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="service-item style-three wow fadeInLeft delay-0-3s">
                      <div className="icon">
                        <i className="flaticon-user-experience" />
                      </div>
                      <div className="content">
                        <h4>
                          <Link href="/service-details">
                            Django &amp; Flask Applications
                          </Link>
                        </h4>
                        <Link href="/service-details" className="more-btn">

                          <i className="fal fa-long-arrow-right" />

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="design-feature-shapes">
          <img
            className="shape dots"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/feature-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Design Featured End */}
      {/* Project Area start */}
      <RecentProjects />
      {/* Project Area end */}
      {/* Working Process Area start */}
      <section className="work-process-area pb-95 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Working Process</span>
                <h2>How does we works</h2>
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
                  <h4>Info Gathering</h4>
                  <p>We align goals, scope, and technical requirements from day one</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item wow fadeInUp delay-0-4s">
                  <div className="icon">
                    <span className="number">02</span>
                    <i className="flaticon-link" />
                  </div>
                  <h4>Idea Planning</h4>
                  <p>We align goals, scope, and technical requirements from day one</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-55 wow fadeInUp delay-0-6s">
                  <div className="icon">
                    <span className="number">03</span>
                    <i className="flaticon-data" />
                  </div>
                  <h4>Design Analysis</h4>
                  <p>We align goals, scope, and technical requirements from day one</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div className="work-process-item mt-45 wow fadeInUp delay-0-8s">
                  <div className="icon">
                    <span className="number">04</span>
                    <i className="flaticon-star" />
                  </div>
                  <h4>Testing &amp; Launch</h4>
                  <p>We align goals, scope, and technical requirements from day one</p>
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
      {/* CTA Area start */}
      <section className="call-to-action-area rel z-2">
        <div className="container">
          <div
            className="cta-inner bgs-cover"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row">
              <div className="col-xl-6">
                <div className="cta-item wow fadeInLeft delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>Have a project in mind?</h4>
                  <Link href="/contact" className="details-btn">

                    <i className="far fa-arrow-right" />

                  </Link>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="cta-item wow fadeInRight delay-0-2s">
                  <div className="icon">
                    <i className="flaticon-target" />
                  </div>
                  <h4>Need a custom app built from scratch?</h4>
                  <Link href="/contact" className="details-btn">

                    <i className="far fa-arrow-right" />

                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area end */}
      {/* Pricing Two Area start */}
      <section
        id="pricing"
        className="pricing-area-two bgc-lighter pt-240 pb-100 rel z-1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Our Pricing Package</span>
                <h2>Website Design Packages</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-2s">
                <h4 className="title">Basic Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>React, Vue, HTML & CSS frontends</li>
                    <li>Social Media Marketing</li>
                    <li>Domain and hosting setup</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">248</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing" className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-4s">
                <h4 className="title">Standard plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>React, Vue, HTML & CSS frontends</li>
                    <li>Social Media Marketing</li>
                    <li>Domain and hosting setup</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">352</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing" className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-2s">
                <h4 className="title">golder Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>React, Vue, HTML & CSS frontends</li>
                    <li>Social Media Marketing</li>
                    <li>Domain and hosting setup</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">583</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing" className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="pricing-item-two wow fadeInUp delay-0-4s">
                <h4 className="title">platinum Plan</h4>
                <span className="badge">popular package</span>
                <div className="pricing-inner">
                  <ul className="list-style-two">
                    <li>Landing page design (10 pages)</li>
                    <li>React, Vue, HTML & CSS frontends</li>
                    <li>Social Media Marketing</li>
                    <li>Domain and hosting setup</li>
                    <li>Online support (24/7)</li>
                  </ul>
                  <div className="price-and-btn">
                    <div className="content">
                      <span className="price">834</span>
                      <span className="save">
                        Save<span> 25%</span>
                      </span>
                      <Link href="/pricing" className="theme-btn style-three">
                        Choose Package{" "}
                        <i className="fas fa-angle-double-right" />

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing-shapes">
          <img
            className="shape dots"
            src="assets/images/shapes/pricing-bg-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave"
            src="assets/images/shapes/pricing-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Pricing Two Area end */}
      {/* Testimonial Area Start */}
      <ClientsFeedback />
      {/* Testimonial Area End */}
      {/* Contact Area Start */}
      <section
        id="contact"
        className="contact-area overflow-hidden py-130 bgc-black-with-lighting rel z-1"
      >
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6">
              <div className="contact-info-area text-white rmb-75 wow fadeInLeft delay-0-2s">
                <div className="section-title mb-55">
                  <h2>
                    Have a project in mind? Feel free to contact us or{" "}
                    <span>say hello</span>
                  </h2>
                </div>
                <div className="contact-info-wrap">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="content">
                      <span className="title">Location</span>
                      <b className="text">
                        HVCH+7MM, Behind Township Hall, Wannune 981107, Benue,
                        Nigeria
                      </b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-envelope-open-text" />
                    </div>
                    <div className="content">
                      <span className="title">Email Address</span>
                      <b className="text">
                        <a href="mailto:contact@gueengineering.com">
                          contact@gueengineering.com
                        </a>
                      </b>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="far fa-phone" />
                    </div>
                    <div className="content">
                      <span className="title">Phone No</span>
                      <b className="text">
                        <a href="tel:+2349041157068">0904 115 7068</a>
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="contact-area-form"
                className="contact-area-form text-center wow fadeInRight delay-0-2s"
                name="contact-area-form"
                action="#"
                method="post"
              >
                <h4>Send us Message</h4>
                <input
                  type="text"
                  id="full-name"
                  name="full-name"
                  className="form-control"
                  defaultValue=""
                  placeholder="Full Name"
                  required=""
                />
                <input
                  type="email"
                  id="blog-email"
                  name="blog-email"
                  className="form-control"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
                <input
                  type="text"
                  id="website"
                  name="website"
                  className="form-control"
                  defaultValue=""
                  placeholder="Website"
                  required=""
                />
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows={5}
                  placeholder="Write Message"
                  required=""
                  defaultValue={""}
                />
                <button type="submit" className="theme-btn">
                  Send Message <i className="fas fa-angle-double-right" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="contact-shapes">
          <img
            className="shape circle"
            src="assets/images/shapes/slider-dots.png"
            alt="Shape"
          />
          <img
            className="shape dots"
            src="assets/images/shapes/contact-dots.png"
            alt="Shape"
          />
          <img
            className="shape wave-line"
            src="assets/images/shapes/contact-wave-line.png"
            alt="Shape"
          />
        </div>
      </section>
      {/* Contact Area End */}
      {/* Blog Area start */}
      <section id="news" className="news-blog-area pt-130 pb-75 rel z-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Get Every Update</span>
                <h2>Read Latest News &amp; Blog</h2>
              </div>
            </div>
          </div>
          <div className="row large-gap">
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog1.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2024
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      Easy Ways to Incorporate Customer Feedback
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author1.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Douglas B. Dickens</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog2.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 27 March 2024
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      How to create a modern website for your business?
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author2.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Carson C. Rhodes</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-2s">
                <div className="image">
                  <img src="assets/images/blog/blog3.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2024
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      How does digital marketing support social growth?
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author3.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Robert T. Evans</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="blog-item wow fadeInUp delay-0-4s">
                <div className="image">
                  <img src="assets/images/blog/blog4.jpg" alt="Blog" />
                </div>
                <div className="content">
                  <span className="date">
                    <i className="far fa-calendar-alt" /> 25 March 2024
                  </span>
                  <h4>
                    <Link href="/blog-details">
                      Easy Ways to Incorporate Customer Feedback
                    </Link>
                  </h4>
                  <div className="author">
                    <img src="assets/images/blog/author4.jpg" alt="Author" />
                    <div className="post-by">
                      <span>Post by</span>
                      <a href="#">Stanley J. Contreras</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default IndexOnePage;



