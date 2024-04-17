import React from "react";
import classes from "./LandingPageLayout.module.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

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
    <section className={`${classes.container} hide-scrollbar`}>
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
