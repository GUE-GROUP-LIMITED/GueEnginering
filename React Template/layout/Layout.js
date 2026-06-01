"use client";
import { animation, stickyNav } from "@/utility";
import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import CallToAction from "../components/CallToAction";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import SideBar from "./SideBar";

const Layout = ({ children, header, className, footer, noHeader }) => {
  const fixedClassName = "home-one";
  const fixedHeader = 1;
  const fixedFooter = 1;

  useEffect(() => {
    animation();
    document.querySelector("body").className = fixedClassName;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
  }, []);
  useEffect(() => {
    return () => {
      niceSelect({ withoutwide: true });
    };
  }, []);
  return (
    <Fragment>
      <VideoPopup />
      <ImageView />
      <div className="page-wrapper">
        {!noHeader && <Header header={fixedHeader} />}
        <SideBar />
        {children}
        {!fixedFooter && <CallToAction />}
        <Footer footer={fixedFooter} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
