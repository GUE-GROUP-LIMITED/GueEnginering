import ProgressBar from "@/components/ProgressBar";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
const Team = () => {
  return (
    <Layout>
      <PageBanner
        titleHtml={`Team D<span>etails</span>`}
        titleText="Team Details"
      />
      <section className="team-profile-area pt-130 pb-95 rel z-1">
        <div className="container">
          <div className="row large-gap justify-content-between">
            <div className="col-lg-5">
              <div className="team-profile-image rmb-65 wow fadeInRight delay-0-2s">
                <img
                  src="assets/images/team/team-profile.jpg"
                  alt="Team Member"
                />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="team-profile-content wow fadeInLeft delay-0-2s">
                <div className="section-title mb-25">
                  <h2>Richard C. Harrison</h2>
                  <span className="designation">Senior Web Designer</span>
                </div>
                <hr className="mb-35" />
                <p>
                  Our engineering team brings deep technical expertise and delivery discipline
                  to solve complex business challenges with modern, scalable systems
                  while maintaining quality, security, and long-term maintainability
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                  so your organization can move faster with confidence
                  eos ratione voluptatem sequi nesciunt. Neque porro quisquam
                  and achieve measurable results across products and operations
                  adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore
                </p>
                <h4 className="title pt-25">Follow Me</h4>
                <hr />
                <div className="social-style-one pt-15 pb-25">
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
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <h4 className="title pt-25">Best Skills</h4>
                <hr />
                <div className="circle-counter wow fadeInUp delay-0-2s">
                  <div className="circle-progress-item">
                    <ProgressBar value={89} color="#3180fc" />
                    <h5>SEO Service</h5>
                  </div>
                  <div className="circle-progress-item">
                    <ProgressBar value={76} color="#f1b000" />
                    <h5>Development</h5>
                  </div>
                  <div className="circle-progress-item">
                    <ProgressBar value={63} color="#16b4f2" />
                    <h5>SEO</h5>
                  </div>
                  <div className="circle-progress-item">
                    <ProgressBar value={58} color="#c400fc" />
                    <h5>Support</h5>
                  </div>
                </div>
                <h4 className="title pt-50">Experience</h4>
                <hr />
                <div className="experience-wrap pt-20">
                  <div className="experience-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src="assets/images/team/logo1.png" alt="Logo" />
                    </div>
                    <div className="content">
                      <h5>Senior Product Designer</h5>
                      <span className="duration">Twitter (2000-2005)</span>
                      <p>
                        We partner closely with stakeholders to define clear priorities
                        and execute with accountability from kickoff to handover
                        eaquenumquam tempora
                      </p>
                    </div>
                  </div>
                  <div className="experience-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src="assets/images/team/logo2.png" alt="Logo" />
                    </div>
                    <div className="content">
                      <h5>Junior Product Designer</h5>
                      <span className="duration">Netflix (1995-1999)</span>
                      <p>
                        We partner closely with stakeholders to define clear priorities
                        and execute with accountability from kickoff to handover
                        eaquenumquam tempora
                      </p>
                    </div>
                  </div>
                  <div className="experience-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img src="assets/images/team/logo3.png" alt="Logo" />
                    </div>
                    <div className="content">
                      <h5>Junior Product Designer</h5>
                      <span className="duration">Spotify (1990-1994)</span>
                      <p>
                        We partner closely with stakeholders to define clear priorities
                        and execute with accountability from kickoff to handover
                        eaquenumquam tempora
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Profile Area start */}
    </Layout>
  );
};
export default Team;

