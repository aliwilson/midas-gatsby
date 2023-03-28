import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  const { children, overlaid } = props;
  return (
    <React.Fragment>
      <Header overlaid={overlaid} />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
