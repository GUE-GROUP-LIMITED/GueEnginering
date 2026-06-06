"use client";
import OxencyAccordion from "@/components/OxencyAccordion";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const faqsData1 = [
  {
    title: "What services does GUE Engineering provide?",
    dec: "We provide software development, AI-powered automation, SaaS engineering, DevOps implementation, cloud infrastructure services and technical training.",
  },
  {
    title: "How do you scope projects and estimate cost?",
    dec: "Every engagement starts with discovery and technical assessment. We then share a clear scope, delivery milestones and pricing model aligned to your business goals.",
  },
  {
    title: "Can you modernize existing systems and legacy platforms?",
    dec: "Yes. We support system audits, architecture redesign, migration to modern stacks and incremental modernization to reduce operational risk.",
  },
  {
    title: "Do you provide post-launch support and optimization?",
    dec: "Yes. We offer managed support, observability, reliability improvements and continuous optimization after deployment.",
  },
];
const faqsData2 = [
  {
    title: "How long does delivery usually take?",
    dec: "Delivery timelines depend on project size and complexity. After discovery, we define a realistic roadmap with sprint-based milestones.",
  },
  {
    title: "Do you support startups and enterprise teams?",
    dec: "Yes. We work with startups, SMEs and enterprise organizations, adapting delivery models to each stage of growth.",
  },
  {
    title: "Can you train our internal team?",
    dec: "Yes. We provide practical technical training in software engineering, DevOps practices, cloud operations and AI automation workflows.",
  },
  {
    title: "What engagement and payment models are available?",
    dec: "We support milestone-based, retainer and project-based engagements. Payment terms are agreed during proposal and contracting.",
  },
  {
    title: "How do we get started with GUE Engineering?",
    dec: "Contact us with your business objective and technical context. Our team will schedule a discovery call and share a tailored implementation plan.",
  },
];

const Faq = () => {
  const [active, setActive] = useState(`a0`);
  const onClick = (value) => {
    setActive(value === active ? "" : value);
  };
  return (
    <Layout>
      <PageBanner
        titleHtml={`Faq & <span>Help</span>`}
        titleText="Faq & Help"
      />
      <section className="faq-page-about-area pt-130">
        <div className="container">
          <div className="row large-gap justify-content-center align-items-center pb-115">
            <div className="col-xl-5 col-lg-6">
              <div className="faq-page-content rmb-65 wow fadeInRight delay-0-2s">
                <div className="section-title mb-25">
                  <span className="sub-title style-two mb-15">
                    Finding Help
                  </span>
                  <h2>How Can We Support You?</h2>
                </div>
                <p>
                  Find answers about our engineering services, delivery process,
                  support models and technical training programs.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action="#"
                  className="faq-search-form mt-40 mb-20"
                >
                  <label htmlFor="search">
                    <i className="far fa-search" />
                  </label>
                  <input
                    type="text"
                    id="search"
                    placeholder="Find your category"
                    required=""
                  />
                  <button type="submit">
                    <i className="fas fa-chevron-right" />
                  </button>
                </form>
                <p>
                  <b>Suggestions:</b> Software Development, AI Automation,
                  DevOps, Cloud Infrastructure
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="faq-page-image wow fadeInLeft delay-0-2s">
                <img src="assets/images/faqs/faq-page.jpg" alt="FAQs" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
      {/* FAQ Page About Area end */}
      {/* Services Area start */}
      <section className="services-area-five pt-115 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                <span className="sub-title style-two mb-20">What We Offer</span>
                <h2>Support Topics</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="service-item-five wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="assets/images/services/icon1.png" alt="Icon" />
                </div>
                <h4>Project Discovery</h4>
                <p>
                  Understand scope, timelines, architecture options and delivery
                  strategy for your initiative.
                </p>
                <Link href="/service-details" className="theme-btn style-three">
                  Get Support <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-five wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/services/icon2.png" alt="Icon" />
                </div>
                <h4>Service Packages</h4>
                <p>
                  Get clarity on engagement models for software, AI, SaaS,
                  DevOps and cloud delivery.
                </p>
                <Link href="/service-details" className="theme-btn style-three">
                  Get Support <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-five wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/services/icon3.png" alt="Icon" />
                </div>
                <h4>Contract and Terms</h4>
                <p>
                  Review proposal terms, milestones, acceptance criteria and
                  support responsibilities.
                </p>
                <Link href="/service-details" className="theme-btn style-three">
                  Get Support <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-five wow fadeInUp delay-0-2s">
                <div className="icon">
                  <img src="assets/images/services/icon4.png" alt="Icon" />
                </div>
                <h4>Billing and Payment</h4>
                <p>
                  Confirm invoicing cycles, billing structure and payment terms
                  for your selected engagement.
                </p>
                <Link href="/service-details" className="theme-btn style-three">
                  Get Support <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-five wow fadeInUp delay-0-4s">
                <div className="icon">
                  <img src="assets/images/services/icon5.png" alt="Icon" />
                </div>
                <h4>Delivery and Reporting</h4>
                <p>
                  Track sprint progress, release plans, documentation and
                  deployment updates.
                </p>
                <Link href="/service-details" className="theme-btn style-three">
                  Get Support <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="service-item-five wow fadeInUp delay-0-6s">
                <div className="icon">
                  <img src="assets/images/services/icon6.png" alt="Icon" />
                </div>
                <h4>Training and Enablement</h4>
                <p>
                  Explore technical training options for engineering teams and
                  operations staff.
                </p>
                <Link href="/service-details" className="theme-btn style-three">
                  Get Support <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Area end */}
      {/* FAQs Page Area start */}
      <section className="faqs-area-area bgc-lighter py-130 rel z-1">
        <div className="container">
          <div className="row justify-content-between align-items-end pb-5">
            <div className="col-xl-6 col-lg-8 wow fadeInUp delay-0-2s">
              <div className="section-title mb-35">
                <span className="sub-title style-two mb-15">Faqs</span>
                <h2>Frequently Asked Questions about Our Services</h2>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end wow fadeInUp delay-0-4s">
              <Link href="/contact" className="theme-btn style-three mb-55">
                Contact Support <i className="fas fa-angle-double-right" />

              </Link>
            </div>
          </div>
          <Accordion
            defaultActiveKey="a0"
            className="accordion style-two"
            id="faq-accordion"
          >
            <div className="row">
              <div className="col-lg-6 rmb-20 wow fadeInUp delay-0-2s">
                {faqsData1.map((data, i) => (
                  <OxencyAccordion
                    key={i}
                    dec={data.dec}
                    onClick={() => onClick(`a${i}`)}
                    active={active}
                    event={`a${i}`}
                    title={data.title}
                  />
                ))}
              </div>
              <div className="col-lg-6 wow fadeInUp delay-0-4s">
                {faqsData2.map((data, i) => (
                  <OxencyAccordion
                    key={i}
                    dec={data.dec}
                    onClick={() => onClick(`b${i}`)}
                    active={active}
                    event={`b${i}`}
                    title={data.title}
                  />
                ))}
              </div>
            </div>
          </Accordion>
        </div>
      </section>
      {/* FAQs Page Area end */}
    </Layout>
  );
};
export default Faq;
