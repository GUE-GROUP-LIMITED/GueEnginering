"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

const ProjectGridIsotope = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".project-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");

  const projects = [
    {
      name: "Eloheem Suites Nigeria",
      domain: "eloheemsuites.com.ng",
      image: "assets/images/projects/project-two1.jpg",
      categories: "saas construction",
    },
    {
      name: "Eloheem Suites",
      domain: "eloheemsuites.com",
      image: "assets/images/projects/project-two2.jpg",
      categories: "business medical education",
    },
    {
      name: "Eyahs Hotel",
      domain: "eyahshotel.com",
      image: "assets/images/projects/project-two3.jpg",
      categories: "business construction",
    },
    {
      name: "The Big",
      domain: "thebig.com.ng",
      image: "assets/images/projects/project-two4.jpg",
      categories: "business education",
    },
    {
      name: "Youth Transformation",
      domain: "youthtransformation.org",
      image: "assets/images/projects/project-two5.jpg",
      categories: "saas medical",
    },
    {
      name: "Brains Estate",
      domain: "brainsestate.com",
      image: "assets/images/projects/project-two6.jpg",
      categories: "saas construction education",
    },
    {
      name: "Yenge Raphael",
      domain: "yengeraphael.com",
      image: "assets/images/projects/project-two7.jpg",
      categories: "saas construction",
    },
    {
      name: "GUE Industries",
      domain: "gueindustries.com",
      image: "assets/images/projects/project-two8.jpg",
      categories: "business medical education",
    },
    {
      name: "GUE Realty",
      domain: "guerealty.com",
      image: "assets/images/projects/project-two9.jpg",
      categories: "business construction",
    },
    {
      name: "GUE Cyber",
      domain: "guecyber.ng",
      image: "assets/images/projects/project-two10.jpg",
      categories: "business education",
    },
    {
      name: "GUE VTE",
      domain: "guevte.com",
      image: "assets/images/projects/project-two11.jpg",
      categories: "saas medical",
    },
    {
      name: "GUE Smart Farming",
      domain: "guesmartfarming.com",
      image: "assets/images/projects/project-two12.jpg",
      categories: "saas construction education",
    },
    {
      name: "GUE Mobility",
      domain: "guemobility.com",
      image: "assets/images/projects/project-two13.jpg",
      categories: "business construction",
    },
  ];

  return (
    <Fragment>
      <div className="row justify-content-between align-items-end pb-30">
        <div className="col-xl-6">
          <div className="section-title mb-30 wow fadeInUp delay-0-2s">
            <span className="sub-title style-two mb-15">Recent Work</span>
            <h2>Explore Our Featured Engineering Projects</h2>
          </div>
        </div>
        <div className="col-xl-6 text-xl-end">
          <ul className="project-filter filter-btns-one justify-content-center mb-30 wow fadeInUp delay-0-4s">
            <li
              data-filter="*"
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
            >
              All
            </li>
            <li
              data-filter=".business"
              className={`c-pointer ${activeBtn("business")}`}
              onClick={handleFilterKeyChange("business")}
            >
              Business
            </li>
            <li
              className={`c-pointer ${activeBtn("saas")}`}
              onClick={handleFilterKeyChange("saas")}
              data-filter=".saas"
            >
              Saas
            </li>
            <li
              className={`c-pointer ${activeBtn("medical")}`}
              onClick={handleFilterKeyChange("medical")}
              data-filter=".medical"
            >
              Medical
            </li>
            <li
              className={`c-pointer ${activeBtn("construction")}`}
              onClick={handleFilterKeyChange("construction")}
              data-filter=".construction"
            >
              Construction
            </li>
            <li
              className={`c-pointer ${activeBtn("education")}`}
              onClick={handleFilterKeyChange("education")}
              data-filter=".education"
            >
              Education
            </li>
          </ul>
        </div>
      </div>
      <div className="row project-active justify-content-center">
        {projects.map((project, index) => (
          <div
            key={project.domain}
            className={`col-xl-4 col-md-6 item ${project.categories}`}
          >
            <div className="project-item style-two wow fadeInUp delay-0-2s">
              <div className="project-iamge">
                <img src={project.image} alt={project.name} />
                <div className="project-over">
                  <Link
                    href={`https://${project.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="details-btn"
                  >
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
              <div className="project-content">
                <h5>
                  <Link
                    href={`https://${project.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name}
                    <br />
                    {project.domain}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};
export default ProjectGridIsotope;
