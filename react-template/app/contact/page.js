import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

export const metadata = {
  title: "Contact",
  description:
    "Contact GUE Engineering Limited for software development, AI automation, DevOps and cloud engineering, technical consulting, or training engagements.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | GUE Engineering Limited",
    description:
      "Share your project goals and constraints to start a software, automation, or cloud engineering engagement.",
    url: "/contact",
  },
};

const contactDetails = [
  {
    label: "Email",
    value: "hello@gueengineering.com",
    href: "mailto:hello@gueengineering.com",
  },
  {
    label: "Projects",
    value: "projects@gueengineering.com",
    href: "mailto:projects@gueengineering.com",
  },
  {
    label: "Phone",
    value: "+234 904 115 7068",
    href: "tel:+2349041157068",
  },
  {
    label: "Location",
    value: "Abuja, Federal Capital Territory, Nigeria",
  },
];

const ContactPage = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Conta<span>ct</span>`} titleText="Contact" />

      <section className="gue-page-section">
        <div className="gue-page-two-col">
          <div>
            <div className="gue-page-section__header">
              <p className="gue-page-section__kicker">Get Started</p>
              <h2 className="gue-page-section__title">Tell us what you need to build or fix</h2>
              <p className="gue-page-section__copy">
                Share the business problem, delivery target, timeline, and anything already
                in place. We can respond with a realistic starting point.
              </p>
            </div>

            <form className="gue-page-form" action="#">
              <div className="gue-page-form-grid">
                <div>
                  <label htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <div>
                  <label htmlFor="phone">Phone number</label>
                  <input id="phone" name="phone" type="text" placeholder="+234 ..." />
                </div>
                <div>
                  <label htmlFor="service">Primary need</label>
                  <select id="service" name="service" defaultValue="Software Development">
                    <option>Software Development</option>
                    <option>AI Automation</option>
                    <option>SaaS & Open-Source</option>
                    <option>DevOps & Cloud Engineering</option>
                    <option>IT Training</option>
                    <option>Technical Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message">Project brief</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Describe the problem, expected outcome, timeline, and any existing systems."
                  required
                />
              </div>

              <button type="submit" className="gue-page-button">
                Send Inquiry
              </button>
              <p className="gue-page-form-note">
                This form is currently a visual placeholder. For immediate contact, email
                hello@gueengineering.com.
              </p>
            </form>
          </div>

          <div className="gue-page-detail-list">
            {contactDetails.map((item) => (
              <article key={item.label} className="gue-page-detail">
                <div className="gue-page-detail__icon">•</div>
                <div>
                  <p className="gue-page-detail__label">{item.label}</p>
                  <p className="gue-page-detail__value">
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
