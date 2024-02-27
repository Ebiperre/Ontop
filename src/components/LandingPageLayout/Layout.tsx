import React from "react";
import classes from "./LandingPageLayout.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type LandingPageLayoutProps = {
  children: React.ReactNode;
  changeHeaderBg?: string;
  notDisplayHeader?: boolean;
  notDisplayFooter?: boolean;
};

const LandingPageLayout = ({
  children,
  changeHeaderBg,
  notDisplayHeader,
  notDisplayFooter,
}: LandingPageLayoutProps) => {
  return (
    <section className={classes.container}>
      <div
        className={classes.body}
        style={notDisplayHeader ? { height: "100vh" } : undefined}
      >
        {!notDisplayHeader && (
          <div className={classes.header}>
            <Navbar notNavlist={notDisplayFooter} navBg={changeHeaderBg} />
          </div>
        )}
        <div className={classes.bodyMain}>
          <div className={classes.children}>
            {children}
            {!notDisplayFooter && (<Footer />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPageLayout;
