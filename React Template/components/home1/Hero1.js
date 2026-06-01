import Link from "next/link";
import Slider from "react-slick";

const Hero1 = () => {
  const yearsOfExperience = Math.max(new Date().getFullYear() - 2020, 1);
  const experienceText = `${yearsOfExperience} Years of Experience in Digital Solutions`;
  const heroTitle = "Software Engineering, AI Automation & Cloud Solutions";

  const props = {
    infinite: true,
    arrows: false,
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  return (
    <section
      id="home"
      className="main-slider-area bgc-black-with-lighting rel z-1"
    >
      <Slider {...props} className="main-slider-active">
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">{experienceText}</span>
              <h1>{heroTitle}</h1>
              <div className="slider-btns">
                <Link href="/contact" className="theme-btn">
                  Get Started <i className="fas fa-angle-double-right" />

                </Link>
                <Link href="/services" className="theme-btn style-three">
                  Explore Services <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide1.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Web Design</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">{experienceText}</span>
              <h1>{heroTitle}</h1>
              <div className="slider-btns">
                <Link href="/contact" className="theme-btn">
                  Get Started <i className="fas fa-angle-double-right" />

                </Link>
                <Link href="/services" className="theme-btn style-three">
                  Explore Services <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide2.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Web Design</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
        <div className="slider-item">
          <div className="container">
            <div className="slider-content">
              <span className="sub-title">{experienceText}</span>
              <h1>{heroTitle}</h1>
              <div className="slider-btns">
                <Link href="/contact" className="theme-btn">
                  Get Started <i className="fas fa-angle-double-right" />

                </Link>
                <Link href="/services" className="theme-btn style-three">
                  Explore Services <i className="fas fa-angle-double-right" />

                </Link>
              </div>
            </div>
          </div>
          <div
            className="slider-video"
            style={{
              backgroundImage: "url(assets/images/slider/slide1.jpg)",
            }}
          >
            <a
              href="https://www.youtube.com/watch?v=9Y7ma241N8k"
              className="mfp-iframe video-play"
            >
              <i className="fas fa-play" />
            </a>
            <span className="video-title cd-headline clip">
              <span className="cd-words-wrapper">
                <b className="is-visible">Web Design</b>
                <b>Development</b>
              </span>
            </span>
          </div>
        </div>
      </Slider>
      <div className="container">
        <div className="main-slider-dots" />
      </div>
      <div className="slider-shapes">
        <img
          className="shape dots one"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape dots two"
          src="assets/images/shapes/slider-dots.png"
          alt="Shape"
        />
        <img
          className="shape wave-line"
          src="assets/images/shapes/slider-wave-line.png"
          alt="Shape"
        />
        <img
          className="shape circle"
          src="assets/images/shapes/slider-circle.png"
          alt="Shape"
        />
      </div>
    </section>
  );
};
export default Hero1;
